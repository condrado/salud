<script setup>
import { actions } from '@/store';

const props = defineProps({
  item: { type: Object, required: true }
});

const handleToggle = () => {
  actions.toggleItem(props.item.id);
};
</script>

<template>
  <div class="shopping-item" :class="{ checked: item.checked }" @click="handleToggle">
    <div class="checkbox">
      <span v-if="item.checked">✓</span>
    </div>
    <span class="item-name">{{ item.name }}</span>
  </div>
</template>

<style scoped>
.shopping-item {
  display: flex;
  align-items: center;
  padding: 14px 16px;
  background: white;
  border-radius: 12px;
  margin-bottom: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.02);
  transition: all 0.2s;
  cursor: pointer;
  user-select: none;
}

.shopping-item:active {
  transform: scale(0.98);
  opacity: 0.8;
}

.checkbox {
  width: 24px;
  height: 24px;
  border: 2px solid #ddd;
  border-radius: 6px;
  margin-right: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #4CAF50;
  font-weight: bold;
  transition: border-color 0.2s, background-color 0.2s;
}

.item-name {
  font-size: 1rem;
  color: #444;
  transition: color 0.2s, text-decoration 0.2s;
}

.checked .checkbox {
  border-color: #4CAF50;
  background-color: #e8f5e9;
}

.checked .item-name {
  color: #ccc;
  text-decoration: line-through;
}
</style>
