<script setup>
import { computed } from 'vue';
import { store } from '@/store';

defineProps({
  title: { type: String, required: true }
});

const currentDateStr = computed(() => {
  const options = { day: 'numeric', month: 'short', year: 'numeric' };
  return new Intl.DateTimeFormat('es-ES', options).format(new Date());
});

const planStatus = computed(() => {
  const today = new Date();
  const start = new Date(store.startDate);
  const diffTime = today - start;
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

  if (diffDays < 0) {
    return `Inicia en ${Math.abs(diffDays)} días`;
  } else {
    // Ciclo infinito de 14 días (Día 1 al 14)
    const dayOfCycle = (diffDays % 14) + 1;
    return `Día ${dayOfCycle} de 14`;
  }
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
  </div>
</template>

<style scoped>
.main-layout {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: #f1f5f9; /* Soft background to pop cards */
  padding-bottom: 80px; 
}

.header {
  background: #0f172a; /* Mismo color que el footer */
  padding: 14px 0;
  position: sticky;
  top: 0;
  z-index: 800;
  box-shadow: 0 4px 20px rgba(0,0,0,0.1);
  border-radius: 0 0 24px 24px; /* Simetría con el footer */
}

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
  padding-top: 16px;
}
</style>
