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
    <div class="item-details">
      <span class="item-label">{{ item.name }}</span>
      <span v-if="item.qty" class="item-qty">{{ item.qty }}</span>
    </div>
    <span v-if="item.freq" class="freq-badge" :class="item.freq.toLowerCase()">{{ item.freq }}</span>
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

.item-details {
  display: flex;
  flex-direction: column;
}

.item-label {
  font-size: 0.88rem;
  color: #1e293b;
  font-weight: 600;
  line-height: 1.2;
}

.item-qty {
  font-size: 0.75rem;
  color: #64748b;
  font-weight: 400;
  margin-top: 1px;
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

.checked .item-label, .checked .item-qty {
  text-decoration: line-through;
  color: #94a3b8;
}

.compact-shopping-item:active {
  transform: translateX(4px);
  background: #f1f5f9;
}

.freq-badge {
  margin-left: auto;
  font-size: 0.6rem;
  font-weight: 700;
  text-transform: uppercase;
  padding: 2px 6px;
  border-radius: 4px;
  letter-spacing: 0.02em;
}

.freq-badge.diario {
  background: #fff7ed;
  color: #c2410c;
  border: 1px solid #ffedd5;
}

.freq-badge.semanal {
  background: #eff6ff;
  color: #1d4ed8;
  border: 1px solid #dbeafe;
}

.freq-badge.quincenal {
  background: #f8fafc;
  color: #64748b;
  border: 1px solid #e2e8f0;
}
</style>
