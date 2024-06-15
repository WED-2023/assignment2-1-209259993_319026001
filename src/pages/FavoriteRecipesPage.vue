<template>
    <div class="fav-page">
          <!-- if results are not empty, show them -->
          <div v-if="recipes.length > 0">
            <div class="fav-header">
              <h2>My Favorites</h2>
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
  import { mockGetFavorites } from "../services/user.js";
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
      await this.getFavorites();
  },
  methods: {
      async getFavorites() {
        try {
          const response = mockGetFavorites();
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
  .fav-header {
    display: flex;
    justify-content: center;
    align-items: center; 
    width: 100%; 
    padding: 5px; 
  }
  
  .fav-page {
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