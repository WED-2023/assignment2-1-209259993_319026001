<template>
    <div class="my-page">
          <!-- if results are not empty, show them -->
          <div v-if="recipes.length > 0">
            <div class="my-header">
              <h2>My Recipes</h2>
            </div>
            <!-- show results -->
        <RecipePreviewList :recipes="recipes" />
      </div>
      <!-- if no results come back, show message -->
      <div v-else>
        <h1>No results came back.</h1>
        <router-link to="/search" exact>Want to add something to the list?</router-link>
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
          recipes: []
      };
  },
  async created() {
      await this.getUserRecipes();
  },
  methods: {
      async getUserRecipes() {
        try {
          const response = await this.axios.get(
            this.$root.store.server_domain + "/users/" + this.$root.store.username + "/recipes"
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
  .my-header {
    display: flex;
    justify-content: center;
    align-items: center; 
    width: 100%; 
    padding: 5px; 
  }
  
  .my-page {
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

  </style>