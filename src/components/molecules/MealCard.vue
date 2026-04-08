<script setup>
import { actions } from '@/store';
import AppBadge from '@/components/atoms/AppBadge.vue';

const props = defineProps({
  meal: { type: Object, required: true },
  type: { type: String, required: true }
});

const emit = defineEmits(['show-info']);

const handleIncrement = () => {
  actions.incrementMeal(props.type, props.meal.id);
};
</script>

<template>
  <div class="meal-card" @click="handleIncrement">
    <div class="card-content">
      <span class="meal-name">{{ meal.name }}</span>
      <AppBadge :count="meal.count" />
    </div>
    <button class="info-btn" @click.stop="$emit('show-info', meal)">
      ℹ️ Info
    </button>
  </div>
</template>

<style scoped>
.meal-card {
  background: white;
  border-radius: 16px;
  padding: 16px;
  margin-bottom: 12px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 0 4px 10px rgba(0,0,0,0.05);
  border: 1px solid #f0f0f0;
  transition: transform 0.1s ease, box-shadow 0.2s ease;
  user-select: none;
  -webkit-tap-highlight-color: transparent;
  cursor: pointer;
  min-height: 100px;
}

.meal-card:active {
  transform: scale(0.97);
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
  background: #fdfdfd;
}

.card-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex: 1;
}

.meal-name {
  font-weight: 600;
  font-size: 1.1rem;
  color: #333;
}

.info-btn {
  align-self: flex-end;
  background: #f5f5f5;
  border: none;
  padding: 6px 12px;
  border-radius: 20px;
  font-size: 0.85rem;
  color: #666;
  margin-top: 10px;
}
</style>
