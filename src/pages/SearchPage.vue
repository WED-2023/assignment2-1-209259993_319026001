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
            <option value="">No Preference</option>
            <option v-for="cuisine in cuisines" :key="cuisine" :value="cuisine">{{ cuisine }}</option>
          </select>
        </div>

        <!-- Diet Selector -->
        <div class="form-group">
          <label for="diet">Diet:</label>
          <select id="diet" v-model="selectedDiet" class="form-control">
            <option value="">No Preference</option>
            <option v-for="diet in diets" :key="diet" :value="diet">{{ diet }}</option>
          </select>
        </div>

        <!-- Intolerance Selector -->
        <div class="form-group">
          <label for="intolerance">Intolerance:</label>
          <select id="intolerance" v-model="selectedIntolerance" class="form-control">
            <option value="">None</option>
            <option v-for="intolerance in intolerances" :key="intolerance" :value="intolerance">{{ intolerance }}</option>
          </select>
        </div>

        <!-- Search Button -->
        <button @click="search" class="btn btn-primary">Search</button>
      </template>


      <template #right-column>
        <!-- if user is logged in -->
        <div v-if="$root.store.username" class="last-search-container">
          <h3>Hey {{$root.store.username}}, here is your last search:</h3>
          <!-- Display last search parameters -->
          <div v-if="lastSearchParams" class="last-search-params">
            <h5 class="title underline mt-4">Your Last Search:</h5>
            <p><strong>Search Query:</strong> {{ lastSearchParams.searchQuery }}</p>
            <p><strong>Recipe Count:</strong> {{ lastSearchParams.recipeCount }}</p>
            <p><strong>Cuisine:</strong> {{ lastSearchParams.selectedCuisine }}</p>
            <p><strong>Diet:</strong> {{ lastSearchParams.selectedDiet }}</p>
            <p><strong>Intolerance:</strong> {{ lastSearchParams.selectedIntolerance }}</p>
          </div>
          <div v-else class="error-message">
            <h5 class="title mt-4">You haven't searched anything!</h5>
            <p>Please perform a search to see the results here.</p>
          </div>
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
      selectedCuisine: "", // as requested in assignment
      selectedDiet: "",
      selectedIntolerance: "",
      intolerances: intolerances, // Import from intolerances.js file
      diets: diets, // Import from diets.js file
      cuisines: cuisine, // Import from countries.js file
      lastSearchParams: null // Store last search parameters
    };
  },
  async created() {
    const lastSearchParams = JSON.parse(localStorage.getItem('lastSearchParams'));
    if (lastSearchParams) {
      this.lastSearchParams = lastSearchParams;
    }
  },
  methods: {
    search() {
    // Save search parameters to local storage
    const searchParams = {
      searchQuery: this.searchQuery || "None",
      selectedCuisine: this.selectedCuisine || "No Preference",
      selectedDiet: this.selectedDiet || "No Preference",
      selectedIntolerance: this.selectedIntolerance || "None",
      recipeCount: this.recipeCount
    };
    localStorage.setItem('lastSearchParams', JSON.stringify(searchParams));

    // Navigate to the results page
    this.$router.push({ name: 'results', query: { search: this.searchQuery, cuisine: this.selectedCuisine, diet: this.selectedDiet, intolerance: this.selectedIntolerance, recipeCount: this.recipeCount } });
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

.error-message {
  margin-top: 20px;
  color: red;
  text-align: center;
}

.title.underline {
  border-bottom: 2px solid #000; 
  display: inline-block; 
}
</style>
