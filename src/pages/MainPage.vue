<template>
  <div class="container">

    <!-- <router-link v-if="!$root.store.username" to="/login" tag="button">You need to Login to vue this</router-link>
    {{ !$root.store.username }}

    <RecipePreviewList
      title="Last Viewed Recipes"
      :class="{
        RandomRecipes: true,
        blur: !$root.store.username,
        center: true
      }"
      disabled
    ></RecipePreviewList> -->

    <div>
    <TwoColumnsLayout>
      <template #left-column>
        <RecipePreviewList :recipes="randomRecipes" title="Explore these recipes" class="RandomRecipes center" />
        <div class="button-container">
          <b-button variant="dark" class="button-element" @click="fetchNewRecipes">More</b-button>
        </div>
      </template>
      <template #right-column>
        <!-- if user is not logged in -->
        <div v-if="!$root.store.username" class="login-container">
          <Login />
        </div>
        <!-- if user is logged in -->
        <div v-else>
          <RecipePreviewList :recipes="lastRecipes" title="Last Viewed Recipes" class="RandomRecipes center" />
        </div>
      </template>
    </TwoColumnsLayout>
  </div>


    <!-- <div
      style="position: absolute;top: 70%;left: 50%;transform: translate(-50%, -50%);"
    >
      Centeredasdasdad
    </div>-->
  </div>
</template>

<script>
import RecipePreviewList from "../components/RecipePreviewList";
import TwoColumnsLayout from '../components/TwoColumnsLayout';
import Login from '../pages/LoginPage';
import { mockGetRecipesPreview } from "../services/recipes.js";
export default {
  components: {
    RecipePreviewList,
    TwoColumnsLayout,
    Login
  },
  data() {
    return {
      randomRecipes: [],
      lastRecipes: []
    };
  },
  async created() {
    await this.fetchNewRecipes();
    await this.getLastViewedRecipes();
},
  methods: {
    async fetchNewRecipes() {
      try {
        // const response = await this.axios.get(
        //   this.$root.store.server_domain + "/recipes/random",
        // );

        const amountToFetch = 3; // Set this to how many recipes you want to fetch
        const response = mockGetRecipesPreview(amountToFetch);


        console.log(response);
        const recipes = response.data.recipes;
        console.log(recipes);
        this.randomRecipes = [];
        this.randomRecipes.push(...recipes);
      } catch (error) {
        console.log(error);
      }
    },
    async getLastViewedRecipes() {
      try {
        // const response = await this.axios.get(
        //   this.$root.store.server_domain + "/recipes/random",
        // );

        const amountToFetch = 3; // Set this to how many recipes you want to fetch
        const response = mockGetRecipesPreview(amountToFetch);
        console.log(response);
        const recipes = response.data.recipes;
        console.log(recipes);
        this.lastRecipes = [];
        this.lastRecipes.push(...recipes);
      } catch (error) {
        console.log(error);
      }
    }
  } 
};
</script>

<style lang="scss" scoped>
.RandomRecipes {
  margin: 10px 0 10px;
}
.blur {
  -webkit-filter: blur(5px); /* Safari 6.0 - 9.0 */
  filter: blur(2px);
}
::v-deep .blur .recipe-preview {
  pointer-events: none;
  cursor: default;
}

.button-container {
  display: flex;
  justify-content: center;
}

.button-element {
  transition: background-color 0.3s ease;
  z-index: 1;
}

.button-element:hover {
  background-color: #2c3e50;
}

.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh; 
}
</style>
