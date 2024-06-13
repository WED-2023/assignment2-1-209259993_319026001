// src/services/user.js
import recipe_full_view from "../assets/mocks/recipe_full_view.json";
import recipe_preview from "../assets/mocks/recipe_preview.json";


  export function mockAddFavorite(recipeId) {
    return { status: 200, response: { data: { message: "The Recipe successfully saved as favorite", success: true}} };
  }
  
  export function mockAddUserRecipe(recipeDetails) {
    return { status: 200, response: { data: { message: "The Recipe successfully added to My Recipes", success: true}} };

  }

  /* mock function to mark recipe as viewed */
  export function mockViewRecipe(recipeId) {
    return { status: 200, response: { data: { message: "The recipe was marked as viewed", success: true}} };
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
            message: "Recipe not found in favorites.",
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
          message: "Recipe not found in viewed recipes.",
          success: false,
        }
      }
    };
  }
}

// src/services/user.js


export function mockSearchRecipe(searchCriteria) {
  // Simulate asynchronous behavior with setTimeout
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Simulate successful search
      resolve({ status: 200, response: { recipes: recipe_preview.recipes } });
      
      // Simulate error
      // reject({ status: 500, response: { message: "Internal Server Error" } });
    }, 1000); // Simulating 1 second delay
  });
}



  