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
            <span class="detail-label">Likes:</span> {{ recipe.aggregateLikes }} likes
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
              :to="{ name: 'make-recipe', params: { recipeId: recipe.id } }" 
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
          <ol>
            <li v-for="s in recipe.instructions" :key="s.number">
              {{ s.step }}
            </li>
          </ol>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mockGetRecipeFullDetails } from "../services/recipes.js";
import { mockIsInFav, mockAddFavorite, mockAddToMeal } from '../services/user.js';

export default {
  mounted() {
    this.fav = this.isFav(this.recipe.id);
  },
  data() {
    return {
      recipe: null,
      fav: false
    };
  },
  methods: {
    isFav(recipeId) {
      const response = mockIsInFav(recipeId);
      return response.response.data.success;
    },
    addToFav(recipeId) {
      const response = mockAddFavorite(recipeId);
      if (response.response.data.success === true) {
        this.fav = true;
      } else {
        console.error("Failed to add to favorites:", response.response.data.message);
      }
    },
    async handleMakeRecipe(event) {
      console.log('Recipe making process started');
      try {
      this.axios.defaults.withCredentials=true;
      const response = await this.axios.post(
          this.$root.store.server_domain + "/users/" + this.$root.store.username + "meal/add",
          {
            recipeId: this.recipe.id
          }
        );
      if (response.status !== 200) this.$router.replace("/NotFound");
      console.log("Redirecting...");
      }
      catch (error) {
      console.log(error);
      }

    }
  },
  async created() {
    try {
      let response = mockGetRecipeFullDetails(this.$route.params.recipeId);
      if (response.status !== 200) this.$router.replace("/NotFound");

      let {
        id,
        analyzedInstructions,
        instructions,
        extendedIngredients,
        aggregateLikes,
        readyInMinutes,
        image,
        title,
        servings,
        vegetarian,
        vegan,
        glutenFree
      } = response.data.recipe;

      let _instructions = analyzedInstructions
        .map((fstep) => {
          fstep.steps[0].step = fstep.name + fstep.steps[0].step;
          return fstep.steps;
        })
        .reduce((a, b) => [...a, ...b], []);

      let _recipe = {
        id,
        instructions,
        _instructions,
        analyzedInstructions,
        extendedIngredients,
        aggregateLikes,
        readyInMinutes,
        image,
        title,
        servings,
        vegetarian,
        vegan,
        glutenFree
      };

      this.recipe = _recipe;
    } catch (error) {
      console.log(error);
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
