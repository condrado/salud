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
  background: var(--primary, #4CAF50);
  color: white;
  border-radius: 8px;
  min-width: 28px;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.95rem;
  font-weight: 700;
  padding: 0 6px;
  transition: all 0.3s;
}

.empty {
  background: #f1f5f9;
  color: #94a3b8;
  font-weight: 400;
}
</style>
