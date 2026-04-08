<script setup>
const emit = defineEmits(['navigate']);
defineProps({
  activeView: { type: String, default: 'desayuno' }
});

const navItems = [
  { id: 'desayuno', label: 'Desayuno', icon: '☕' },
  { id: 'comida', label: 'Comida', icon: '🍱' },
  { id: 'merienda', label: 'Merienda', icon: '🍎' },
  { id: 'cena', label: 'Cena', icon: '🍲' },
  { id: 'compra', label: 'Compra', icon: '🛒' },
  { id: 'deporte', label: 'Deporte', icon: '💪' }
];
</script>

<template>
  <nav class="bottom-nav">
    <div 
      v-for="item in navItems" 
      :key="item.id"
      class="nav-item"
      :class="{ active: activeView === item.id }"
      @click="$emit('navigate', item.id)"
    >
      <span class="icon">{{ item.icon }}</span>
      <span class="label">{{ item.label }}</span>
    </div>
  </nav>
</template>

<style scoped>
.bottom-nav {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background: white;
  display: flex;
  justify-content: space-around;
  padding: 8px 0;
  padding-bottom: env(safe-area-inset-bottom, 12px);
  box-shadow: 0 -4px 15px rgba(0,0,0,0.06);
  z-index: 900;
  border-radius: 20px 20px 0 0;
}

.nav-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  color: #999;
  transition: all 0.2s;
  cursor: pointer;
}

.nav-item.active {
  color: #4CAF50;
  transform: translateY(-2px);
}

.icon {
  font-size: 1.4rem;
  margin-bottom: 4px;
}

.label {
  font-size: 0.65rem;
  font-weight: 600;
  text-transform: uppercase;
}
</style>
