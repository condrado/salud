<script setup>
defineProps({
  count: { type: Number, default: 0 }
});
</script>

<template>
  <div class="badge" :class="{ empty: count === 0 }">
    {{ count }}
  </div>
</template>

<style scoped>
.badge {
  color: var(--primary, #4CAF50);
  display: inline-block;
  font-size: 1.1rem;
  font-weight: 800;
  margin-right: 4px; /* Pequeño espacio con el nombre */
  transition: all 0.3s;
  line-height: 1;
}

.empty {
  color: #cbd5e1; /* Gris muy clarito para el 0 */
  font-weight: 500;
}
</style>
