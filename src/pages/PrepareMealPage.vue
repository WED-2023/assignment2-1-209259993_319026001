<template>
  <div class="meal-plan-container">
    <h1 class="meal-plan-title">Meal Plan</h1>

    <!-- Drag-and-drop list -->
    <draggable v-model="mealPlan" class="meal-plan-list" :options="dragOptions">
      <div v-for="(recipe, index) in mealPlan" :key="recipe.id" class="meal-plan-item">
        <b-card>
          <b-card-header class="drag-handle">
            <div class="d-flex justify-content-between align-items-center">
              <div>
                <h5>{{ index + 1 }}. {{ recipe.title }}</h5>
                <p>Ready in: {{ recipe.readyInMinutes }} minutes</p>
                <b-progress :value="4" :max="10" show-progress animated></b-progress>
              </div>
              <div>
                <b-button @click="removeFromMealPlan(recipe)" variant="outline-danger">X</b-button>
              </div>
            </div>
          </b-card-header>
        </b-card>
      </div>
    </draggable>

    <!-- Clear button -->
    <b-button @click="clearMealPlan" variant="danger" v-if="showMealPlan && mealPlan.length > 0">Clear Meal Plan</b-button>

    <!-- Message if no recipes -->
    <div v-if="showMealPlan && mealPlan.length === 0">
      <p>No recipes in your meal plan.</p>
      <router-link to="/search" exact>Start planning your next meal!</router-link>
    </div>
  </div>
</template>

<script>
import { mockGetMeal, mockRemoveFromMeal } from "../services/user.js";
import draggable from "vuedraggable";
import { BProgress } from 'bootstrap-vue';

export default {
  components: {
    draggable,
    BProgress
  },
  data() {
    return {
      mealPlan: [],
      progess: {}, // progress of each meal, dictionary of recipeid: progress
      showMealPlan: true, // Toggle for showing/hiding meal plan
      dragOptions: {
        handle: ".drag-handle" // Specify a class for the drag handle
      }
    };
  },
  async created() {
    try {
      const response = await mockGetMeal();
      if (response.status !== 200) {
        this.$router.replace("/NotFound");
        return;
      }
      // get completed steps from local storage
      this.progess =  JSON.parse(localStorage.getItem('completedSteps'));
      this.mealPlan = response.data.recipes.map((recipe, index) => ({
        ...recipe,
        id: index + 1 // Ensure each recipe has a unique id
      }));
    } catch (error) {
      console.error("Error fetching meal plan:", error);
    }
  },
  methods: {
    clearMealPlan() {
      this.mealPlan = [];
    },
    removeFromMealPlan(recipe) {
      mockRemoveFromMeal(recipe.id);
      this.mealPlan = this.mealPlan.filter(r => r.id !== recipe.id);
    },
    toggleShowMealPlan() {
      this.showMealPlan = !this.showMealPlan;
    },
    // Save meal plan to local storage
    saveMealPlanToLocalStorage() {
      localStorage.setItem("mealPlan", JSON.stringify(this.mealPlan));
    },
    // Load meal plan from local storage
    loadMealPlanFromLocalStorage() {
      const savedMealPlan = localStorage.getItem("mealPlan");
      if (savedMealPlan) {
        this.mealPlan = JSON.parse(savedMealPlan);
      }
    }
  }
};
</script>

<style scoped>
.meal-plan-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh; 
  text-align: center; 
  padding-top: 20px; 
}

.meal-plan-title {
  margin-top: 20px; 
}

.meal-plan-list {
  margin-top: 20px; 
  width: 80%; 
  max-width: 600px; 
}

.meal-plan-item {
  margin-bottom: 20px; /* Adds space between each recipe item */
}

.drag-handle {
  cursor: move; /* Change cursor to indicate draggable items */
}
</style>
