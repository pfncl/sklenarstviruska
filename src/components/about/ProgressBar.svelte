<script lang="ts">
  interface BarItem {
    label: string;
    percentage: number;
  }

  let { items }: { items: BarItem[] } = $props();
  let containerEl: HTMLDivElement | undefined = $state();
  let animated = $state(false);

  $effect(() => {
    if (!containerEl) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          animated = true;
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(containerEl);
    return () => observer.disconnect();
  });
</script>

<div class="progress-bars" bind:this={containerEl}>
  {#each items as item (item.label)}
    <div class="progress-item">
      <div class="progress-label">
        <span>{item.label}</span>
        <span>{item.percentage}%</span>
      </div>
      <div class="progress-track">
        <div
          class="progress-fill"
          class:animated
          style="--target-width: {item.percentage}%"
        ></div>
      </div>
    </div>
  {/each}
</div>

<style>
  .progress-bars {
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
  }

  .progress-label {
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.4rem;
    font-size: 0.990rem;
    font-weight: 600;
    color: var(--color-dark, #111);
  }

  .progress-track {
    height: 22px;
    background: #e0e0e0;
    border-radius: 3px;
    overflow: hidden;
  }

  .progress-fill {
    height: 100%;
    width: 0;
    background: #000543;
    background-image: repeating-linear-gradient(
      -45deg,
      transparent,
      transparent 8px,
      rgba(255, 255, 255, 0.15) 8px,
      rgba(255, 255, 255, 0.15) 16px
    );
    border-radius: 3px;
    transition: width 1.2s ease;
  }

  .progress-fill.animated {
    width: var(--target-width);
  }
</style>
