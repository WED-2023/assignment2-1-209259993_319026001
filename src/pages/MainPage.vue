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
          <RecipePreviewList :recipes="lastRecipes" title="Last viewed recipes" class="RandomRecipes center" />
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
import Login from '../components/Login';
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
    if (this.$root.store.username) {
      await this.getLastViewedRecipes();
    }
},
  methods: {
    async fetchNewRecipes() {
      try {
        const response = await this.axios.get(
          this.$root.store.server_domain + "/recipes/random",
        );
        console.log(response);
        this.randomRecipes = response.data;
      } catch (error) {
        console.log(error);
      }
    },
    async getLastViewedRecipes() {
      console.log("Checking session data...");
      const username = this.$root.store.username;
      const sessionCookie = document.cookie.includes("session");
      console.log("username:", username, "cookies:", sessionCookie);
      try {
        const response = await this.axios.get(
          `${this.$root.store.server_domain}/users/${this.$root.store.username}/lastViewed`,
          {
            withCredentials: true
          }
        );
        console.log(response);
        this.lastRecipes = response.data.recipes;
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
