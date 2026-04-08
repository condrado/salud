<script setup>
import { computed } from 'vue';
import MainLayout from '@/components/templates/MainLayout.vue';
import AppIcon from '@/components/atoms/AppIcon.vue';
import { store, actions } from '@/store';

const today = new Date().toISOString().split('T')[0];
const isWalkingToday = computed(() => store.walkingDays.includes(today));

const handleWalkingToggle = () => {
  actions.toggleWalking(today);
};
</script>

<template>
  <MainLayout title="Plan de Ejercicio">
    <div class="sports-view">
      
      <!-- Sección Caminata -->
      <section class="exercise-section walk-card">
        <div class="walk-header">
          <div class="icon-circle">
            <AppIcon name="run" size="32" color="#10b981" />
          </div>
          <div class="walk-info">
            <h3>Caminata "Paso Vivo"</h3>
            <p>45 a 50 min • 4-5 días/semana</p>
          </div>
        </div>
        
        <p class="walk-desc">Respiración agitada pero permitiéndote hablar. Sin paradas en escaparates.</p>
        
        <button 
          @click="handleWalkingToggle" 
          class="walking-btn"
          :class="{ active: isWalkingToday }"
        >
          <AppIcon 
            :name="isWalkingToday ? 'star' : 'run'" 
            size="18" 
            :color="isWalkingToday ? '#ffffff' : '#10b981'" 
          />
          {{ isWalkingToday ? '¡Caminata completada!' : 'He andado hoy' }}
        </button>
      </section>

      <!-- Sección Circuito Fuerza -->
      <section class="exercise-section strength">
        <div class="section-title">
          <AppIcon name="bolt" size="24" color="#10b981" />
          <h3>Circuito de Fuerza (10 min)</h3>
        </div>
        <p class="subtitle">3 rondas seguidas tras caminar (2 días/semana)</p>
        
        <div class="exercise-list">
          <div class="ex-item">
            <div class="ex-header">
              <span class="ex-name">Sentadillas en Silla</span>
              <span class="ex-reps">12 reps</span>
            </div>
            <p class="ex-desc">Siéntate y levántate empujando con los talones.</p>
          </div>

          <div class="ex-item">
            <div class="ex-header">
              <span class="ex-name">Flexiones en Pared</span>
              <span class="ex-reps">10 reps</span>
            </div>
            <p class="ex-desc">A 1m de la pared, apoya manos y dobla brazos.</p>
          </div>

          <div class="ex-item">
            <div class="ex-header">
              <span class="ex-name">Marcha Estática</span>
              <span class="ex-reps">1 min</span>
            </div>
            <p class="ex-desc">En el sitio, sube rodillas con energía.</p>
          </div>
        </div>

        <div class="coach-tip">
          🏁 2 min estirando piernas para evitar agujetas.
        </div>
      </section>

      <!-- Normas Sugeridas -->
      <section class="rules-section">
        <h3>Normas del Plan</h3>
        <div class="rules-list">
          <div v-for="(rule, index) in store.rules" :key="index" class="rule-box">
            {{ rule }}
          </div>
        </div>
      </section>
    </div>
  </MainLayout>
</template>

<style scoped>
.sports-view {
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding-bottom: 80px;
}

.exercise-section {
  background: white;
  border-radius: 20px;
  padding: 20px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
}

.walk-card {
  border: 1px solid #10b98122;
}

.walk-header {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 16px;
}

.icon-circle {
  width: 52px;
  height: 52px;
  background: #ecfdf5;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.walk-info h3 {
  margin: 0;
  font-size: 1rem;
  color: #1e293b;
}

.walk-info p {
  margin: 0;
  font-size: 0.8rem;
  color: #64748b;
  font-weight: 500;
}

.walk-desc {
  font-size: 0.85rem;
  color: #475569;
  line-height: 1.5;
  margin: 0 0 20px 0;
}

.walking-btn {
  width: 100%;
  padding: 12px;
  border-radius: 12px;
  border: 2px solid #10b981;
  background: transparent;
  color: #10b981;
  font-weight: 700;
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
}

.walking-btn.active {
  background: #10b981;
  color: white;
  border-color: #10b981;
  box-shadow: 0 8px 16px rgba(16, 185, 129, 0.3);
}

.section-title {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 4px;
}

.section-title h3 {
  margin: 0;
  font-size: 1rem;
  color: #1e293b;
}

.subtitle {
  font-size: 0.8rem;
  color: #94a3b8;
  margin: 0 0 16px 0;
  font-style: italic;
}

.exercise-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.ex-item {
  background: #f8fafc;
  padding: 12px;
  border-radius: 12px;
  border-left: 4px solid #10b981;
}

.ex-header {
  display: flex;
  justify-content: space-between;
  margin-bottom: 4px;
}

.ex-name {
  font-weight: 700;
  font-size: 0.9rem;
  color: #1e293b;
}

.ex-reps {
  font-weight: 800;
  font-size: 0.8rem;
  color: #10b981;
}

.ex-desc {
  font-size: 0.8rem;
  color: #64748b;
  margin: 0;
}

.coach-tip {
  margin-top: 16px;
  font-size: 0.8rem;
  color: #059669;
  font-weight: 600;
  background: #ecfdf5;
  padding: 10px;
  border-radius: 8px;
  text-align: center;
}

.rules-section h3 {
  font-size: 1rem;
  color: #ef4444;
  margin: 0 0 12px 0;
}

.rules-list {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.rule-box {
  background: #fff1f2;
  border-radius: 8px;
  padding: 10px 12px;
  font-size: 0.85rem;
  color: #991b1b;
  border-left: 3px solid #ef4444;
}
</style>
知识知识知识知识知识知识知识知识知识知识知识知识10
