<script setup>
import { computed } from 'vue';
import { store } from '@/store';
import MainLayout from '@/components/templates/MainLayout.vue';

const allMeals = computed(() => {
  return [
    ...store.meals.desayuno,
    ...store.meals.comida,
    ...store.meals.merienda,
    ...store.meals.cena
  ];
});

const topMeals = computed(() => {
  return [...allMeals.value]
    .filter(m => m.count > 0)
    .sort((a, b) => b.count - a.count)
    .slice(0, 5);
});

const leastMeals = computed(() => {
  return [...allMeals.value]
    .sort((a, b) => a.count - b.count)
    .slice(0, 5);
});

const totalConsumed = computed(() => {
  return allMeals.value.reduce((acc, current) => acc + current.count, 0);
});

// Detectar ingredientes repetitivos (Análisis simple por palabras clave)
const ingredientTrends = computed(() => {
  const counts = {};
  const keywords = ['pollo', 'pavo', 'cerdo', 'salmón', 'atún', 'huevos', 'lácteos', 'yogur', 'queso', 'patata', 'arroz', 'pasta'];
  
  allMeals.value.forEach(meal => {
    if (meal.count > 0) {
      keywords.forEach(key => {
        if (meal.ingredients.toLowerCase().includes(key)) {
          counts[key] = (counts[key] || 0) + meal.count;
        }
      });
    }
  });
  
  return Object.entries(counts)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 4);
});
</script>

<template>
  <MainLayout title="Tus Hábitos">
    <div class="stats-page">
      
      <!-- Resumen General -->
      <div class="summary-card">
        <div class="stat-main">
          <span class="value">{{ totalConsumed }}</span>
          <span class="label">Platos totales</span>
        </div>
      </div>

      <!-- Análisis de Ingredientes -->
      <section class="stat-section">
        <h3>Alerta de Ingredientes</h3>
        <p class="section-desc">Ingredientes que más estás repitiendo</p>
        <div class="ingredient-grid">
          <div v-for="[name, count] in ingredientTrends" :key="name" class="trend-pill">
            <span class="trend-name">{{ name }}</span>
            <span class="trend-count">x{{ count }}</span>
          </div>
        </div>
      </section>

      <!-- Top 5 Mas Consumidos -->
      <section class="stat-section">
        <h3>Favoritos (Top 5)</h3>
        <div class="stat-list">
          <div v-for="meal in topMeals" :key="meal.id" class="stat-item">
            <div class="bar-bg">
              <div class="bar-fill" :style="{ width: (meal.count / (topMeals[0]?.count || 1) * 100) + '%' }"></div>
            </div>
            <div class="item-content">
              <span class="name">{{ meal.name }}</span>
              <span class="count">{{ meal.count }} veces</span>
            </div>
          </div>
        </div>
      </section>

      <!-- Los menos elegidos -->
      <section class="stat-section">
        <h3>¿Olvidamos estos?</h3>
        <p class="section-desc">Platos que apenas has probado (Dales una oportunidad)</p>
        <div class="forgotten-grid">
          <div v-for="meal in leastMeals" :key="meal.id" class="forgotten-badge">
            {{ meal.name }}
          </div>
        </div>
      </section>

    </div>
  </MainLayout>
</template>

<style scoped>
.stats-page {
  padding-bottom: 20px;
}

.summary-card {
  background: linear-gradient(135deg, #0f172a, #1e293b);
  border-radius: 20px;
  padding: 24px;
  text-align: center;
  color: white;
  margin-bottom: 24px;
}

.stat-main .value {
  display: block;
  font-size: 3rem;
  font-weight: 800;
  line-height: 1;
}

.stat-main .label {
  font-size: 0.9rem;
  opacity: 0.7;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.stat-section {
  background: white;
  border-radius: 20px;
  padding: 16px; /* Reducido de 20px */
  margin-bottom: 20px;
  box-shadow: 0 4px 15px rgba(0,0,0,0.02);
}

.section-title {
  display: flex;
  align-items: center;
  gap: 8px; /* Reducido un poco */
  margin-bottom: 6px;
  margin-left: -2px; /* Ajuste fino para pegar el icono al borde si es necesario */
}

h3 {
  margin: 0;
  font-size: 1rem;
  color: #1e293b;
}

.section-desc {
  font-size: 0.8rem;
  color: #64748b;
  margin-bottom: 16px;
}

.ingredient-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.trend-pill {
  background: #f1f5f9;
  padding: 6px 12px;
  border-radius: 20px;
  display: flex;
  gap: 8px;
  font-size: 0.85rem;
}

.trend-name {
  font-weight: 600;
  color: #334155;
  text-transform: capitalize;
}

.trend-count {
  color: #4CAF50;
  font-weight: 800;
}

.stat-list {
  display: grid;
  gap: 12px;
}

.stat-item {
  position: relative;
  padding: 8px 0;
}

.bar-bg {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: #f8fafc;
  border-radius: 8px;
  overflow: hidden;
}

.bar-fill {
  height: 100%;
  background: #ecfdf5;
  border-right: 2px solid #10b981;
  transition: width 1s ease;
}

.item-content {
  position: relative;
  display: flex;
  justify-content: space-between;
  padding: 6px 12px;
  font-size: 0.9rem;
}

.name {
  font-weight: 600;
  color: #1e293b;
}

.count {
  font-weight: 700;
  color: #10b981;
}

.forgotten-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}

.forgotten-badge {
  font-size: 0.75rem;
  background: #f8fafc;
  color: #64748b;
  padding: 4px 10px;
  border-radius: 6px;
  border: 1px solid #e2e8f0;
}
</style>
