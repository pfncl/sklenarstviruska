<script lang="ts">
  let { embedUrl }: { embedUrl: string } = $props();
</script>

<div class="map-wrapper">
  <iframe
    src={embedUrl}
    width="100%"
    height="450"
    style="border:0"
    allowfullscreen
    loading="lazy"
    referrerpolicy="no-referrer-when-downgrade"
    title="Mapa - Sklenářství Ruská, Praha 10"
  ></iframe>
</div>

<style>
  .map-wrapper {
    width: 100%;
    border-radius: 4px;
    overflow: hidden;
    line-height: 0;
  }

  .map-wrapper iframe {
    width: 100%;
    height: 450px;
  }

  @media (max-width: 778px) {
    .map-wrapper iframe {
      height: 300px;
    }
  }
</style>
