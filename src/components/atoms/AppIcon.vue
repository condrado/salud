<script setup>
const props = defineProps({
  name: { type: String, required: true },
  size: { type: [Number, String], default: 24 },
  color: { type: String, default: 'currentColor' }
});

// Definición de paths SVG para iconos elegantes
const icons = {
  coffee: 'M18 8h1a4 4 0 0 1 0 8h-1M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z',
  lunch: 'M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5',
  apple: 'M12 20.94c1.88 0 3.39-.49 4.38-1.42 1-.95 1.42-2.3 1.42-3.83 0-1.74-.53-3.08-1.55-4.11-1.02-1.02-2.37-1.58-4.25-1.58-1.88 0-3.23.56-4.25 1.58-1.02 1.03-1.55 2.37-1.55 4.11 0 1.53.42 2.88 1.42 3.83.99.93 2.5 1.42 4.38 1.42z M12 5V2',
  dinner: 'M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2 M15 2v12a3 3 0 0 0 6 0V2 M18 20v2 M15 20v2 M21 20v2',
  cart: 'M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6',
  bolt: 'M13 2L3 14h9l-1 8 10-12h-9l1-8z',
  info: 'M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-1-11v6h2v-6h-2zm0-4v2h2V7h-2z',
  minus: 'M5 12h14',
  chart: 'M18 20V10M12 20V4M6 20v-6',
  alert: 'M12 9v4m0 4h.01M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2z',
  star: 'M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14l-5-4.87 6.91-1.01L12 2z',
  search: 'M11 19a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm10 2l-4.35-4.35',
  run: 'M13 4a2 2 0 1 1-4 0 2 2 0 0 1 4 0zM4 15l4-1 4-4 4 1 2 4M6 22l3-5m2 5l2-7'
};
</script>

<template>
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    :width="size" 
    :height="size" 
    viewBox="0 0 24 24" 
    fill="none" 
    :stroke="color" 
    stroke-width="2" 
    stroke-linecap="round" 
    stroke-linejoin="round"
  >
    <path :d="icons[name]" />
  </svg>
</template>
