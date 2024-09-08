<template>
  <div class="results-page">
        <!-- if results are not empty, show them and give user option to sort -->
        <div v-if="recipes.length > 0">
          <div class="results-header">
            <h2>Results</h2>
          </div>
          <!-- sorting based on time or likes -->
          <div class="sort-container">
              <label for="sort">Sort by:</label>
              <select id="sort" v-model="sortCriteria" @change="sortRecipes">
                  <option value="time">Make Time</option>
                  <option value="likes">Popularity</option>
              </select>
          </div>
          <!-- show results -->
      <RecipePreviewList :recipes="recipes" />
    </div>
    <!-- if no results come back, show message -->
    <div v-else>
      <h1>No results came back.</h1>
      <router-link to="/search" exact>Search again?</router-link>
    </div>
  </div>
</template>

<script>
import RecipePreviewList from "../components/RecipePreviewList.vue";
export default {
  components: {
    RecipePreviewList
},
  data() {
    return {
        search: this.$route.query.search,
        cuisine: this.$route.query.cuisine,
        diet: this.$route.query.diet,
        intolerance: this.$route.query.intolerance,
        recipeCount: this.$route.query.recipeCount,
        recipes: [],
        sortCriteria: null
    };
},
async created() {
    await this.searchRecipesInDataBase();
},
methods: {
    async searchRecipesInDataBase() {
      console.log("Search: ", this.search, " cuisine: ", this.cuisine, " diet: ", this.diet, " intolerance: ", this.intolerance, " number:", this.recipeCount);
      try {
        const response = await this.axios.get(
          this.$root.store.server_domain + "/recipes/search",
          {
            params: {  // send parameters as query params
              recipeName: this.search,
              cuisine: this.cuisine,
              diet: this.diet,
              intolerance: this.intolerance,
              number: this.recipeCount
            }
          }
        );
        this.recipes = response.data;
      } catch (error) {
        console.error("Error fetching recipes:", error);
      }
    },
    // function to sort the results based on likes and time
    sortRecipes() {
            this.recipes.sort((a, b) => {
                switch (this.sortCriteria) {
                    case 'time':
                       // from less time to more time, assuming less time to make is better
                        return a.readyInMinutes - b.readyInMinutes;
                    case 'likes':
                      // from most likes to least likes, assuming higher number of likes is better
                        return b.popularity - a.popularity;
                    default:
                      // if no sort, return regular results
                        return 0;
                }
            });
        }
  }
};
</script>

<style lang="scss" scoped>
.results-header, .sort-container {
  display: flex;
  justify-content: center;
  align-items: center; 
  width: 100%; 
  padding: 5px; 
}

.results-page {
    display: flex;
    flex-direction: column;
    align-items: center;
}

label {
  margin-right: 10px;
  font-weight: bold;
  color: #2c3e50;
  font-size: 18px;
}

select {
  padding: 5px 10px;
  border: 1px solid #2c3e50;
  border-radius: 4px;
  background-color: #f9f9f9;
  font-size: 1em;
  color: #333;
  outline: none;
  transition: border-color 0.3s, box-shadow 0.3s, background-color 0.3s;

  &:hover {
    background-color: #f1f1f1;
    cursor: pointer;
  }
  &:focus {
    border-color: #999;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  }
}
</style>