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
          this.axios.defaults.withCredentials=true;
          const response = await this.axios.get(
            this.$root.store.server_domain + "/users/" + this.$root.store.username + "/favorites"
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