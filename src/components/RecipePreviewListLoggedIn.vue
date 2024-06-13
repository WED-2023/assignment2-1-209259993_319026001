<script>
import RecipePreviewList from "./RecipePreviewList.vue";
import { mockGetRecipesPreview } from "../services/recipes.js";

export default {
  name: "RecipePreviewListLoggedIn",
  components: {
    RecipePreviewList

  },
  props: {
    title: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      recipes: []
    };
  },
  mounted() {
    this.updateRecipes();
  },
  methods: {
    updateRecipes() {
      try {
        const amountToFetch = 3; // Set this to how many recipes you want to fetch
        const response = mockGetRecipesPreview(amountToFetch); // Mock API call to fetch recipes
        const recipes = response.data.recipes; // Extract recipes from response
        this.recipes = recipes; // Update the recipes data property
      } catch (error) {
        console.error("Error fetching recipes:", error);
      }
    }
  }
};
</script>
