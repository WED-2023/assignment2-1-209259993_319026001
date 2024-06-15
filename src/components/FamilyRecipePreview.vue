<template>
  <div class="recipe-preview">
    <div class="recipe-body">
        <img :src="recipe.image" class="recipe-image" />
    </div>
    <div class="recipe-footer">
      <div :title="recipe.title" class="recipe-title">
        <h1>{{ recipe.title }}</h1>
      </div>
      <ul class="recipe-overview">
        <li>By {{ recipe.owner }}</li>
        <li>Ready in {{ recipe.readyInMinutes }} minutes</li>
        <li>Make for {{ recipe.whenToMake }}</li>
        <br>
        <li>About the dish: {{ recipe.summary }}</li>
        <br>
        <h4>Ingredients:</h4>
        <ul class="recipe-ingredients">
        <li v-for="(ingredient, index) in recipe.ingredients" :key="index">
          {{ ingredient }}
        </li>
        </ul>
        <br>
        <h4>Instructions:</h4>
      <!-- Loop through instructions using v-for -->
      <li v-for="(instruction, index) in recipe.instructions" :key="index">
        {{ instruction.index }}. {{ instruction.instruction }}
      </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "FamilyRecipePreview",
  props: {
    recipe: {
      type: Object,
      required: true
    }
  }
};
</script>

<style scoped>
.recipe-preview {
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  border: 1px solid #ccc;
  padding: 10px;
}

.recipe-body {
  position: relative;
  flex: 1;
  overflow: hidden;
}

.recipe-body .recipe-image {
  width: 100%; /* Ensure the image takes full width */
  height: auto; /* Maintain aspect ratio */
  max-height: 300px; /* Limit the maximum height of the image */
  object-fit: cover; /* Maintain aspect ratio and cover container */
}

.recipe-footer {
  padding: 10px;
  background-color: #f5f5f5;
}

.recipe-title {
  font-weight: bold;
  font-size: 20px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-bottom: 5px;
  text-align: center;
}

.recipe-overview {
  list-style: none;
  padding: 0;
  text-align: center;
  margin: 0; /* Remove default margin */
}

.recipe-ingredients {
  list-style-type: none;
  padding: 0;
  text-align: center;
  margin: 0;
}
</style>
