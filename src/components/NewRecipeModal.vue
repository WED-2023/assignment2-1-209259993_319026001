<template>
  <b-modal id="recipeModal" name="recipeModal" title="Create New Recipe" @show="resetForm" hide-footer>
    <div class="custom-modal-content">
      <form @submit.prevent="submitForm">
        <b-card no-body class="mb-4 recipe-details-card">
          <b-card-header class="recipe-details-header text-white">Recipe Details</b-card-header>
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

        <b-card no-body class="mb-4 instructions-card">
          <b-card-header class="instructions-header text-white">Instructions</b-card-header>
          <b-card-body>
            <div v-for="(instruction, index) in form.instructions" :key="index" class="mb-4">
              <b-form-group :label="'Step ' + (index + 1)" :label-for="'instruction-' + index">
                <b-form-input :id="'instruction-' + index" v-model="instruction.step" required></b-form-input>
              </b-form-group>

              <div class="mb-2" v-for="(ingredient, iIndex) in instruction.ingredients" :key="'ingredient-' + index + '-' + iIndex">
                <b-form-group :label="'Ingredient ' + (iIndex + 1)" :label-for="'ingredient-' + index + '-' + iIndex">
                  <b-form-input v-model="ingredient.name" :placeholder="'Ingredient ' + (iIndex + 1)" required></b-form-input>
                </b-form-group>
                <b-form-group :label="'Amount '" :label-for="'amount-' + index + '-' + iIndex">
                  <b-form-input v-model="ingredient.amount" type="number" :placeholder="'Amount'" required></b-form-input>
                </b-form-group>
                <b-form-group :label="'Unit '" :label-for="'unit-' + index + '-' + iIndex">
                  <b-form-input v-model="ingredient.unit" :placeholder="'Unit'" required></b-form-input>
                </b-form-group>
              </div>
              <b-button @click="addIngredient(index)" variant="secondary">Add Ingredient to this Step</b-button>
            </div>
            <b-button @click="addInstruction" variant="secondary">Add Step</b-button>
          </b-card-body>
        </b-card>

        <b-card no-body class="mb-4 dietary-options-card">
          <b-card-header class="dietary-options-header text-white">Dietary Options</b-card-header>
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
          <b-button type="submit" variant="primary" class="create-button">Create Recipe</b-button>
          <b-button @click="closeModal" variant="secondary" class="ml-2">Close</b-button>
        </div>
      </form>
      <b-toaster name="toaster" :append-toast="true" placement="top-center"></b-toaster>
    </div>
  </b-modal>
</template>



<script>
import { mockAddNewRecipe } from "../services/recipes.js";

export default {
  name: "NewRecipeModal",
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
        instructions: [
          {
            step: '',
            ingredients: []  // Start with no ingredients
          }
        ],
        vegetarian: false,
        vegan: false,
        glutenFree: false
      }
    };
  },
  methods: {
    resetForm() {
      this.form = {
        title: '',
        image: '',
        readyInMinutes: '',
        servings: '',
        instructions: [
          {
            step: '',
            ingredients: []  // Start with no ingredients
          }
        ],
        vegetarian: false,
        vegan: false,
        glutenFree: false
      };
    },
    addIngredient(stepIndex) {
      this.form.instructions[stepIndex].ingredients.push({ name: '', amount: '', unit: '' });
    },
    addInstruction() {
      this.form.instructions.push({ step: '', ingredients: [] });  // Add new instruction with no ingredients
    },
    closeModal() {
      this.close();
    },
    submitForm() {
      this.form.instructions.forEach(instruction => {
        instruction.ingredients = instruction.ingredients.filter(ingredient => ingredient.name.trim() !== '');
      });
      this.form.instructions = this.form.instructions.filter(instruction => instruction.step.trim() !== '');

      console.log('Form submitted with data:', this.form);
      const response = mockAddNewRecipe(
        this.form.title,
        this.form.image,
        this.form.readyInMinutes,
        this.form.servings,
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

.recipe-details-card, .instructions-card, .dietary-options-card {
  border-color: #2c3e50; /* Primary color */
}
.recipe-details-header, .instructions-header, .dietary-options-header {
  background-color: #2c3e50; /* Primary color */
}

.b-button {
  margin-top: 10px;
}

.create-button {
  background-color: #2c3e50;
  border-color: #2c3e50;
}

.create-button:hover {
  background-color: #1c252e;
  border-color: #1c252e;
}

</style>

