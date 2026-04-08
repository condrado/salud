<script setup>
import { computed } from 'vue';
import { store, actions } from '@/store';
import MainLayout from '@/components/templates/MainLayout.vue';
import ShoppingItem from '@/components/molecules/ShoppingItem.vue';

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
  <MainLayout title="Lista Compra">
    <div class="shopping-header">
      <div class="progress">
        {{ totalChecked }} de {{ totalItems }} comprados
      </div>
      <button class="reset-btn" @click="actions.resetShoppingList">
        🔄 Resetear
      </button>
    </div>

    <div class="category-block" v-for="(items, cat) in categories" :key="cat">
      <h3 class="category-title">{{ cat }}</h3>
      <div class="list">
         <ShoppingItem 
          v-for="item in items" 
          :key="item.id"
          :item="item"
        />
      </div>
    </div>
  </MainLayout>
</template>

<style scoped>
.shopping-header {
  margin-bottom: 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: white;
  padding: 12px 16px;
  border-radius: 12px;
}

.progress {
  font-weight: 600;
  color: #64748b;
  font-size: 0.9rem;
}

.reset-btn {
  background: #fff5f5;
  border: 1px solid #ff6b6b;
  color: #ff6b6b;
  padding: 6px 12px;
  border-radius: 20px;
  font-weight: bold;
  font-size: 0.8rem;
}

.category-title {
  font-size: 0.9rem;
  text-transform: uppercase;
  color: #94a3b8;
  letter-spacing: 0.05em;
  margin-left: 8px;
  margin-bottom: 12px;
  margin-top: 24px;
}

.list {
  display: flex;
  flex-direction: column;
}
</style>
