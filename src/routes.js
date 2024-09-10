import Main from "./pages/MainPage";
import NotFound from "./pages/NotFoundPage";

const routes = [
  {
    path: "/",
    name: "main",
    component: Main,
  },
  {
    path: "/register",
    name: "register",
    component: () => import("./pages/RegisterPage"),
  },
  {
    path: "/login",
    name: "login",
    component: () => import("./pages/LoginPage"),
  },
  {
    path: "/search",
    name: "search",
    component: () => import("./pages/SearchPage"),
  },
  {
    path: '/recipe/:recipeId',
    name: "recipe",
    component: () => import("./pages/RecipeViewPage"),
  },
  {
    path: '/personal-recipe/:personalRecipeId',
    name: "personalRecipe",
    component: () => import("./pages/RecipeViewPage"),
  },
  {
    path: "*",
    name: "notFound",
    component: NotFound,
  },
  {
    path: "/about",
    name: "about",
    component: () => import("./pages/AboutPage"),
  },
  {
    path: "/results",
    name: "results",
    component: () => import("./pages/SearchResultsPage"),
  },
  {
    path: "/favorites",
    name: "favorites",
    component: () => import("./pages/FavoriteRecipesPage"),
  },
  {
    path: "/my-recipes",
    name: "my-recipes",
    component: () => import("./pages/MyRecipesPage"),
  },
  {
    path: "/family-recipes",
    name: "family-recipes",
    component: () => import("./pages/FamilyRecipesPage"),
  },
  {
    path: '/make-recipe/:recipeId',
    name: "make-recipe",
    component: () => import("./pages/MakeRecipePage"),
  },
  {
    path: '/meal-plan',
    name: "meal-plan",
    component: () => import("./pages/PrepareMealPage"),
  }
];

export default routes;
