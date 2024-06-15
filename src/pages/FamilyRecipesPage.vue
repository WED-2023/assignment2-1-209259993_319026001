<template>
    <b-container>
      <h3>Family Recipes</h3>
      
      <!-- Render recipes in a single column -->
      <div v-for="(recipe) in recipes" :key="recipe.id">
        <FamilyRecipePreview :recipe="recipe" />
        <hr> <!-- Optional: Add a horizontal line between recipes for separation -->
      </div>
    </b-container>
  </template>

<script>
import FamilyRecipePreview from "../components/FamilyRecipePreview";
import { mockFamilyRecipes } from "../services/user.js"

export default {
    components: {
    FamilyRecipePreview
    },
    data() {
      return {
        recipes: []
      };
    },
    async created() {
    await this.getFamilyRecipes();
    },
    methods: {
        async getFamilyRecipes() {
            try {
                const amountToFetch = 3; // Set this to how many recipes you want to fetch
                const response = mockFamilyRecipes(amountToFetch);
                console.log(response);
                const recipes = response.data.recipes;
                console.log(recipes);
                this.recipes = [];
                this.recipes.push(...recipes);
            } catch (error) {
                console.log(error);
            }
        }
    }
};
</script>

<style lang="scss" scoped>
.container {
    min-height: 400px;
    display: flex;
    flex-direction: column;
}

h3 {
    text-align: center;
}
</style>
