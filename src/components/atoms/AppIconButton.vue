<script setup>
import AppIcon from './AppIcon.vue';

defineProps({
  icon: { type: String, required: true },
  color: { type: String, default: '#94a3b8' },
  activeColor: { type: String, default: '#4CAF50' }
});
</script>

<template>
  <button class="icon-btn-atom">
    <AppIcon :name="icon" :size="20" :color="color" />
  </button>
</template>

<style scoped>
.icon-btn-atom {
  background: transparent;
  border: none;
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  padding: 0;
}

.icon-btn-atom:active {
  background: #f1f5f9;
  transform: scale(0.9);
}

/* Sutil efecto de hover si se usa en desktop, pero enfocado a mobile */
@media (hover: hover) {
  .icon-btn-atom:hover {
    background: #f8fafc;
  }
}
</style>
