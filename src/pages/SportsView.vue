<script setup>
import MainLayout from '@/components/templates/MainLayout.vue';
import AppIcon from '@/components/atoms/AppIcon.vue';
import { store } from '@/store';
</script>

<template>
  <MainLayout title="Plan de Ejercicio">
    <div class="sports-view">
      <!-- Sección Caminata -->
      <section class="exercise-section walk">
        <div class="icon-header">
          <AppIcon name="run" size="40" color="#ffffff" />
        </div>
        <div class="details">
          <h3>Caminata "Quemagrasas"</h3>
          <p class="time">45 minutos • 5 días/semana</p>
          <p class="instruction">Camina como si tuvieras prisa por llegar a una cita. Espalda recta y braceo natural.</p>
        </div>
      </section>

      <!-- Sección Circuito Fuerza -->
      <section class="exercise-section strength">
        <div class="icon-header-small">
          <AppIcon name="bolt" size="32" color="#4CAF50" />
          <h3>Circuito de Fuerza (15 min)</h3>
        </div>
        <p class="subtitle">Hazlo justo al llegar de caminar</p>
        
        <div class="exercise-card">
          <span class="ex-name">Sentadillas (Silla)</span>
          <span class="ex-reps">3 series de 12 reps</span>
          <p class="ex-desc">Siéntate y levántate de una silla sin usar las manos.</p>
        </div>

        <div class="exercise-card">
          <span class="ex-name">Flexiones de pie</span>
          <span class="ex-reps">3 series de 10 reps</span>
          <p class="ex-desc">Apoya las manos en una pared e inclínate hacia ella.</p>
        </div>

        <div class="exercise-card">
          <span class="ex-name">Elevación de rodillas</span>
          <span class="ex-reps">2 minutos</span>
          <p class="ex-desc">En el sitio, sube las rodillas al pecho alternándolas.</p>
        </div>
      </section>

      <!-- Normas Sagradas (Integradas para acceso rápido) -->
      <section class="rules-section">
        <h3>🛡️ Normas Sagradas</h3>
        <ul>
          <li v-for="(rule, index) in store.rules" :key="index">
            {{ rule }}
          </li>
        </ul>
      </section>
    </div>
  </MainLayout>
</template>

<style scoped>
.sports-view {
  padding-bottom: 40px;
}

.exercise-section {
  background: white;
  border-radius: 20px;
  padding: 20px;
  margin-bottom: 20px;
  box-shadow: 0 4px 15px rgba(0,0,0,0.03);
}

.walk {
  background: linear-gradient(135deg, #4CAF50, #81c784);
  color: white;
  display: flex;
  align-items: center;
  gap: 20px;
}

.walk h3 { color: white; margin: 0; }

.icon-header {
  font-size: 2.5rem;
}

.time {
  font-weight: bold;
  font-size: 0.9rem;
  opacity: 0.9;
}

.instruction {
  font-size: 0.9rem;
  line-height: 1.4;
  margin-top: 8px;
}

.subtitle {
  color: #64748b;
  font-size: 0.9rem;
  margin-top: -10px;
  margin-bottom: 15px;
}

.exercise-card {
  border-left: 4px solid #4CAF50;
  background: #f8fafc;
  padding: 12px 16px;
  margin-bottom: 12px;
  border-radius: 0 12px 12px 0;
}

.ex-name {
  font-weight: bold;
  color: #2c3e50;
}

.ex-reps {
  float: right;
  color: #4CAF50;
  font-weight: 800;
  font-size: 0.85rem;
}

.ex-desc {
  font-size: 0.85rem;
  color: #64748b;
  margin: 5px 0 0;
}

.rules-section {
  background: #fff5f5;
  border: 1px solid #fed7d7;
  padding: 20px;
  border-radius: 20px;
}

.rules-section h3 {
  color: #c53030;
  margin-top: 0;
}

ul {
  padding-left: 20px;
  margin: 0;
}

li {
  font-size: 0.9rem;
  color: #4a5568;
  margin-bottom: 10px;
  line-height: 1.4;
}
</style>
