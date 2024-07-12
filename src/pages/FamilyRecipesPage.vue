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
            this.axios.defaults.withCredentials=true;
            const response = await this.axios.get(
              this.$root.store.server_domain + "/users/" + this.$root.store.username + "/family"
            );
            console.log(response);
            this.recipes = response.data;
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
