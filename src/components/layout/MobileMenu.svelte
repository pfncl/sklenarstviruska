<script lang="ts">
  import { navigation } from '../../data/navigation';

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
  <nav class="mobile-menu" aria-label="Mobilní navigace">
    <button class="mobile-menu__close" onclick={close} aria-label="Zavřít menu">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6L6 18M6 6l12 12"/></svg>
    </button>
    <ul class="mobile-menu__list">
      {#each navigation as item}
        <li>
          <a href={item.href} class="mobile-menu__link" onclick={close}>{item.label}</a>
        </li>
      {/each}
    </ul>
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
</style>
