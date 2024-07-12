<template>
  <div class="recipe-preview">
    <div class="recipe-body">
      <router-link :to="{ name: 'recipe', params: { recipeId: recipe.id } }" @click.native="markAsViewed(recipe.id)" ><img :src="recipe.image" class="recipe-image" />
      </router-link> 
      <!-- if favorited, show full icon. else, show to favorite icon -->
      <button class="fav-button" @click="handleFavClick(recipe.id, $event)">
        <img v-show="!fav" src="@/assets/icons/to-fav.png" class="fav-icon" alt="Favorite" />
        <img v-show="fav" src="@/assets/icons/faved.png" class="fav-icon" alt="Favorited" />
      </button>
      <!-- if viewed, show viewed icon. -->
      <img v-if="viewed" src="@/assets/icons/viewed.png" class="viewed-icon" alt="Viewed" />
    </div>
    <div class="recipe-footer">
      <div :title="recipe.title" class="recipe-title">
        {{ recipe.title }}
      </div>
      <ul class="recipe-overview">
        <li>{{ recipe.readyInMinutes }} minutes</li>
        <li>{{ recipe.popularity }} likes</li>
        <li v-if="recipe.vegetarian">
          <img src="@/assets/icons/no-meat.png" alt="Vegetarian" class="icon" />
        </li>
        <li v-if="recipe.vegan">
          <img src="@/assets/icons/vegan.png" alt="Vegan" class="icon" />
        </li>
        <li v-if="recipe.glutenFree">
          <img src="@/assets/icons/gluten-free.png" alt="Gluten Free" class="icon" />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
// import mock functions of user
import { mockAddFavorite, mockIsInFav, mockIsViewed, mockViewRecipe } from '../services/user.js'; // Import the mock function
export default {
  mounted() {
    // variables to save status of favorite adding and viewing of recipe by user
    this.fav = this.isFav(this.recipe.id);
    this.viewed = this.isViewed(this.recipe.id);
  },
  props: {
    recipe: {
      type: Object,
      required: true
    }
  },
  methods: {
    // method to check if recipe is favorited by user
    isFav(recipeId) {
      const response = mockIsInFav(recipeId);
      return response.response.data.success;
    },
    // method to check if recipe is viewed by user
    isViewed(recipeId) {
      const response = mockIsViewed(recipeId);
      return response.response.data.success;
    },
    handleFavClick(recipeId, event) {
      event.stopPropagation(); // Stop event propagation

      if (!this.$root.store.username) {
        // User is not logged in
        alert('You must be logged in to favorite a recipe.');
      } else {
        // User is logged in, proceed to add to favorites
        this.addToFav(recipeId);
      }
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
    },
    // method to mark recipe as viewed
    markAsViewed(recipeId) {
      const response = mockViewRecipe(recipeId);
      if (response.response.data.success === true) {
        this.viewed = true;
        console.log("successfully marked as viewed");
      } else {
        console.error("Failed to mark as viewed:", response.response.data.message);
      }
    }
  },
  data() {
    return {
      // return variables
      viewed: false,
      fav: false
    };
  }
};
</script>

<style scoped>
.recipe-preview {
  display: inline-block;
  position: relative;
  margin: 10px 10px;
  width: 450px;  
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  padding: 5px;
}
.recipe-preview > .recipe-body {
  width: 100%;
  height: 200px;
  position: relative;
}

.recipe-preview .recipe-body .recipe-image {
  margin-left: auto;
  margin-right: auto;
  margin-top: auto;
  margin-bottom: auto;
  display: block;
  width: 100%;
  height: auto;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  background-size: cover;
}

.recipe-body {
  overflow: hidden;
  width: 100%;
}

.recipe-preview .recipe-footer {
  width: 100%;
  height: 50%;
  overflow: hidden;
}

.recipe-preview .recipe-footer .recipe-title {
  padding: 10px 10px;
  width: 100%;
  font-size: 12pt;
  text-align: left;
  white-space: nowrap;
  -o-text-overflow: ellipsis;
  text-overflow: ellipsis;
}

.recipe-preview .recipe-footer ul.recipe-overview {
  padding: 5px 10px;
  width: 100%;
  display: -webkit-box;
  display: -moz-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-flex: 1;
  -moz-box-flex: 1;
  -o-box-flex: 1;
  box-flex: 1;
  -webkit-flex: 1 auto;
  -ms-flex: 1 auto;
  flex: 1 auto;
  table-layout: fixed;
  margin-bottom: 0px;
}

.recipe-preview .recipe-footer ul.recipe-overview li {
  -webkit-box-flex: 1;
  -moz-box-flex: 1;
  -o-box-flex: 1;
  -ms-box-flex: 1;
  box-flex: 1;
  -webkit-flex-grow: 1;
  flex-grow: 1;
  width: 90px;
  display: table-cell;
  text-align: center;
}

.icon {
  width: 30px;
  height: 30px;
}

.recipe-image, .fav-icon {
  transition: transform 0.3s ease, filter 0.3s ease; 
}

.recipe-image:hover, .fav-icon:hover {
  transform: scale(1.1);
  filter: brightness(0.9);
}

.fav-icon {
  position: absolute;
  top: 10px; 
  right: 5px; 
  width: 35px; 
  height: 35px; 
  z-index: 10; 
}

.viewed-icon {
  right: 40px;
  position: absolute;
  top: 12px; 
  width: 30px; 
  height: 30px; 
}

.recipe-title {
  font-weight: bold;
}

</style>
