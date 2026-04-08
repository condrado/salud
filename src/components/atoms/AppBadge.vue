<script setup>
defineProps({
  count: { type: Number, default: 0 }
});
</script>

<template>
  <div v-if="count > 0" class="badge">
    {{ count }}
  </div>
</template>

<style scoped>
.badge {
  background: var(--primary, #4CAF50);
  color: white;
  border-radius: 8px; /* Cambiado de 50% a 8px */
  min-width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem; /* Más grande */
  font-weight: 800;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  padding: 0 8px;
}
</style>
