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
  background: #f8fafc;
  padding-bottom: 80px; /* Space for nav */
}

.header {
  background: white;
  padding: 20px 0 10px;
  position: sticky;
  top: 0;
  z-index: 800;
  box-shadow: 0 4px 10px rgba(0,0,0,0.02);
}

.container {
  padding: 0 20px;
  max-width: 600px;
  margin: 0 auto;
}

h1 {
  font-size: 1.5rem;
  color: #2c3e50;
  margin: 0;
  font-weight: 800;
}

.content {
  flex: 1;
  padding-top: 20px;
}
</style>
