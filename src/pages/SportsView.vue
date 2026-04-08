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
          <h3>Caminata "Paso Vivo"</h3>
          <p class="time">45 a 50 minutos • 4-5 días/semana</p>
          <p class="instruction">No pares en escaparates. Tu respiración debe ser agitada pero permitiéndote hablar.</p>
        </div>
      </section>

      <!-- Sección Circuito Fuerza -->
      <section class="exercise-section strength">
        <div class="icon-header-small">
          <AppIcon name="bolt" size="32" color="#4CAF50" />
          <h3>Circuito de Fuerza (10 min)</h3>
        </div>
        <p class="subtitle">Realizar 3 rondas seguidas tras caminar (2 días/semana)</p>
        
        <div class="exercise-card">
          <span class="ex-name">Sentadillas en Silla</span>
          <span class="ex-reps">12 repeticiones</span>
          <p class="ex-desc">Siéntate y levántate empujando con los talones y apretando glúteos.</p>
        </div>

        <div class="exercise-card">
          <span class="ex-name">Flexiones en Pared</span>
          <span class="ex-reps">10 repeticiones</span>
          <p class="ex-desc">A 1 metro de la pared, apoya manos y dobla brazos. Protege tu espalda.</p>
        </div>

        <div class="exercise-card">
          <span class="ex-name">Marcha Estática</span>
          <span class="ex-reps">1 minuto</span>
          <p class="ex-desc">En el sitio, sube rodillas con energía y mueve los brazos.</p>
        </div>

        <div class="stretch-note">
          <p>🏁 <strong>Final:</strong> 2 min estirando piernas para evitar agujetas.</p>
        </div>
      </section>

      <!-- Normas Sagradas -->
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

.icon-header-small {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 15px;
}

.subtitle {
  color: #64748b;
  font-size: 0.85rem;
  margin-top: -10px;
  margin-bottom: 20px;
  font-style: italic;
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
  font-size: 0.95rem;
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

.stretch-note {
  background: #e8f5e9;
  padding: 12px;
  border-radius: 12px;
  margin-top: 15px;
  font-size: 0.85rem;
  color: #2e7d32;
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
  font-size: 1.1rem;
}

ul {
  padding-left: 20px;
  margin: 0;
}

li {
  font-size: 0.85rem;
  color: #4a5568;
  margin-bottom: 10px;
  line-height: 1.4;
}
</style>
