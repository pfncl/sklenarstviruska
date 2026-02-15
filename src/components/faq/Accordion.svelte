<script lang="ts">
  interface FaqItem {
    question: string;
    answer: string;
  }

  let { items }: { items: FaqItem[] } = $props();
  let activeIndex: number | null = $state(null);

  function toggle(index: number) {
    activeIndex = activeIndex === index ? null : index;
  }
</script>

<div class="accordion">
  {#each items as item, i (item.question)}
    <div class="accordion__item" class:open={activeIndex === i}>
      <button
        class="accordion__header"
        onclick={() => toggle(i)}
        aria-expanded={activeIndex === i}
      >
        <span class="accordion__question">{item.question}</span>
        <span class="accordion__icon">{activeIndex === i ? '−' : '+'}</span>
      </button>
      <div class="accordion__body" class:open={activeIndex === i}>
        <div class="accordion__content">
          {@html item.answer}
        </div>
      </div>
    </div>
  {/each}
</div>

<style>
  .accordion {
    border: 1px solid #e0e0e0;
    border-radius: 4px;
    overflow: hidden;
  }

  .accordion__item {
    border-bottom: 1px solid #e0e0e0;
  }

  .accordion__item:last-child {
    border-bottom: none;
  }

  .accordion__header {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem 1.25rem;
    background: #f7f7f8;
    border: none;
    cursor: pointer;
    text-align: left;
    font-size: 0.9375rem;
    font-weight: 600;
    color: #111;
    transition: background 0.3s ease, color 0.3s ease;
  }

  .accordion__header:hover {
    background: #efefef;
    color: #000543;
  }

  .accordion__item.open .accordion__header {
    background: #000543;
    color: #fff;
  }

  .accordion__icon {
    font-size: 1.25rem;
    line-height: 1;
    flex-shrink: 0;
    margin-left: 1rem;
  }

  .accordion__body {
    display: grid;
    grid-template-rows: 0fr;
    transition: grid-template-rows 0.3s ease;
  }

  .accordion__body.open {
    grid-template-rows: 1fr;
  }

  .accordion__content {
    overflow: hidden;
  }

  .accordion__body.open .accordion__content {
    padding: 1.25rem;
  }

  .accordion__content :global(p) {
    margin-bottom: 0.75rem;
    color: #767676;
    line-height: 1.7;
  }

  .accordion__content :global(p:last-child) {
    margin-bottom: 0;
  }

  .accordion__content :global(ul),
  .accordion__content :global(ol) {
    padding-left: 1.5rem;
    margin-bottom: 0.75rem;
    color: #767676;
  }

  .accordion__content :global(li) {
    margin-bottom: 0.35rem;
  }

  .accordion__content :global(strong) {
    color: #111;
  }

  .accordion__content :global(a) {
    color: #000543;
    text-decoration: underline;
  }

  .accordion__content :global(a:hover) {
    color: #111;
  }
</style>
