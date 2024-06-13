<template>
    <div>
        <RecipeResultList :title="'Results'" :recipes="recipes" />
    </div>
</template>

<script>
import RecipeResultList from "../components/RecipeResultList.vue";
import { mockSearchDatabase } from "../services/recipes.js";
export default {
  components: {
    RecipeResultList
},
  data() {
    return {
        search: this.$route.query.search,
        cuisine: this.$route.query.cuisine,
        diet: this.$route.query.diet,
        intolerance: this.$route.query.intolerance,
        recipes: []
    };
},
async created() {
    await this.searchRecipesInDataBase();
},
methods: {
    async searchRecipesInDataBase() {
      try {
        const response = mockSearchDatabase(this.search, this.cuisine, this.diet, this.intolerance);
        const recipes = response.data.recipes;
        this.recipes = [];
        this.recipes.push(...recipes);
      } catch (error) {
        console.error("Error fetching recipes:", error);
      }
    }
  }
};
</script>

<style lang="scss" scoped>

</style>