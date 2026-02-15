<script lang="ts">
  type Variant = 'poradna' | 'kontakt';

  let { variant = 'kontakt' }: { variant?: Variant } = $props();

  let name = $state('');
  let email = $state('');
  let telephone = $state('');
  let message = $state('');
  let honeypot = $state('');
  let turnstileToken = $state('');
  let status = $state<'idle' | 'submitting' | 'success' | 'error'>('idle');
  let errorMessage = $state('');

  let turnstileEl: HTMLDivElement | undefined = $state();
  let turnstileWidgetId: string | undefined;
  let turnstileLoaded = false;

  let isValid = $derived(
    name.trim() !== '' &&
    email.trim() !== '' &&
    email.includes('@') &&
    message.trim() !== '' &&
    (variant === 'poradna' || telephone.trim() !== '')
  );

  function loadTurnstile() {
    if (turnstileLoaded) return;
    turnstileLoaded = true;

    function renderWidget() {
      if (!turnstileEl || turnstileWidgetId !== undefined) return;
      turnstileWidgetId = (window as any).turnstile.render(turnstileEl, {
        sitekey: '0x4AAAAAACb2orZs8ymvai7p',
        theme: 'light',
        language: 'cs',
        callback: (token: string) => { turnstileToken = token; },
        'expired-callback': () => { turnstileToken = ''; },
        'error-callback': () => { turnstileToken = ''; },
      });
    }

    if ((window as any).turnstile) {
      renderWidget();
    } else if (!document.querySelector('script[src*="turnstile"]')) {
      (window as any).onTurnstileLoad = renderWidget;
      const script = document.createElement('script');
      script.src = 'https://challenges.cloudflare.com/turnstile/v0/api.js?onload=onTurnstileLoad&render=explicit';
      script.async = true;
      document.head.appendChild(script);
    } else {
      (window as any).onTurnstileLoad = renderWidget;
    }
  }

  $effect(() => {
    return () => {
      if (turnstileWidgetId !== undefined && (window as any).turnstile) {
        (window as any).turnstile.remove(turnstileWidgetId);
        turnstileWidgetId = undefined;
      }
    };
  });

  async function handleSubmit(e: SubmitEvent) {
    e.preventDefault();
    if (!isValid) return;

    if (!turnstileToken) {
      errorMessage = 'Ověření nebylo dokončeno. Zkuste to prosím znovu.';
      status = 'error';
      return;
    }

    status = 'submitting';
    try {
      const { actions } = await import('astro:actions');
      const { error } = await actions.sendMessage({
        name: name.trim(),
        email: email.trim(),
        telephone: telephone.trim(),
        message: message.trim(),
        form: variant,
        honeypot,
        turnstileToken,
      });

      if (error) {
        errorMessage = error.message || 'Při odesílání došlo k chybě. Zkuste to prosím znovu.';
        status = 'error';
      } else {
        status = 'success';
        name = '';
        email = '';
        telephone = '';
        message = '';
      }
    } catch {
      errorMessage = 'Při odesílání došlo k chybě. Zkuste to prosím znovu.';
      status = 'error';
    }
  }
</script>

<form class="form" onsubmit={handleSubmit} onfocusin={loadTurnstile} novalidate>
  {#if status === 'success'}
    <div class="form__alert form__alert--success">
      Děkujeme za vaši zprávu! Ozveme se vám co nejdříve.
    </div>
  {/if}

  {#if status === 'error'}
    <div class="form__alert form__alert--error">
      {errorMessage}
    </div>
  {/if}

  <div class="form__field">
    <input
      type="text"
      bind:value={name}
      placeholder="Jméno *"
      required
      class="form__input"
    />
  </div>

  <div class="form__field">
    <input
      type="email"
      bind:value={email}
      placeholder="E-mail *"
      required
      class="form__input"
    />
  </div>

  <div class="form__field">
    <input
      type="tel"
      bind:value={telephone}
      placeholder={variant === 'kontakt' ? 'Telefon *' : 'Telefon'}
      required={variant === 'kontakt'}
      class="form__input"
    />
  </div>

  <div class="form__field">
    <textarea
      bind:value={message}
      placeholder="Zpráva *"
      required
      rows="6"
      class="form__input form__textarea"
    ></textarea>
  </div>

  <div class="form__field form__turnstile">
    <div bind:this={turnstileEl}></div>
  </div>

  <!-- Honeypot -->
  <div class="form__honeypot" aria-hidden="true" tabindex="-1">
    <label>Email <input type="text" bind:value={honeypot} autocomplete="off" tabindex="-1"></label>
  </div>

  <button
    type="submit"
    class="form__submit"
    disabled={!isValid || status === 'submitting'}
  >
    {status === 'submitting' ? 'Odesílám...' : 'Odeslat'}
  </button>
</form>

<style>
  .form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .form__input {
    width: 100%;
    padding: 0.75rem 1rem;
    border: 1px solid #e0e0e0;
    border-radius: 4px;
    font-family: 'Open Sans', sans-serif;
    font-size: 0.9375rem;
    color: #111;
    background: #fff;
    transition: border-color 0.3s ease;
  }

  .form__input::placeholder {
    color: #999;
  }

  .form__input:focus {
    outline: none;
    border-color: #000543;
  }

  .form__textarea {
    resize: vertical;
    min-height: 120px;
  }

  .form__turnstile {
    margin-bottom: 0;
  }

  .form__honeypot {
    position: absolute;
    left: -9999px;
    opacity: 0;
    height: 0;
    overflow: hidden;
  }

  .form__submit {
    align-self: flex-start;
    padding: 0.75rem 2rem;
    background: #000543;
    color: #fff;
    border: none;
    border-radius: 4px;
    font-size: 0.9375rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    cursor: pointer;
    transition: background 0.3s ease, transform 0.3s ease;
  }

  .form__submit:hover:not(:disabled) {
    background: #111;
    transform: translateY(-1px);
  }

  .form__submit:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  .form__alert {
    padding: 1rem;
    border-radius: 4px;
    font-size: 0.9375rem;
  }

  .form__alert--success {
    background: #d4edda;
    color: #155724;
    border: 1px solid #c3e6cb;
  }

  .form__alert--error {
    background: #f8d7da;
    color: #721c24;
    border: 1px solid #f5c6cb;
  }
</style>
