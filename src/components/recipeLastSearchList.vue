<template>
    <b-container class="recipe-last-search-list">
      <br>
      <b-row v-for="(chunk, index) in chunkedRecipes" :key="index">
        <b-col v-for="recipe in chunk" :key="recipe.id">
          <RecipePreview class="recipePreview" :recipe="recipe" />
        </b-col>
      </b-row>
    </b-container>
  </template>
  
  <script>
  import RecipePreview from "./RecipePreview";
  
  export default {
    name: "recipeLastSearchList",
    components: {
      RecipePreview
    },
    props: {
      recipes: {
        type: Array,
        required: true
      }
    },
    computed: {
      chunkedRecipes() {
        // Default chunk size
        const chunkSize = 5; // You can adjust this as needed
  
        // Chunk the recipes array into arrays of size chunkSize
        return this.recipes.reduce((resultArray, item, index) => {
          const chunkIndex = Math.floor(index / chunkSize);
  
          if (!resultArray[chunkIndex]) {
            resultArray[chunkIndex] = []; // start a new chunk
          }
  
          resultArray[chunkIndex].push(item);
  
          return resultArray;
        }, []);
      }
    }
  };
  </script>
  
  <style lang="scss" scoped>
  .recipe-last-search-list {
    min-height: 400px;
  }
  </style>
  