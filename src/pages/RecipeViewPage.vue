<template>
  <div class="container">
    <div v-if="recipe">
      <div class="recipe-header mt-3 mb-4">
        <h1>{{ recipe.title }}</h1>
        <img :src="recipe.image" class="center" />
      </div>
      <div class="recipe-body">
        <div class="wrapper">
          <div class="wrapped">
            <div class="mb-3">
              <div>Ready in {{ recipe.readyInMinutes }} minutes</div>
              <div>Likes: {{ recipe.aggregateLikes }} likes</div>
              <div>Servings: {{ recipe.servings }} servings</div>
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
              <!-- if favorited, show full icon. else, show to favorite icon -->
              <button class="fav-button" @click="addToFav(recipe.id)">
                <img v-show="!fav" src="@/assets/icons/to-fav.png" class="fav-icon" alt="Favorite" />
                <img v-show="fav" src="@/assets/icons/faved.png" class="fav-icon" alt="Favorited" />
              </button>
            </div>
            </div>
            Ingredients:
            <ul>
              <li
                v-for="(r, index) in recipe.extendedIngredients"
                :key="index + '_' + r.id"
              >
                {{ r.original }}
              </li>
            </ul>
          </div>
          <div class="wrapped">
            Instructions:
            <ol>
              <li v-for="s in recipe.instructions" :key="s.number">
                {{ s.step }}
              </li>
            </ol>
          </div>
        </div>
      </div>
      <!-- <pre>
      {{ $route.params }}
      {{ recipe }}
    </pre
      > -->
    </div>
  </div>
</template>

<script>
import { mockGetRecipeFullDetails } from "../services/recipes.js";
import { mockIsInFav, mockAddFavorite } from '../services/user.js'; // Import the mock function
export default {
  mounted() {
    // variables to save status of favorite adding and viewing of recipe by user
    this.fav = this.isFav(this.recipe.id);
  },
  data() {
    return {
      recipe: null,
      fav: false
    };
  },
  methods: {
    // method to check if recipe is favorited by user
    isFav(recipeId) {
      const response = mockIsInFav(recipeId);
      return response.response.data.success;
    },
        // method to add recipe to user's favorite recipes
    addToFav(recipeId) {
      console.log("addToFav called");
      const response = mockAddFavorite(recipeId);
      if (response.response.data.success === true) {
        this.fav = true;
        console.log("successfully added to favorites");
      } else {
        console.error("Failed to add to favorites:", response.response.data.message);
      }
    }
  },
  async created() {
    try {
      let response;
      // response = this.$route.params.response;

      try {
        // response = await this.axios.get(
        //   this.$root.store.server_domain + "/recipes/" + this.$route.params.recipeId,
        //   {
        //     withCredentials: true
        //   }
        // );

        response = mockGetRecipeFullDetails(this.$route.params.recipeId);

        // console.log("response.status", response.status);
        if (response.status !== 200) this.$router.replace("/NotFound");
      } catch (error) {
        console.log("error.response.status", error.response.status);
        this.$router.replace("/NotFound");
        return;
      }

      let {
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
.wrapper {
  display: flex;
}
.wrapped {
  width: 50%;
}
.center {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
}

.icon, .fav-icon {
  width: 35px;
  height: 35px;
  margin-right: 10px;
  margin-top: 10px;
}

.fav-button {
  border: none;
  background: none;
  padding: 0; 
  cursor: pointer;
}

.icons-container {
display: flex;
}
</style>
