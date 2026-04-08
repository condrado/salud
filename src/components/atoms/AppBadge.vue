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
  background: var(--primary-color, #4CAF50);
  color: white;
  border-radius: 50%;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.8rem;
  font-weight: bold;
  box-shadow: 0 2px 4px rgba(0,0,0,0.2);
}
</style>
