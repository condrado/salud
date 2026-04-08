<script setup>
import { computed } from 'vue';
import { store } from '@/store';
import MainLayout from '@/components/templates/MainLayout.vue';
import AppIcon from '@/components/atoms/AppIcon.vue';

// Funciones ayudantes para rankings
const getTop3 = (list) => [...list]
  .filter(m => m.count > 0)
  .sort((a, b) => b.count - a.count)
  .slice(0, 3);

const getBottom3 = (list) => [...list].sort((a, b) => a.count - b.count).slice(0, 3);

const categoryRankings = computed(() => ({
  desayuno: getTop3(store.meals.desayuno),
  comida: getTop3(store.meals.comida),
  merienda: getTop3(store.meals.merienda),
  cena: getTop3(store.meals.cena)
}));

const bottomOverall = computed(() => {
  const all = [
    ...store.meals.desayuno,
    ...store.meals.comida,
    ...store.meals.merienda,
    ...store.meals.cena
  ];
  return getBottom3(all);
});

const recentWalking = computed(() => {
  return [...store.walkingDays].sort().reverse().slice(0, 7);
});

const totalStepsDays = computed(() => store.walkingDays.length);
</script>

<template>
  <MainLayout title="Tus Hábitos">
    <div class="stats-page">
      
      <!-- Resumen de Actividad Física -->
      <section class="stat-section activity-card">
        <div class="activity-header">
          <AppIcon name="run" color="#10b981" :size="32" />
          <div class="activity-info">
            <h3>Actividad Física</h3>
            <p>Has andado <strong>{{ totalStepsDays }}</strong> días en total</p>
          </div>
        </div>
        <div v-if="recentWalking.length > 0" class="walking-history">
          <span v-for="date in recentWalking" :key="date" class="date-tag">
            {{ new Date(date).toLocaleDateString('es-ES', { day: '2-digit', month: 'short' }) }}
          </span>
        </div>
        <p v-else class="empty-msg">Aún no has registrado caminatas</p>
      </section>

      <!-- Top 3 por Categoría -->
      <section v-for="(meals, cat) in categoryRankings" :key="cat" class="stat-section">
        <div class="section-header">
          <AppIcon :name="cat === 'desayuno' ? 'coffee' : (cat === 'comida' ? 'lunch' : (cat === 'merienda' ? 'apple' : 'dinner'))" :size="20" color="#64748b" />
          <h3 class="capitalize">{{ cat }} (Top 3)</h3>
        </div>
        
        <div v-if="meals.length > 0" class="ranking-list">
          <div v-for="(meal, index) in meals" :key="meal.id" class="ranking-item">
            <span class="rank-num">{{ index + 1 }}</span>
            <div class="rank-details">
              <span class="rank-name">{{ meal.name }}</span>
              <span class="rank-count">{{ meal.count }} veces</span>
            </div>
          </div>
        </div>
        <p v-else class="empty-msg">Aún no has registrado platos en esta categoría</p>
      </section>

      <!-- Los 3 Menos Hechos (Olvidados) -->
      <section class="stat-section forgotten-section">
        <div class="section-header">
          <AppIcon name="alert" :size="20" color="#f59e0b" />
          <h3>Los 3 más olvidados</h3>
        </div>
        <div class="forgotten-list">
          <div v-for="meal in bottomOverall" :key="meal.id" class="forgot-item">
            {{ meal.name }}
          </div>
        </div>
      </section>

    </div>
  </MainLayout>
</template>

<style scoped>
.stats-page {
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding-bottom: 80px;
}

.stat-section {
  background: white;
  border-radius: 20px;
  padding: 16px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
}

.activity-card {
  background: linear-gradient(135deg, #ecfdf5 0%, #ffffff 100%);
  border: 1px solid #10b98133;
}

.activity-header {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 12px;
}

.activity-info h3 {
  margin: 0;
  font-size: 1.1rem;
  color: #064e3b;
}

.activity-info p {
  margin: 0;
  font-size: 0.85rem;
  color: #065f46;
}

.walking-history {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-top: 8px;
}

.date-tag {
  background: #10b981;
  color: white;
  padding: 2px 8px;
  border-radius: 6px;
  font-size: 0.75rem;
  font-weight: 600;
}

.section-header {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 12px;
  border-bottom: 1px solid #f1f5f9;
  padding-bottom: 8px;
}

.section-header h3 {
  font-size: 0.9rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: #64748b;
  margin: 0;
}

.ranking-list {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.ranking-item {
  display: flex;
  align-items: center;
  gap: 12px;
}

.rank-num {
  font-weight: 800;
  font-size: 1.1rem;
  color: #10b981;
  width: 20px;
}

.rank-details {
  flex: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.rank-name {
  font-size: 0.9rem;
  font-weight: 500;
  color: #1e293b;
}

.rank-count {
  font-size: 0.8rem;
  color: #94a3b8;
  font-weight: 600;
}

.forgotten-list {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.forgot-item {
  font-size: 0.85rem;
  color: #64748b;
  padding: 6px 12px;
  background: #f8fafc;
  border-radius: 8px;
  border-left: 3px solid #f59e0b;
}

.capitalize {
  text-transform: capitalize !important;
}

.empty-msg {
  font-size: 0.85rem;
  color: #94a3b8;
  font-style: italic;
  margin: 0;
}
</style>
知识知识知识知识知识知识知识知识知识知识知识知识10
