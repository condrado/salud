<script setup>
const props = defineProps({
  meal: { type: Object, required: true },
  show: { type: Boolean, default: false }
});

const emit = defineEmits(['close']);
</script>

<template>
  <Transition name="fade">
    <div v-if="show" class="modal-overlay" @click.self="$emit('close')">
      <div class="modal-content">
        <header>
          <h2>{{ meal.name }}</h2>
          <button class="close-top" @click="$emit('close')">&times;</button>
        </header>
        
        <div class="modal-body">
          <section>
            <h3>🥕 Ingredientes</h3>
            <p>{{ meal.ingredients }}</p>
          </section>
          
          <section>
            <h3>🍳 Preparación</h3>
            <p>{{ meal.prep }}</p>
          </section>
        </div>
        
        <button class="close-btn" @click="$emit('close')">Cerrar</button>
      </div>
    </div>
  </Transition>
</template>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.5);
  display: flex;
  align-items: flex-end; /* Bottom sheet style for mobile */
  justify-content: center;
  z-index: 1000;
}

.modal-content {
  background: white;
  width: 100%;
  max-width: 500px;
  border-radius: 24px 24px 0 0;
  padding: 24px;
  animation: slide-up 0.3s ease-out;
  max-height: 80vh;
  overflow-y: auto;
}

@keyframes slide-up {
  from { transform: translateY(100%); }
  to { transform: translateY(0); }
}

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

h2 { margin: 0; color: #2c3e50; }
h3 { color: #4CAF50; font-size: 1.1rem; }

.modal-body p {
  line-height: 1.6;
  color: #555;
  white-space: pre-line;
}

.close-top {
  background: none;
  border: none;
  font-size: 2rem;
  color: #999;
}

.close-btn {
  width: 100%;
  padding: 15px;
  background: #4CAF50;
  color: white;
  border: none;
  border-radius: 12px;
  font-weight: bold;
  font-size: 1rem;
  margin-top: 20px;
}

/* Transitions */
.fade-enter-active, .fade-leave-active { transition: opacity 0.3s; }
.fade-enter-from, .fade-leave-to { opacity: 0; }
</style>
