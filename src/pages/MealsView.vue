<script setup>
import { computed, ref } from 'vue';
import { store } from '@/store';
import MainLayout from '@/components/templates/MainLayout.vue';
import MealCard from '@/components/molecules/MealCard.vue';
import MealModal from '@/components/organisms/MealModal.vue';

const props = defineProps({
  viewType: { type: String, required: true } // 'desayuno', 'comida', 'merienda', 'cena'
});

const activeMeal = ref(null);
const showModal = ref(false);

const openInfo = (meal) => {
  activeMeal.value = meal;
  showModal.value = true;
};

const meals = computed(() => {
  return store.meals[props.viewType] || [];
});
</script>

<template>
  <MainLayout :title="viewType.charAt(0).toUpperCase() + viewType.slice(1)">
    <div class="meals-list">
      <MealCard 
        v-for="meal in meals" 
        :key="meal.id"
        :meal="meal"
        :type="viewType"
        @show-info="openInfo"
      />
    </div>

    <MealModal 
      v-if="activeMeal"
      :meal="activeMeal"
      :show="showModal"
      @close="showModal = false"
    />
  </MainLayout>
</template>

<style scoped>
.meals-list {
  display: flex;
  flex-direction: column;
  gap: 8px; /* Mantengo los 8px de separación que elegiste */
}
</style>
