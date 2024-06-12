// src/services/recipes.js
import recipe_full_view from "../assets/mocks/recipe_full_view.json";
import recipe_preview from "../assets/mocks/recipe_preview.json";


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
  
