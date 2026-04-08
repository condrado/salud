<script setup>
import { computed } from 'vue';
import { store, actions } from '@/store';
import MainLayout from '@/components/templates/MainLayout.vue';
import ShoppingItem from '@/components/molecules/ShoppingItem.vue';
import AppIcon from '@/components/atoms/AppIcon.vue';

const categories = computed(() => {
  const cats = {};
  
  const filteredList = store.shoppingList.filter(item => {
    if (store.shoppingFilter === 'Todos') return true;
    return item.freq === store.shoppingFilter;
  });

  filteredList.forEach(item => {
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

    <!-- Filtro de Frecuencia Persistente -->
    <div class="filter-bar">
      <select 
        :value="store.shoppingFilter" 
        @change="actions.setShoppingFilter($event.target.value)"
        class="freq-select"
      >
        <option value="Todos">Mostrar Todo</option>
        <option value="Diario">Compra Diaria</option>
        <option value="Semanal">Compra Semanal</option>
        <option value="Quincenal">Despensa</option>
      </select>
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
      
      <div v-if="Object.keys(categories).length === 0" class="empty-filter">
        No hay elementos con frecuencia "{{ store.shoppingFilter }}"
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
  background: white;
  border-radius: 12px;
  margin-bottom: 12px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.05);
}

.filter-bar {
  margin-bottom: 20px;
}

.freq-select {
  width: 100%;
  padding: 12px;
  border-radius: 12px;
  border: 1px solid #e2e8f0;
  background: white;
  color: #1e293b;
  font-weight: 600;
  font-size: 0.9rem;
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%2364748b'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 12px center;
  background-size: 16px;
}

.stats {
  font-size: 0.9rem;
  color: #475569;
}

.minimal-reset {
  background: #fff5f5;
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
  padding-left: 4px;
}

.compact-list {
  display: grid;
  gap: 6px;
}

.empty-filter {
  text-align: center;
  padding: 40px 20px;
  color: #94a3b8;
  font-size: 0.9rem;
}
</style>
