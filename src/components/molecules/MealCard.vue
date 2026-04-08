<script setup>
import { actions } from '@/store';
import AppBadge from '@/components/atoms/AppBadge.vue';
import AppIconButton from '@/components/atoms/AppIconButton.vue';

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
      <AppBadge :count="meal.count" />
      <span class="meal-name">{{ meal.name }}</span>
    </div>
    
    <div class="actions">
      <!-- Botones gemelos mediante Átomos -->
      <AppIconButton 
        v-if="meal.count > 0"
        icon="minus" 
        color="#f87171"
        @click.stop="handleDecrement" 
      />
      <AppIconButton 
        icon="info" 
        color="#94a3b8"
        @click.stop="$emit('show-info', meal)" 
      />
    </div>
  </div>
</template>

<style scoped>
.meal-card {
  background: white;
  border-radius: 12px;
  padding: 4px 12px; /* Tighter vertical padding */
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0 1px 2px rgba(0,0,0,0.04);
  transition: all 0.2s;
  user-select: none;
  min-height: 44px; /* Even more compact */
}

.meal-card:active {
  transform: scale(0.995);
  background: #f8fafc;
}

.main-info {
  display: flex;
  align-items: center;
  gap: 10px;
  flex: 1;
}

.meal-name {
  font-weight: 500;
  font-size: 0.88rem;
  color: #1e293b;
  line-height: 1.1;
}

.actions {
  display: flex;
  align-items: center;
  gap: 2px; /* Espacio mínimo y elegante */
}
</style>
