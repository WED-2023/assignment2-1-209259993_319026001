<template>
    <div>
      <h1>Meal Plan</h1>
      <b-button @click="clearMealPlan" variant="danger">Clear Meal Plan</b-button>
      <div v-if="mealPlan.length">
        <b-list-group>
          <b-list-group-item v-for="(recipe, index) in mealPlan" :key="recipe.id">
            <div class="d-flex justify-content-between align-items-center">
              <div>
                <h5>{{ index + 1 }}. {{ recipe.title }}</h5>
                <p>Ready in: {{ recipe.readyInMinutes }} minutes</p>
                <b-progress :max="recipe.instructions.length" :value="recipe.progress" class="mb-2"></b-progress>
              </div>
              <div>
                <b-button @click="removeFromMealPlan(recipe)" variant="outline-danger">Remove</b-button>
              </div>
            </div>
          </b-list-group-item>
        </b-list-group>
      </div>
      <div v-else>
        <p>No recipes in your meal plan.</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        mealPlan: [] // This would typically come from a store or API
      };
    },
    methods: {
      clearMealPlan() {
        this.mealPlan = [];
      },
      removeFromMealPlan(recipe) {
        this.mealPlan = this.mealPlan.filter(r => r.id !== recipe.id);
      }
    }
  };
  </script>
  