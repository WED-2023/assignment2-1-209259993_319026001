// src/services/user.js
import recipe_full_view from "../assets/mocks/recipe_full_view.json";
import recipe_preview from "../assets/mocks/recipe_preview.json";


  export function mockAddFavorite(recipeId) {
    return { status: 200, response: { data: { message: "The Recipe successfully saved as favorite", success: true}} };
  }
  
  export function mockAddUserRecipe(recipeDetails) {
    return { status: 200, response: { data: { message: "The Recipe successfully added to My Recipes", success: true}} };

  }

  /* mock function to check if recipe is already favorited */
  export function mockIsInFav(recipeId) {
    if (recipeId >= 1 && recipeId <= 2000) {
      return {
        status: 200,
        response: {
          data: {
            message: "The Recipe is found in favorites.",
            success: true,
          }
        }
      };
    } else {
      return {
        status: 404,
        response: {
          data: {
            message: "Recipe not found.",
            success: false,
          }
        }
      };
    }
}

/* mock function to check if recipe has been viewed by user */
export function mockIsViewed(recipeId) {
  if (recipeId >= 1 && recipeId <= 20000000) {
    return {
      status: 200,
      response: {
        data: {
          message: "The Recipe was viewed by user.",
          success: true,
        }
      }
    };
  } else {
    return {
      status: 404,
      response: {
        data: {
          message: "Recipe was not viewed by user.",
          success: false,
        }
      }
    };
  }
}
  