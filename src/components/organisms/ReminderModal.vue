<script setup>
import { computed, ref, onMounted } from 'vue';
import { store, actions } from '@/store';
import AppIcon from '@/components/atoms/AppIcon.vue';

const show = ref(false);

// Identificador único de esta semana (Año-Semana)
const getWeekId = () => {
  const d = new Date();
  const year = d.getFullYear();
  const firstDayOfYear = new Date(year, 0, 1);
  const pastDaysOfYear = (d - firstDayOfYear) / 86400000;
  const weekNum = Math.ceil((pastDaysOfYear + firstDayOfYear.getDay() + 1) / 7);
  return `${year}-W${weekNum}`;
};

const checkReminder = () => {
  const now = new Date();
  const currentDay = now.getDay(); // 0: Dom, 3: Mie, 5: Vie
  const currentHour = now.getHours();
  const weekId = getWeekId();

  // Viernes (5) después de las 15h
  const isTriggerTime = currentDay === 5 && currentHour >= 15; 
  
  const alreadyCancelled = store.lastCancelledReminder === weekId; 

  if (isTriggerTime && !alreadyCancelled) {
    show.value = true;
  }
};

const handleCancel = () => {
  actions.cancelReminder(getWeekId());
  show.value = false;
};

const handleContinue = () => {
  show.value = false;
};

onMounted(() => {
  checkReminder();
});
</script>

<template>
  <Transition name="fade">
    <div v-if="show" class="reminder-overlay">
      <div class="reminder-card">
        <div class="icon-circle">
          <AppIcon name="cart" size="32" color="#4CAF50" />
        </div>
        
        <h2>Compra Semanal</h2>
        <p>¡Es hora de organizar la "Biblia" de salud! Prepárate para la compra del Mercadona de la próxima semana.</p>
        
        <div class="actions">
          <button class="btn-continue" @click="handleContinue">Continuar</button>
          <button class="btn-cancel" @click="handleCancel">Entendido, no mostrar más</button>
        </div>
      </div>
    </div>
  </Transition>
</template>

<style scoped>
.reminder-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(15, 23, 42, 0.8);
  backdrop-filter: blur(4px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 3000;
  padding: 20px;
}

.reminder-card {
  background: white;
  width: 100%;
  max-width: 340px;
  padding: 30px 24px;
  border-radius: 28px;
  text-align: center;
  box-shadow: 0 20px 40px rgba(0,0,0,0.2);
  animation: pop-in 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

@keyframes pop-in {
  from { transform: scale(0.8); opacity: 0; }
  to { transform: scale(1); opacity: 1; }
}

.icon-circle {
  width: 72px;
  height: 72px;
  background: #f0fdf4;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 20px;
}

h2 {
  color: #1e293b;
  font-size: 1.4rem;
  margin-bottom: 12px;
  font-weight: 800;
}

p {
  color: #64748b;
  font-size: 0.95rem;
  line-height: 1.5;
  margin-bottom: 30px;
}

.actions {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

button {
  width: 100%;
  padding: 14px;
  border-radius: 14px;
  font-weight: 700;
  font-size: 0.95rem;
  transition: all 0.2s;
  border: none;
}

.btn-continue {
  background: #0f172a;
  color: white;
}

.btn-continue:active {
  transform: scale(0.98);
}

.btn-cancel {
  background: white;
  color: #64748b;
  border: 1px solid #e2e8f0;
  font-size: 0.85rem;
}

.fade-enter-active, .fade-leave-active { transition: opacity 0.3s; }
.fade-enter-from, .fade-leave-to { opacity: 0; }
</style>
