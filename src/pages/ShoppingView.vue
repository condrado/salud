<script setup>
import { computed } from 'vue';
import { store, actions } from '@/store';
import MainLayout from '@/components/templates/MainLayout.vue';
import ShoppingItem from '@/components/molecules/ShoppingItem.vue';
import AppIcon from '@/components/atoms/AppIcon.vue';

const categories = computed(() => {
  const cats = {};
  store.shoppingList.forEach(item => {
    const cat = item.cat || 'Otros';
    if (!cats[cat]) cats[cat] = [];
    cats[cat].push(item);
  });
  return cats;
});

const totalChecked = computed(() => store.shoppingList.filter(i => i.checked).length);
const totalItems = computed(() => store.shoppingList.length);
</script>

<template>
  <MainLayout title="Logístico Mercadona">
    <div class="shopping-status-bar">
      <div class="stats">
        <strong>{{ totalChecked }}</strong> / {{ totalItems }}
      </div>
      <button class="minimal-reset" @click="actions.resetShoppingList">
        <AppIcon name="cart" size="16" color="#ff6b6b" /> 
        Reiniciar
      </button>
    </div>

    <div class="grid-layout">
      <div class="category-chip-container">
        <div class="category-block-mini" v-for="(items, cat) in categories" :key="cat">
          <h4 class="mini-title">{{ cat }}</h4>
          <div class="compact-list">
             <ShoppingItem 
              v-for="item in items" 
              :key="item.id"
              :item="item"
            />
          </div>
        </div>
      </div>
    </div>
  </MainLayout>
</template>

<style scoped>
.shopping-status-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 12px;
  background: #f1f5f9;
  border-radius: 12px;
  margin-bottom: 20px;
}

.stats {
  font-size: 0.9rem;
  color: #475569;
}

.minimal-reset {
  background: white;
  border: 1px solid #fee2e2;
  color: #ff6b6b;
  padding: 6px 12px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 0.8rem;
  font-weight: 600;
}

.category-block-mini {
  margin-bottom: 16px;
}

.mini-title {
  color: #64748b;
  font-size: 0.75rem;
  text-transform: uppercase;
  margin-bottom: 8px;
  letter-spacing: 0.05em;
}

.compact-list {
  display: grid;
  gap: 6px;
}
</style>
