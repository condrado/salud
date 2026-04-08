<script setup>
import { computed } from 'vue';
import { store, actions } from '@/store';
import ReminderModal from '@/components/organisms/ReminderModal.vue';

defineProps({
  title: { type: String, required: true }
});

const currentDateStr = computed(() => {
  const options = { day: 'numeric', month: 'short', year: 'numeric' };
  return new Intl.DateTimeFormat('es-ES', options).format(new Date());
});

const planStatus = computed(() => {
  const day = actions.getCycleDay();
  return day === 0 ? '¡Empieza pronto!' : `Día ${day} de 14`;
});
</script>

<template>
  <div class="main-layout">
    <header class="header">
      <div class="container header-grid">
        <div class="header-left">
          <h1>{{ title }}</h1>
        </div>
        <div class="header-right">
          <span class="header-date">{{ currentDateStr }}</span>
          <span class="header-status">{{ planStatus }}</span>
        </div>
      </div>
    </header>
    
    <main class="content">
      <div class="container">
        <slot></slot>
      </div>
    </main>
    
    <!-- El BottomNav se gestiona en App.vue -->
    <ReminderModal />
  </div>
</template>

<style scoped>
.main-layout {
  min-height: calc(100vh - 64px); /* Restamos el alto del header fijo */
  background: #f1f5f9; 
  padding-bottom: 80px; /* Espacio para el footer fijo */
  display: flex;
  flex-direction: column;
}

.header {
  background: #0f172a; 
  padding: 14px 0;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  box-shadow: 0 4px 20px rgba(0,0,0,0.1);
  border-radius: 0 0 24px 24px;}

.header-grid {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.header-right {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}

.header-date {
  color: rgba(255, 255, 255, 0.6); /* Blanco con opacidad para jerarquía */
  font-size: 0.7rem;
  font-weight: 600;
  text-transform: uppercase;
}

.header-status {
  color: #ffffff; /* Blanco puro para el contador */
  font-size: 0.85rem;
  font-weight: 800;
}

.container {
  padding: 0 24px;
  max-width: 600px;
  margin: 0 auto;
}

h1 {
  font-size: 1.35rem;
  color: #ffffff; /* Texto blanco elegante */
  margin: 0;
  font-weight: 700;
  letter-spacing: -0.01em;
}

.content {
  flex: 1;
  padding-top: 80px;
}
</style>
