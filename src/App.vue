<script setup>
import { ref } from 'vue';
import BottomNav from '@/components/organisms/BottomNav.vue';
import MealsView from '@/pages/MealsView.vue';
import ShoppingView from '@/pages/ShoppingView.vue';
import SportsView from '@/pages/SportsView.vue';
import StatsView from '@/pages/StatsView.vue';

const activeView = ref('desayuno');

const handleNavigation = (view) => {
  activeView.value = view;
  window.scrollTo(0, 0);
};
</script>

<template>
  <div class="app-wrapper">
    <div class="mobile-container">
      <template v-if="['desayuno', 'comida', 'merienda', 'cena'].includes(activeView)">
        <MealsView :viewType="activeView" :key="activeView" />
      </template>
      
      <template v-else-if="activeView === 'compra'">
        <ShoppingView />
      </template>
      
      <template v-else-if="activeView === 'deporte'">
        <SportsView />
      </template>

      <template v-else-if="activeView === 'stats'">
        <StatsView />
      </template>

      <BottomNav :activeView="activeView" @navigate="handleNavigation" />
    </div>
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;800&display=swap');

:root {
  --primary: #4CAF50;
  --bg: #f8fafc;
  --surface: #ffffff;
  --text-main: #0f172a;
  --text-muted: #64748b;
}

body {
  margin: 0;
  padding: 0;
  background-color: #eaeff2;
  font-family: 'Inter', sans-serif;
  color: var(--text-main);
  overscroll-behavior: none;
}

.app-wrapper {
  display: flex;
  justify-content: center;
  min-height: 100vh;
}

.mobile-container {
  width: 100%;
  max-width: 430px; /* Tamaño iPhone Max */
  background: var(--bg);
  min-height: 100vh;
  position: relative;
  box-shadow: 0 0 40px rgba(0,0,0,0.05);
}
</style>
