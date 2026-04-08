<script setup>
import AppIcon from '@/components/atoms/AppIcon.vue';

const emit = defineEmits(['navigate']);
defineProps({
  activeView: { type: String, default: 'desayuno' }
});

const navItems = [
  { id: 'desayuno', label: 'Cafe', icon: 'coffee' },
  { id: 'comida', label: 'Almuerzo', icon: 'lunch' },
  { id: 'merienda', label: 'Extra', icon: 'apple' },
  { id: 'cena', label: 'Cena', icon: 'dinner' },
  { id: 'compra', label: 'Shop', icon: 'cart' },
  { id: 'deporte', label: 'Gym', icon: 'bolt' },
  { id: 'stats', label: 'Stats', icon: 'chart' }
];
</script>

<template>
  <nav class="bottom-nav-v2">
    <div 
      v-for="item in navItems" 
      :key="item.id"
      class="nav-item-v2"
      :class="{ active: activeView === item.id }"
      @click="$emit('navigate', item.id)"
    >
      <div class="icon-wrapper">
        <AppIcon 
          :name="item.icon" 
          :size="20" 
          :color="activeView === item.id ? '#ffffff' : '#94a3b8'" 
        />
      </div>
    </div>
  </nav>
</template>

<style scoped>
.bottom-nav-v2 {
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  max-width: 430px;
  height: 44px;
  background: #0f172a; /* Sophisticated deep dark */
  display: flex;
  justify-content: space-around;
  padding-bottom: env(safe-area-inset-bottom, 8px);
  z-index: 1000;
  border-radius: 24px 24px 0 0;
}

.nav-item-v2 {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.icon-wrapper {
  padding: 8px;
  border-radius: 12px;
  transition: all 0.3s;
}

.nav-item-v2.active .icon-wrapper {
  background: #4CAF50;
  transform: translateY(-8px);
  box-shadow: 0 4px 12px rgba(76, 175, 80, 0.4);
}

.label-v2 {
  font-size: 0.65rem;
  font-weight: 500;
  color: #94a3b8;
  margin-top: 2px;
  transition: all 0.3s;
}

.nav-item-v2.active .label-v2 {
  color: #ffffff;
  transform: translateY(-2px);
}
</style>
