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
                <router-link :to="{ name: 'make-recipe', params: { recipeId: recipe.id } }">
                  <h5>{{ index + 1 }}. {{ recipe.title }}</h5>
                </router-link>
                <p>Ready in: {{ recipe.readyInMinutes }} minutes</p>
                <b-progress :value="progress[recipe.id]" :max="recipe.analyzedInstructions.length" show-progress animated></b-progress>
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
  props: {
    updateNumOfRecipes: Function // function to change number of recipes
  },
  data() {
    return {
      mealPlan: [],
      progress: {}, // progress of each meal, dictionary of recipeid: progress
      showMealPlan: true, // Toggle for showing/hiding meal plan
      dragOptions: {
        handle: ".drag-handle" // Specify a class for the drag handle
      }
    };
  },
  async created() {
    try {
      this.axios.defaults.withCredentials=true;
      const response = await this.axios.get(
        this.$root.store.server_domain + "/users/" + this.$root.store.username + "/meal"
      );
      console.log(response);
      this.lastRecipes = response.data;
      if (response.status !== 200) {
        this.$router.replace("/NotFound");
        return;
      }
      // get completed steps from local storage
      this.progress =  JSON.parse(localStorage.getItem('completedSteps'));
      // Print the progress dictionary to the console
      console.log('Progress:', this.progress);
      // right now fake progress since the recipes are mocks
      //this.progress = {'324694': 2, '716429': 1}
      this.mealPlan = response.data.recipes.map((recipe, index) => ({
        ...recipe,
        id: recipe.id || index + 1 // Use recipe.id if it exists, otherwise fallback to index + 1
      }));
    } catch (error) {
      console.error("Error fetching meal plan:", error);
    }
  },
  methods: {
    clearMealPlan() {
      this.mealPlan = [];
      this.updateNumOfRecipes(0);
    },
    async removeFromMealPlan(recipe) {
      try {
        this.axios.defaults.withCredentials=true;
      const response = await this.axios.post(
          this.$root.store.server_domain + "/users/" + this.$root.store.username + "meal/remove",
          {
            recipeId: this.recipe.id
          }
        );
      } catch (error) {
      console.log(error);
      }
      if (response.status !== 200) {
          this.$root.toast("Remove From meal", response.data.message, "fail");
          return;
        }
        this.$root.toast("Remove From meal", "Removed From meal successfully", "success");
      this.mealPlan = this.mealPlan.filter(r => r.id !== recipe.id);
      this.updateNumOfRecipes(this.mealPlan.length);
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
  margin-bottom: 20px; 
}

.drag-handle {
  cursor: move;
}
</style>
