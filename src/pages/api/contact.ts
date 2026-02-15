import type { APIRoute } from 'astro';
import { Resend } from 'resend';

export const prerender = false;

const TO_EMAIL = 'sklenarstvi.ruska@seznam.cz';

export const POST: APIRoute = async ({ request }) => {
  try {
    const data = await request.json();
    const { name, email, telephone, country, message, form } = data;

    // Validate required fields
    if (!name?.trim() || !email?.trim() || !message?.trim()) {
      return new Response(
        JSON.stringify({ error: 'Vyplňte prosím všechna povinná pole.' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    if (!email.includes('@')) {
      return new Response(
        JSON.stringify({ error: 'Zadejte prosím platný email.' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    if (form === 'kontakt' && !telephone?.trim()) {
      return new Response(
        JSON.stringify({ error: 'Vyplňte prosím telefonní číslo.' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const apiKey = import.meta.env.RESEND_API_KEY;
    if (!apiKey) {
      console.error('RESEND_API_KEY is not configured');
      return new Response(
        JSON.stringify({ error: 'Služba pro odesílání emailů není nakonfigurována.' }),
        { status: 500, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const resend = new Resend(apiKey);

    const subject = form === 'poradna'
      ? `Dotaz z poradny od ${name}`
      : `Zpráva z kontaktního formuláře od ${name}`;

    const htmlBody = `
      <h2>${subject}</h2>
      <p><strong>Jméno:</strong> ${escapeHtml(name)}</p>
      <p><strong>Email:</strong> ${escapeHtml(email)}</p>
      ${telephone ? `<p><strong>Telefon:</strong> ${escapeHtml(telephone)}</p>` : ''}
      ${country ? `<p><strong>Země:</strong> ${escapeHtml(country)}</p>` : ''}
      <p><strong>Zpráva:</strong></p>
      <p>${escapeHtml(message).replace(/\n/g, '<br>')}</p>
      <hr>
      <p><small>Odesláno z formuláře na sklenarstviruska.cz (${form})</small></p>
    `;

    await resend.emails.send({
      from: 'Sklenářství Ruská <noreply@sklenarstviruska.cz>',
      to: TO_EMAIL,
      replyTo: email,
      subject,
      html: htmlBody,
    });

    return new Response(
      JSON.stringify({ success: true }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.error('Contact form error:', error);
    return new Response(
      JSON.stringify({ error: 'Při odesílání došlo k chybě. Zkuste to prosím znovu.' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
};

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}
