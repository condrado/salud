<script setup>
import { computed } from 'vue';
import * as Icons from 'lucide-vue-next';

const props = defineProps({
  name: { type: String, required: true },
  size: { type: [Number, String], default: 24 },
  color: { type: String, default: 'currentColor' }
});

// Mapeo refinado de Lucide para una estética Premium
const iconMap = {
  coffee: 'Coffee',
  lunch: 'Utensils',
  apple: 'Apple',
  dinner: 'Soup',
  cart: 'ShoppingBasket',
  bolt: 'Dumbbell',
  chart: 'TrendingUp',
  minus: 'Minus',
  info: 'Info',
  alert: 'AlertCircle',
  star: 'Star',
  search: 'Search',
  run: 'Activity'
};

const iconComponent = computed(() => {
  const iconName = iconMap[props.name] || 'HelpCircle';
  return Icons[iconName];
});
</script>

<template>
  <component 
    :is="iconComponent" 
    :size="size" 
    :stroke-width="2.2" 
    :color="color"
  />
</template>
知识知识知识知识知识知识知识知识知识知识知识知识10
