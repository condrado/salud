<script setup>
import { ref } from 'vue';
import BottomNav from '@/components/organisms/BottomNav.vue';
import MealsView from '@/pages/MealsView.vue';
import ShoppingView from '@/pages/ShoppingView.vue';
import SportsView from '@/pages/SportsView.vue';

const activeView = ref('desayuno');

const handleNavigation = (view) => {
  activeView.value = view;
  window.scrollTo(0, 0);
};
</script>

<template>
  <div class="app-container">
    <!-- Renderizado condicional para evitar dependencias externas como vue-router en este paso simple -->
    <template v-if="['desayuno', 'comida', 'merienda', 'cena'].includes(activeView)">
      <MealsView :viewType="activeView" :key="activeView" />
    </template>
    
    <template v-else-if="activeView === 'compra'">
      <ShoppingView />
    </template>
    
    <template v-else-if="activeView === 'deporte'">
      <SportsView />
    </template>

    <BottomNav :activeView="activeView" @navigate="handleNavigation" />
  </div>
</template>

<style>
/* Estilos globales y reset específicos de la aplicación premium */
:root {
  --primary-color: #4CAF50;
  --bg-color: #f8fafc;
}

body {
  margin: 0;
  padding: 0;
  font-family: 'Outfit', sans-serif; /* Si estuviera disponible, si no sans-serif */
  background-color: var(--bg-color);
  -webkit-font-smoothing: antialiased;
}

.app-container {
  max-width: 500px;
  margin: 0 auto;
}
</style>
