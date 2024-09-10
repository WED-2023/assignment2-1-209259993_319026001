<template>
  <div class="container">
    <div v-if="recipe">
      <div class="recipe-header">
        <h1 class="recipe-title">{{ recipe.title }}</h1>
        <img :src="recipe.image" class="recipe-image" />
      </div>
      <div class="recipe-details">
        <div class="details">
          <div class="detail-item">
            <span class="detail-label">Ready in:</span> {{ recipe.readyInMinutes }} minutes
          </div>
          <div class="detail-item">
            <span class="detail-label">Likes:</span> {{ recipe.popularity }} likes
          </div>
          <div class="detail-item">
            <span class="detail-label">Servings:</span> {{ recipe.servings }} servings
          </div>
          <div class="icons-container">
            <div v-if="recipe.vegetarian">
              <img src="@/assets/icons/no-meat.png" alt="Vegetarian" class="icon" />
            </div>
            <div v-if="recipe.vegan">
              <img src="@/assets/icons/vegan.png" alt="Vegan" class="icon" />
            </div>
            <div v-if="recipe.glutenFree">
              <img src="@/assets/icons/gluten-free.png" alt="Gluten Free" class="icon" />
            </div>
          </div>
          <div class="button-container">
            <button class="fav-button" @click="addToFav(recipe.id)">
              {{ fav ? 'Favorited' : 'Add to Favorites' }}
            </button>
            <router-link 
              :to="{ name: 'make-recipe', params: { recipeId: this.$route.params.recipeId } }" 
              class="make-recipe-link"
              @click.native="handleMakeRecipe">
              <button class="make-recipe-button">Make This Recipe</button>
            </router-link>
          </div>
        </div>
        <div class="ingredients">
          <h2>Ingredients</h2>
          <ul>
            <li v-for="(r, index) in recipe.extendedIngredients" :key="index + '_' + r.id">
              {{ r.original }}
            </li>
          </ul>
        </div>
        <div class="instructions">
          <h2>Instructions</h2>
          <div v-html="formattedInstructions"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { isInFav, addToFavorites } from '../services/user';
import { getRecipe} from '../services/recipes';
export default {
  async mounted() {
    const favStatus = await isInFav(this.$route.params.recipeId);
    console.log("Favorite status from server:", favStatus);
    this.fav = favStatus;
  },
  data() {
    return {
      recipe: {},
      fav: false,
      formattedInstructions: ""
    };
  },
  props: {
    mealPlan: [], // recipes in meal
    updateRecipes: Function // function to change recipes
  },
  methods: {
    async addToFav(recipeId) {
      this.fav = await addToFavorites(recipeId)
    },
    async handleMakeRecipe(event) {
      console.log('Recipe making process started');
      // redirect to recipe make page
      try {
      this.axios.defaults.withCredentials=true;
      const response = await this.axios.post(
          this.$root.store.server_domain + "/users/" + this.$root.store.username + "/meal/add",
          {
            recipeId: this.recipe.id
          }
        );
      if (response.status !== 200) this.$router.replace("/NotFound");
      // add recipes to local meal
      this.mealPlan.push(this.recipe);
      this.updateRecipes(this.mealPlan);
      console.log("Redirecting...");
      }
      catch (error) {
      console.log(error);
      }
    },
    // function for loading recipe page when the recipe is a personal recipe, and needs to be loaded directly from database
    async loadPersonalRecipe() {
      console.log("Personal Recipe ID: ", this.$route.params.personalRecipeId);
      const response = await this.axios.get(
          `${this.$root.store.server_domain}/users/${this.$root.store.username}/recipes/${this.$route.params.personalRecipeId}`
        );
        // Check if the response status is OK, if not - redirect to not found
        if (response.status !== 200 && response.status !== 304) {
          this.$router.replace("/NotFound");
          return;
        }
        this.recipe = response.data[0];
        // initialize extended ingredients
        this.recipe.extendedIngredients = [];
        // Iterate over the recipe data and get ingredients
        this.recipe.instructions.forEach(step => {
          // Extract ingredients
          step.ingredients.forEach(ingredient => {
            this.recipe.extendedIngredients.push({
              name: ingredient.name,
              amount: ingredient.amount,
              unit: ingredient.unit,
              original: ingredient.name + ", " + ingredient.amount + " " + ingredient.unit
            });
          });
        });
        // map over each step to extract the description of step
        const descriptions = this.recipe.instructions.map((step, index) => {
          return `${index + 1}. ${step.description}`;
        });
        // join all descriptions with a newline character
        this.formattedInstructions  = descriptions.join('\n\n');
        // log the data to ensure it's structured as expected
        console.log("Loaded personal recipe:", response.data[0], this.formattedInstructions);
    },
    // function for loading recipe page when the recipe is a recipe from API and needs to be loaded from it
    async loadRecipe() {
      console.log("Recipe ID: ", this.$route.params.recipeId);
      const response = await getRecipe(this.$route.params.recipeId);
      // Check if the response status is OK
      if (response.status !== 200 && response.status !== 304) {
        this.$router.replace("/NotFound");
        return;
      }
      // assign the recipe to the component's data
      this.recipe = response.data;
      this.formattedInstructions = this.recipe.instructions.replace('\n', '<br/>');
      // Log the data to ensure it's structured as expected
      console.log("Loaded recipe:", response.data);
    }
  },
  async created() {
    console.log("Loading recipe...");
    try {
      // check if the recipeId is valid, if so - it's a recipe from API
      if (this.$route.params.recipeId && this.$route.params.recipeId !== "") {
        await this.loadRecipe();
      } 
      // if recipeId is not valid, it can be a personal recipe that the user added so check for personalRecipeId
      else if (this.$route.params.personalRecipeId && this.$route.params.personalRecipeId !== "") {
        await this.loadPersonalRecipe();
      } 
      // if neither recipeId nor personalRecipeId is valid, redirect to NotFound
      else {
        console.log("No valid recipeId or personalRecipeId provided.");
        this.$router.replace("/NotFound");
        return;
      }
    } catch (error) {
      // log any errors
      console.log("Error:", error);
    }
  }
};
</script>

<style scoped>
.container {
  width: 80%;
  margin: auto;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.recipe-header {
  text-align: center;
  margin-bottom: 20px;
}

.recipe-title {
  font-size: 2.5em;
  margin-bottom: 10px;
}

.recipe-image {
  max-width: 100%;
  height: auto;
  border-radius: 10px;
  margin: 0 auto;
}

.recipe-details {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}

.details {
  flex: 1;
  min-width: 200px;
}

.detail-item {
  font-size: 1.1em;
  margin-bottom: 10px;
}

.detail-label {
  font-weight: bold;
}

.icons-container {
  display: flex;
  align-items: center;
  margin-top: 10px;
}

.icon {
  width: 35px;
  height: 35px;
  margin-right: 10px;
}

.ingredients, .instructions {
  flex: 2;
  min-width: 300px;
}

h2 {
  font-size: 1.5em;
  margin-bottom: 10px;
}

.fav-button {
  padding: 10px 20px;
  background-color: #f76672;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.fav-button:hover {
  background-color: #db666f;
}

.make-recipe-button {
  display: block;
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  text-align: center;
  text-decoration: none;
}

.make-recipe-button:hover {
  background-color: #45a049;
}

.make-recipe-link {
  text-decoration: none;
}

.button-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 40px;
}
</style>
