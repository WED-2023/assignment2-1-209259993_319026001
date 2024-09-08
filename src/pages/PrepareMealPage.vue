<template>
  <div class="meal-plan-container">
    <h1 class="meal-plan-title">Meal Plan</h1>

    <!-- Drag-and-drop list -->
    <draggable v-model="mealPlan" class="meal-plan-list" :options="dragOptions">
      <div v-for="(recipe, index) in mealPlan" :key="recipe.id" class="meal-plan-item">
        <b-card>
          <b-card-header class="drag-handle">
            <div class="d-flex justify-content-between align-items-center">
              <div class="recipe-details w-100">
                <router-link :to="{ name: 'make-recipe', params: { recipeId: recipe.id } }">
                  <h5>{{ index + 1 }}. {{ recipe.title }}</h5>
                </router-link>
                <p>Ready in: {{ recipe.readyInMinutes }} minutes</p>
                <b-progress :value="progress[recipe.id]" :max="lengths[recipe.id]" show-progress animated></b-progress>
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
import draggable from "vuedraggable";
import { BProgress } from 'bootstrap-vue';

export default {
  components: {
    draggable,
    BProgress
  },
  props: {
    mealPlan: [], // recipes in meal
    updateRecipes: Function // function to update recipes
  },
  data() {
    return {
      progress: {}, // progress of each meal, dictionary of recipeid: progress
      lengths: {}, // length of instructions of each meal
      showMealPlan: true, // Toggle for showing/hiding meal plan
      dragOptions: {
        handle: ".drag-handle" // Specify a class for the drag handle
      }
    };
  },
  async created() {
    try {
      // Initialize the dictionary in local storage if it doesn't exist
      if (!localStorage.getItem('completedSteps')) {
      localStorage.setItem('completedSteps', JSON.stringify({}));
      }
      // get completed steps from local storage
      this.progress =  JSON.parse(localStorage.getItem('completedSteps'));

      // Initialize lengths array
      this.lengths = JSON.parse(localStorage.getItem('instructionLengths')) || {};

      // Print the progress dictionary to the console
      console.log('Progress:', this.progress);
      this.mealPlan = response.data.map((recipe, index) => ({
        ...recipe,
        id: recipe.id || index + 1 // Use recipe.id if it exists, otherwise fallback to index + 1
      }));
    } catch (error) {
      console.error("Error fetching meal plan:", error);
    }
  },
  methods: {
    async clearMealPlan() {
      try {
        // array of promises for removing each recipe
        const removePromises = this.mealPlan.map(recipe => this.removeFromMealPlan(recipe));
        // wait for all recipes to be removed
        await Promise.all(removePromises);
        // clear the meal plan array locally
        this.mealPlan = [];
        this.updateRecipes(this.mealPlan);
        // show a success message
        this.$root.toast("Clear Meal Plan", "Meal plan cleared successfully", "success");
      } catch (error) {
        console.error("Error clearing meal plan:", error);
        this.$root.toast("Clear Meal Plan", "Failed to clear meal plan", "fail");
      }
    },
    async removeFromMealPlan(recipe) {
      try {
      const response = await this.axios.post(
          this.$root.store.server_domain + "/users/" + this.$root.store.username + "/meal/remove",
          {
            recipeId: recipe.id
          }
        );
      if (response.status !== 200) {
          this.$root.toast("Remove From meal", response.data.message, "fail");
          return;
        }
      this.$root.toast("Remove From meal", "Removed From meal successfully", "success");
      this.mealPlan = this.mealPlan.filter(r => r.id !== recipe.id);
      this.updateRecipes(this.mealPlan);
    } catch (error) {
      console.log(error);
      }
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
    },
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
  width: 100%;
}

.drag-handle {
  cursor: move;
}

.b-card-header {
  width: 100%;
}

.b-progress {
  width: 100%;
}
</style>
