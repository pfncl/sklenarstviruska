<script lang="ts">
  import { t, type Locale } from '../../i18n/translations';
  import { getNavigation } from '../../data/navigation';
  import type { NavItem } from '../../data/navigation';

  let { lang = 'cs' }: { lang?: Locale } = $props();
  const i18n = $derived(t(lang));
  const navigation: NavItem[] = $derived(getNavigation(lang));

  let isOpen = $state(false);

  export function open() {
    isOpen = true;
  }

  $effect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  });

  $effect(() => {
    const toggle = document.getElementById('menu-toggle');
    if (!toggle) return;
    const handler = () => { isOpen = true; };
    toggle.addEventListener('click', handler);
    return () => toggle.removeEventListener('click', handler);
  });

  function close() {
    isOpen = false;
  }

  function handleKeydown(e: KeyboardEvent) {
    if (e.key === 'Escape') close();
  }
</script>

<svelte:window onkeydown={handleKeydown} />

{#if isOpen}
  <div class="overlay" onclick={close} role="presentation"></div>
  <nav class="mobile-menu" aria-label={i18n.mobileNav}>
    <button class="mobile-menu__close" onclick={close} aria-label={i18n.closeMenu}>
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6L6 18M6 6l12 12"/></svg>
    </button>
    <ul class="mobile-menu__list">
      {#each navigation as item (item.href)}
        <li>
          <a href={item.href} class="mobile-menu__link" onclick={close}>{item.label}</a>
        </li>
      {/each}
    </ul>
    <div class="mobile-menu__flags">
      <a href="/" class="mobile-menu__flag" class:active={lang === 'cs'} aria-label="Česky" onclick={close}>
        <svg viewBox="0 0 32 32" width="28" height="28"><clipPath id="cz-m"><circle cx="16" cy="16" r="16"/></clipPath><g clip-path="url(#cz-m)"><rect y="0" width="32" height="16" fill="#fff"/><rect y="16" width="32" height="16" fill="#d7141a"/><polygon points="0,0 16,16 0,32" fill="#11457e"/></g></svg>
      </a>
      <a href="/en/" class="mobile-menu__flag" class:active={lang === 'en'} aria-label="English" onclick={close}>
        <svg viewBox="0 0 32 32" width="28" height="28"><clipPath id="gb-m"><circle cx="16" cy="16" r="16"/></clipPath><g clip-path="url(#gb-m)"><rect width="32" height="32" fill="#012169"/><path d="M0,0 L32,32 M32,0 L0,32" stroke="#fff" stroke-width="5.3"/><path d="M0,0 L32,32" stroke="#C8102E" stroke-width="3.5" clip-path="polygon(16 0, 32 0, 16 16, 32 32, 16 32, 16 16, 0 0)"/><path d="M32,0 L0,32" stroke="#C8102E" stroke-width="3.5" clip-path="polygon(0 0, 16 0, 16 16, 32 32, 16 32, 16 16)"/><rect x="12" width="8" height="32" fill="#fff"/><rect y="12" width="32" height="8" fill="#fff"/><rect x="13.5" width="5" height="32" fill="#C8102E"/><rect y="13.5" width="32" height="5" fill="#C8102E"/></g></svg>
      </a>
    </div>
  </nav>
{/if}

<style>
  .overlay {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.5);
    z-index: 200;
  }

  .mobile-menu {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    width: 280px;
    max-width: 80vw;
    background: var(--color-white, #fff);
    z-index: 201;
    padding: 2rem 1.5rem;
    box-shadow: -4px 0 20px rgba(0, 0, 0, 0.15);
    animation: slideIn 0.3s ease;
  }

  @keyframes slideIn {
    from { transform: translateX(100%); }
    to { transform: translateX(0); }
  }

  .mobile-menu__close {
    position: absolute;
    top: 1rem;
    right: 1rem;
    background: none;
    border: none;
    cursor: pointer;
    color: var(--color-dark, #111);
    padding: 0.5rem;
  }

  .mobile-menu__list {
    list-style: none;
    padding: 0;
    margin: 2rem 0 0;
  }

  .mobile-menu__link {
    display: block;
    padding: 0.75rem 0;
    color: var(--color-dark, #111);
    font-size: 1.125rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    text-decoration: none;
    border-bottom: 1px solid #e0e0e0;
    transition: color 0.3s ease;
  }

  .mobile-menu__link:hover {
    color: var(--color-accent, #000543);
  }

  .mobile-menu__flags {
    display: flex;
    gap: 0.75rem;
    margin-top: 1.5rem;
    padding-top: 1rem;
    border-top: 1px solid #e0e0e0;
  }

  .mobile-menu__flag {
    display: flex;
    opacity: 1;
    transition: opacity 0.3s ease;
  }

  .mobile-menu__flag.active {
    opacity: 0.4;
    pointer-events: none;
  }
</style>
