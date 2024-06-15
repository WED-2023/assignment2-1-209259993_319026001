<template>
  <b-container>
    <!-- Title -->
    <b-row>
      <b-col>
        <h3>{{ title }}</h3>
      </b-col>
    </b-row>
    <b-row>
      <b-col v-for="r in recipes" :key="r.id">
        <RecipePreview class="recipePreview" :recipe="r" />
      </b-col>
    </b-row>
  </b-container>
</template>
  
  <script>
  import RecipePreview from "./RecipePreview.vue";
  
  export default {
    name: "RecipePreviewList",
    components: {
      RecipePreview
    },
    props: {
      title: {
        type: String,
        required: true
      },
      recipes: {
        type: Array,
        required: true,
        default: () => []
      }
    }
  };
  </script>
  
  <style lang="scss" scoped>
  .container {
    min-height: 400px;
    display: flex;
    flex-direction: column;
  }
  
  h3 {
    text-align: center;
  }
  </style>
  