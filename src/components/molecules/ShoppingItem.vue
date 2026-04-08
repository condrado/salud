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
  <div class="compact-shopping-item" :class="{ checked: item.checked }" @click="handleToggle">
    <div class="dot-indicator"></div>
    <span class="item-label">{{ item.name }}</span>
  </div>
</template>

<style scoped>
.compact-shopping-item {
  display: flex;
  align-items: center;
  padding: 10px 14px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 1px 2px rgba(0,0,0,0.03);
  cursor: pointer;
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  border-left: 3px solid transparent;
}

.dot-indicator {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #e2e8f0;
  margin-right: 12px;
  transition: all 0.2s;
}

.item-label {
  font-size: 0.85rem;
  color: #334155;
  font-weight: 500;
}

.checked {
  background: #f8fafc;
  opacity: 0.6;
  border-left-color: #94a3b8;
}

.checked .dot-indicator {
  background: #94a3b8;
  transform: scale(0.8);
}

.checked .item-label {
  text-decoration: line-through;
  color: #94a3b8;
}

.compact-shopping-item:active {
  transform: translateX(4px);
  background: #f1f5f9;
}
</style>
