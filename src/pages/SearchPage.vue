<template>
  <div class="container">
    <TwoColumnsLayout>
      <template #left-column>
        <h2 class="title">What do you want to make today?</h2>
        <!-- Search Box -->
        <div class="search-box">
          <div class="searchbar"><input type="text" v-model="searchQuery" placeholder="Search for recipes" class="form-control" /></div>
          
          <label for="recipeCount">Number of recipes to display:</label>
          <select id="recipeCount" v-model="recipeCount" class="form-control">
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="15">15</option>
          </select>
        </div>

        <h5 class="title mt-4">Check your preferences:</h5>

        <!-- Cuisine Selector -->
        <div class="form-group">
          <label for="cuisine">Cuisine:</label>
          <select id="cuisine" v-model="selectedCuisine" class="form-control">
            <option value="No Filter">No Filter</option>
            <option v-for="cuisine in cuisines" :key="cuisine" :value="cuisine">{{ cuisine }}</option>
          </select>
        </div>

        <!-- Diet Selector -->
        <div class="form-group">
          <label for="diet">Diet:</label>
          <select id="diet" v-model="selectedDiet" class="form-control">
            <option value="No Filter">No Filter</option>
            <option v-for="diet in diets" :key="diet" :value="diet">{{ diet }}</option>
          </select>
        </div>

        <!-- Intolerance Selector -->
        <div class="form-group">
          <label for="intolerance">Intolerance:</label>
          <select id="intolerance" v-model="selectedIntolerance" class="form-control">
            <option value="No Filter">No Filter</option>
            <option v-for="intolerance in intolerances" :key="intolerance" :value="intolerance">{{ intolerance }}</option>
          </select>
        </div>

        <!-- Search Button -->
        <button @click="search" class="btn btn-primary">Search</button>
      </template>


      <template #right-column>
        <!-- if user is logged in -->
        <div v-if="$root.store.username" class="last-search-container">
          <RecipePreviewList :recipes="recipes" :title="`Hey ${$root.store.username}, here is your last search:`" class="RandomRecipes center" />
        </div>
      </template>

    </TwoColumnsLayout>
  </div>
</template>

<script>
import RecipePreviewList from "../components/RecipePreviewList.vue";
import TwoColumnsLayout from "../components/TwoColumnsLayout.vue";
import cuisine from "../assets/cuisine";
import intolerances from "../assets/intolerances";
import diets from "../assets/diets";
import { mockGetRecipesPreview } from "../services/recipes.js";

export default {
  components: {
    RecipePreviewList,
    TwoColumnsLayout
  },
  data() {
    return {
      recipes: [],
      recipeCount: 5, // Default number of recipes to display
      searchQuery: "", // User input for recipe search
      selectedCuisine: "No Filter", // as requested in assignment
      selectedDiet: "No Filter",
      selectedIntolerance: "No Filter",
      intolerances: intolerances, // Import from intolerances.js file
      diets: diets, // Import from diets.js file
      cuisines: cuisine // Import from countries.js file
    };
  },
  async created() {
    await this.lastSearchRecipes();
  },
  methods: {
    search() {
      this.$router.push({ name: 'results', query: { search: this.searchQuery, cuisine: this.selectedCuisine, diet: this.selectedDiet, intolerance: this.selectedIntolerance } });
    },
    async lastSearchRecipes(recipeCount) {
      try {
        // const response = await this.axios.get(
        //   this.$root.store.server_domain + "/recipes/random",
        // );

        const response = mockGetRecipesPreview(this.recipeCount);
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

<style scoped>
.last-search-container {
  text-align: center;
  padding: 0;
}

.searchbar {
  margin-bottom: 20px;
}
</style>
