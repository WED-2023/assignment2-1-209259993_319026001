// src/services/user.js
import recipe_full_view from "../assets/mocks/recipe_full_view.json";
import recipe_preview from "../assets/mocks/recipe_preview.json";
import family_recipes from "../assets/mocks/family_recipes.json";
import full_make_recipe from "../assets/mocks/full_make_recipe.json"


/*
many functions look the same because it's a reminder to implement them
*/


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

// mock function to get favorites of user
export function mockGetFavorites() {
  // just return existing recipes because it's a mock
  return { data: { recipes: recipe_preview.recipes }, status: 200 } ;
}

// mock function to get recipes of user
export function mockGetUserRecipes() {
  // just return existing recipes because it's a mock
  return { data: { recipes: recipe_preview.recipes }, status: 200 } ;
}

// mock function to get family of user
export function mockFamilyRecipes() {
  // just return existing recipes because it's a mock
  return { data: { recipes: family_recipes.recipes }, status: 200 } ;
}

export function mockAddToMeal(recipeId) {
  return { status: 200, response: { data: { message: "The Recipe was added to meal successfully", success: true}} };
}

export async function mockGetMeal() {
  return { data: { recipes: [full_make_recipe, recipe_full_view] }, status: 200 } ;
}

export async function mockGetNumberOfRecipesInMeal() {
  return { data: { numOfRecipes: 2 }, status: 200 } ;
}

export function mockRemoveFromMeal(recipeId) {
  return { status: 200, response: { data: { message: "The Recipe was removed from meal successfully", success: true}} };
}



  