<script setup>
import { computed, ref } from 'vue';
import { store } from '@/store';
import MainLayout from '@/components/templates/MainLayout.vue';
import MealCard from '@/components/molecules/MealCard.vue';
import MealModal from '@/components/organisms/MealModal.vue';

const props = defineProps({
  viewType: { type: String, required: true } // 'desayuno', 'comida', etc.
});

const meals = computed(() => store.meals[props.viewType] || []);
const activeMeal = ref(null);
const showModal = ref(false);

const openInfo = (meal) => {
  activeMeal.value = meal;
  showModal.value = true;
};
</script>

<template>
  <MainLayout :title="viewType.charAt(0).toUpperCase() + viewType.slice(1)">
    <div class="meals-list">
      <p class="summary-text" v-if="meals.length">Elige un plato para marcarlo</p>
      
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
.summary-text {
  color: #94a3b8;
  font-size: 0.9rem;
  margin-bottom: 20px;
  text-align: center;
}
</style>
