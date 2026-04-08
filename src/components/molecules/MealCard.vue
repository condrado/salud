<script setup>
import { actions } from '@/store';
import AppBadge from '@/components/atoms/AppBadge.vue';
import AppIcon from '@/components/atoms/AppIcon.vue';

const props = defineProps({
  meal: { type: Object, required: true },
  type: { type: String, required: true }
});

const emit = defineEmits(['show-info']);

const handleIncrement = () => {
  actions.incrementMeal(props.type, props.meal.id);
};

const handleDecrement = () => {
  actions.decrementMeal(props.type, props.meal.id);
};
</script>

<template>
  <div class="meal-card" @click="handleIncrement">
    <div class="main-info">
      <!-- Ahora el número informativo va al principio -->
      <AppBadge :count="meal.count" class="meal-count-info" />
      <span class="meal-name">{{ meal.name }}</span>
    </div>
    
    <div class="actions">
      <button 
        v-if="meal.count > 0" 
        class="minus-btn" 
        @click.stop="handleDecrement"
      >
        -
      </button>
      <button class="info-icon-btn" @click.stop="$emit('show-info', meal)">
        <AppIcon name="info" size="18" color="#94a3b8" />
      </button>
    </div>
  </div>
</template>

<style scoped>
.meal-card {
  background: white;
  border-radius: 12px;
  padding: 10px 16px;
  margin-bottom: 8px; 
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0 1px 3px rgba(0,0,0,0.05); /* Tighter shadows for less bulk */
  transition: all 0.15s ease-out;
  user-select: none;
  min-height: 50px; 
}

.meal-card:active {
  transform: scale(0.99);
  background: #f8fafc;
}

.main-info {
  display: flex;
  align-items: center;
  gap: 12px;
  flex: 1;
}

.meal-name {
  font-weight: 500;
  font-size: 0.9rem;
  color: #1e293b;
  line-height: 1.1;
}

.counter-stepper {
  display: flex;
  align-items: center;
  gap: 4px; /* Pegaditos para que parezca una pieza única */
}

.minus-btn {
  background: #f1f5f9; /* Color más neutro y elegante */
  color: #64748b;
  border: none;
  width: 32px;
  height: 32px;
  border-radius: 8px; /* Cuadradito redondeado */
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 500;
  font-size: 1.4rem; /* Símbolo bien grande y táctil */
  cursor: pointer;
  line-height: 0;
  box-shadow: 0 1px 2px rgba(0,0,0,0.05);
}

.minus-btn:active {
  background: #e2e8f0;
}

.actions {
  display: flex;
  align-items: center;
}

.info-icon-btn {
  background: transparent;
  border: none;
  padding: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0.7;
}

.info-icon-btn:hover {
  opacity: 1;
}
</style>
