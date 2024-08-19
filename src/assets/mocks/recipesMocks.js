// src/services/recipes.js
import recipe_full_view from "../assets/mocks/recipe_full_view.json";
import recipe_preview from "../assets/mocks/recipe_preview.json";
import recipe_instructions from "../assets/mocks/recipe_analyzed_instructions.json";
import full_make_recipe from "../assets/mocks/full_make_recipe.json"

/*
many functions look the same because it's a reminder to implement them
*/

export function mockGetRecipesPreview(amount = 1) {
  let recipes = [];
  // Shuffle the recipes array to randomize the order
  recipe_preview.recipes.sort(() => Math.random() - 0.5);
  // Get the first recipes from the shuffled array according to amount
  recipes = recipe_preview.recipes.slice(0, amount);
  return { data: { recipes: recipes } };
}

export function mockGetRecipeFullDetails(recipeId) {
    return { data: { recipe: recipe_full_view }, status: 200 } ;
  }

export function mockSearchDatabase(search, cuisine, diet, intolerance) {
  // just return existing recipes because it's a mock
  return { data: { recipes: recipe_preview.recipes }, status: 200 } ;
}

// mock function for adding new recipe
export function mockAddNewRecipe(title, image, readyInMinutes, servings, ingredients, instructions, vegetarian, vegan, glutenFree) {
  return { status: 200, response: { data: { message: "The Recipe was created successfully.", success: true}} };
}

// mock function to get analayzed instructions of recipe
export async function mockGetRecipeInstructions(recipeId) {
  return { data: { instructions: recipe_instructions }, status: 200 } ;
}

// mock function to get the full details for the recipe in the mock instructions getter
// in order to get the extended ingridients for amounts
export async function mockGetRecipeDetailsForIngridients(recipeId) {
  return { data: { recipe: full_make_recipe }, status: 200 } ;
}
  
