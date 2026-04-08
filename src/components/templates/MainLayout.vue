<script setup>
import { computed } from 'vue';

const props = defineProps({
  title: { type: String, default: 'Salud' }
});
</script>

<template>
  <div class="main-layout">
    <header class="header">
      <div class="container">
        <h1>{{ title }}</h1>
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
  padding: 18px 0 14px;
  position: sticky;
  top: 0;
  z-index: 800;
  box-shadow: 0 4px 20px rgba(0,0,0,0.1);
  border-radius: 0 0 24px 24px; /* Simetría con el footer */
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
