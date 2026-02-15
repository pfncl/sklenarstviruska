import { defineAction, ActionError } from 'astro:actions';
import { z } from 'astro:schema';
import { RESEND_API_KEY, CONTACT_EMAIL, ADMIN_PASSWORD, TURNSTILE_SECRET_KEY } from 'astro:env/server';
import { Resend } from 'resend';

const COOKIE_NAME = 'admin_session';

async function hashToken(password: string): Promise<string> {
  const data = new TextEncoder().encode(password + ':sklenarstvi-admin-salt');
  const hash = await crypto.subtle.digest('SHA-256', data);
  return Array.from(new Uint8Array(hash)).map(b => b.toString(16).padStart(2, '0')).join('');
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

async function verifyTurnstile(token: string): Promise<boolean> {
  const res = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ secret: TURNSTILE_SECRET_KEY, response: token }),
  });
  const result = await res.json() as { success: boolean };
  return result.success;
}

export const server = {
  sendMessage: defineAction({
    accept: 'json',
    input: z.object({
      name: z.string().min(1, 'Jméno je povinné.'),
      email: z.string().email('Neplatný e-mail.'),
      telephone: z.string().optional(),
      message: z.string().min(1, 'Zpráva je povinná.'),
      form: z.enum(['poradna', 'kontakt']),
      honeypot: z.string().optional(),
      turnstileToken: z.string().min(1, 'Ověření nebylo dokončeno.'),
    }),
    handler: async (input, context) => {
      // Honeypot check
      if (input.honeypot) {
        return { success: true };
      }

      // Verify Turnstile token
      if (!await verifyTurnstile(input.turnstileToken)) {
        throw new ActionError({
          code: 'FORBIDDEN',
          message: 'Ověření Turnstile selhalo.',
        });
      }

      const resend = new Resend(RESEND_API_KEY);

      const subject = input.form === 'poradna'
        ? `Dotaz z poradny od ${input.name}`
        : `Zpráva z kontaktního formuláře od ${input.name}`;

      const htmlBody = `
        <h2>${escapeHtml(subject)}</h2>
        <table style="border-collapse:collapse;width:100%;max-width:600px;">
          <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Jméno</td>
              <td style="padding:8px;border:1px solid #ddd;">${escapeHtml(input.name)}</td></tr>
          <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">E-mail</td>
              <td style="padding:8px;border:1px solid #ddd;">${escapeHtml(input.email)}</td></tr>
          ${input.telephone ? `<tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Telefon</td>
              <td style="padding:8px;border:1px solid #ddd;">${escapeHtml(input.telephone)}</td></tr>` : ''}
          <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Zpráva</td>
              <td style="padding:8px;border:1px solid #ddd;">${escapeHtml(input.message).replace(/\n/g, '<br>')}</td></tr>
        </table>
        <p><small>Odesláno z formuláře na sklenarstviruska.cz (${input.form})</small></p>
      `;

      const { error } = await resend.batch.send([
        {
          from: 'Sklenářství Ruská <formular@sklenarstviruska.cz>',
          to: [CONTACT_EMAIL],
          replyTo: input.email,
          subject,
          html: htmlBody,
        },
        {
          from: 'Sklenářství Ruská <formular@sklenarstviruska.cz>',
          to: [input.email],
          subject: 'Potvrzení zprávy - Sklenářství Ruská',
          html: `
            <h2>Děkujeme za Vaši zprávu!</h2>
            <p>Dobrý den,</p>
            <p>potvrzujeme přijetí Vaší zprávy. Zde je shrnutí:</p>
            ${htmlBody}
            <p>Budeme Vás co nejdříve kontaktovat.</p>
            <p>S pozdravem,<br>Sklenářství Ruská</p>
          `,
        },
      ]);

      if (error) {
        throw new ActionError({
          code: 'INTERNAL_SERVER_ERROR',
          message: error.message,
        });
      }

      // Save to D1 database
      const db = context.locals.runtime.env.DB;
      await db.prepare(
        `INSERT INTO messages (form, name, email, telephone, message)
         VALUES (?, ?, ?, ?, ?)`
      ).bind(
        input.form,
        input.name,
        input.email,
        input.telephone || null,
        input.message,
      ).run();

      return { success: true };
    },
  }),

  adminLogin: defineAction({
    accept: 'form',
    input: z.object({
      password: z.string(),
      'cf-turnstile-response': z.string().min(1, 'Ověření nebylo dokončeno.'),
    }),
    handler: async (input, context) => {
      if (!await verifyTurnstile(input['cf-turnstile-response'])) {
        throw new ActionError({ code: 'FORBIDDEN', message: 'Ověření selhalo. Zkuste to znovu.' });
      }

      if (input.password !== ADMIN_PASSWORD) {
        throw new ActionError({ code: 'FORBIDDEN', message: 'Nesprávné heslo.' });
      }

      const token = await hashToken(input.password);
      context.cookies.set(COOKIE_NAME, token, {
        path: '/',
        maxAge: 60 * 60 * 24 * 7,
        httpOnly: true,
        secure: true,
        sameSite: 'strict',
      });

      return { success: true };
    },
  }),

  adminLogout: defineAction({
    accept: 'form',
    handler: async (_input, context) => {
      context.cookies.delete(COOKIE_NAME, { path: '/' });
      return { success: true };
    },
  }),

  adminDeleteMessage: defineAction({
    accept: 'form',
    input: z.object({
      messageId: z.coerce.number(),
    }),
    handler: async (input, context) => {
      const expectedToken = await hashToken(ADMIN_PASSWORD);
      const session = context.cookies.get(COOKIE_NAME)?.value;
      if (session !== expectedToken) {
        throw new ActionError({ code: 'UNAUTHORIZED', message: 'Nepřihlášen.' });
      }

      const db = context.locals.runtime.env.DB;
      await db.prepare('DELETE FROM messages WHERE id = ?').bind(input.messageId).run();
      return { success: true };
    },
  }),
};
