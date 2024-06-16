<template>
  <b-modal id="recipeModal" title="Create New Recipe" @show="resetForm" hide-footer>
    <div class="custom-modal-content">
      <form @submit.prevent="submitForm">
        <b-card no-body class="mb-4 border-primary">
          <b-card-header class="bg-primary text-white">Recipe Details</b-card-header>
          <b-card-body>
            <b-form-group label="Title of Recipe" label-for="title-input">
              <b-form-input id="title-input" v-model="form.title" required></b-form-input>
            </b-form-group>

            <b-form-group label="Image (URL)" label-for="image-input">
              <b-form-input
                id="image-input"
                v-model="form.image"
                required
                pattern="https?://.+?\.(jpg|jpeg|png|gif|svg)$"
                title="Please enter a valid image URL (e.g., http://example.com/image.jpg)"
              ></b-form-input>
            </b-form-group>

            <b-form-group label="Make Time (In minutes)" label-for="readyInMinutes-input">
              <b-form-input id="readyInMinutes-input" type="number" v-model="form.readyInMinutes" required></b-form-input>
            </b-form-group>

            <b-form-group label="Number of Servings" label-for="servings-input">
              <b-form-input id="servings-input" type="number" v-model="form.servings" required></b-form-input>
            </b-form-group>
          </b-card-body>
        </b-card>

        <b-card no-body class="mb-4 border-secondary">
          <b-card-header class="bg-secondary text-white">Ingredients</b-card-header>
          <b-card-body>
            <div v-for="(ingredient, index) in form.ingredients" :key="index" class="mb-2">
              <b-form-input v-model="form.ingredients[index]" :placeholder="'Ingredient ' + (index + 1)" required></b-form-input>
            </div>
            <b-button @click="addIngredient" variant="outline-primary">Add Ingredient</b-button>
          </b-card-body>
        </b-card>

        <b-card no-body class="mb-4 border-secondary">
          <b-card-header class="bg-secondary text-white">Instructions</b-card-header>
          <b-card-body>
            <div v-for="(instruction, index) in form.instructions" :key="index" class="mb-2">
              <b-form-input v-model="form.instructions[index]" :placeholder="'Step ' + (index + 1)" required></b-form-input>
            </div>
            <b-button @click="addInstruction" variant="outline-primary">Add Instruction</b-button>
          </b-card-body>
        </b-card>

        <b-card no-body class="mb-4 border-info">
          <b-card-header class="bg-info text-white">Dietary Options</b-card-header>
          <b-card-body>
            <div class="form-check mb-2">
              <input type="checkbox" id="vegetarian" class="form-check-input" v-model="form.vegetarian">
              <label for="vegetarian" class="form-check-label">Vegetarian</label>
            </div>
            <div class="form-check mb-2">
              <input type="checkbox" id="vegan" class="form-check-input" v-model="form.vegan">
              <label for="vegan" class="form-check-label">Vegan</label>
            </div>
            <div class="form-check">
              <input type="checkbox" id="glutenFree" class="form-check-input" v-model="form.glutenFree">
              <label for="glutenFree" class="form-check-label">Gluten Free</label>
            </div>
          </b-card-body>
        </b-card>

        <div class="d-flex justify-content-end">
          <b-button type="submit" variant="primary">Create Recipe</b-button>
          <b-button @click="closeModal" variant="secondary" class="ml-2">Close</b-button>
        </div>
      </form>
      <b-toaster :append-toast="true" placement="top-center"></b-toaster>
    </div>
  </b-modal>
</template>

<script>
import { mockAddNewRecipe } from "../services/recipes.js";
export default {
  props: {
    close: {
      type: Function,
      required: true
    }
  },
  data() {
    return {
      form: {
        title: '',
        image: '',
        readyInMinutes: '',
        servings: '',
        ingredients: [''],
        instructions: [''],
        vegetarian: false,
        vegan: false,
        glutenFree: false
      }
    };
  },
  methods: {
    resetForm() {
      // Reset form fields when modal is shown
      this.form = {
        title: '',
        image: '',
        readyInMinutes: '',
        servings: '',
        ingredients: [''],
        instructions: [''],
        vegetarian: false,
        vegan: false,
        glutenFree: false
      };
    },
    addIngredient() {
      this.form.ingredients.push('');
    },
    addInstruction() {
      this.form.instructions.push('');
    },
    closeModal() {
      this.close();
    },
    submitForm() {
      // Remove any empty ingredients or instructions
      this.form.ingredients = this.form.ingredients.filter(ingredient => ingredient.trim() !== '');
      this.form.instructions = this.form.instructions.filter(instruction => instruction.trim() !== '');

      // Add new recipe (replace with actual API call)
      console.log('Form submitted with data:', this.form);
      const response = mockAddNewRecipe(
        this.form.title,
        this.form.image,
        this.form.readyInMinutes,
        this.form.servings,
        this.form.ingredients,
        this.form.instructions,
        this.form.vegetarian,
        this.form.vegan,
        this.form.glutenFree
      );

      if (response.response.data.success === true) {
        this.$bvToast.toast("Recipe Created", {
          title: "Success",
          variant: "success",
          solid: true,
          toaster: "b-toaster-top-center"
        });
        console.log("Recipe created successfully");
      } else {
        this.$bvToast.toast("Failed to Create Recipe", {
          title: "Error",
          variant: "danger",
          solid: true,
          toaster: "b-toaster-top-center"
        });
        console.error("Failed to add recipe:", response.response.data.message);
      }
      this.resetForm()
    }
  }
};
</script>

<style scoped>
.custom-modal-content {
  background-color: #ffffff;
  max-width: 50%;
  margin: 0 auto;
  padding: 20px;
  border-radius: 10px;
}

.form-check {
  margin-bottom: 10px;
}

.b-card-header {
  font-weight: bold;
  text-align: center;
}

.b-card {
  border-width: 2px;
}

.b-button {
  margin-top: 10px;
}
</style>
