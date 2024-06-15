<template>
    <b-modal id="recipeModal" title="Create New Recipe" @show="resetForm">
      <div class="custom-modal-content">
      <form @submit.prevent="submitForm">
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
  
        <!-- Ingredients -->
        <b-form-group label="Ingredients">
          <div v-for="(ingredient, index) in form.ingredients" :key="index">
            <b-form-input v-model="form.ingredients[index]" :placeholder="'Ingredient ' + (index + 1)" required></b-form-input>
          </div>
          <b-button @click="addIngredient" variant="outline-primary">Add Ingredient</b-button>
        </b-form-group>
  
        <!-- Instructions -->
        <b-form-group label="Instructions">
          <div v-for="(instruction, index) in form.instructions" :key="index">
            <b-form-input v-model="form.instructions[index]" :placeholder="'Step ' + (index + 1)" required></b-form-input>
          </div>
          <b-button @click="addInstruction" variant="outline-primary">Add Instruction</b-button>
        </b-form-group>
  
        <!-- Dietary Restrictions -->
        <b-form-group label="Dietary Options">
          <div class="form-check">
            <input type="checkbox" id="vegetarian" class="form-check-input" v-model="form.vegetarian">
            <label for="vegetarian" class="form-check-label">Vegetarian</label>
          </div>
          <div class="form-check">
            <input type="checkbox" id="vegan" class="form-check-input" v-model="form.vegan">
            <label for="vegan" class="form-check-label">Vegan</label>
          </div>
          <div class="form-check">
            <input type="checkbox" id="glutenFree" class="form-check-input" v-model="form.glutenFree">
            <label for="glutenFree" class="form-check-label">Gluten Free</label>
          </div>
        </b-form-group>

  
        <b-button type="submit" variant="primary">Create Recipe</b-button>
      </form>
      <b-toaster :append-toast="true" placement="top-center"></b-toaster>
    </div>
    </b-modal>
  </template>
  
  <script>
  import { mockAddNewRecipe } from "../services/recipes.js";
  export default {
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
      }
    }
  };
  </script>
  
  <style scoped>
#recipeModal {
  background-color: #ffffff;
}
.custom-modal-content {
  background-color: #ffffff;
  max-width: 40%; 
  margin: 0 auto; 
  padding: 10px;
}

.form-check {
  margin-bottom: 5px;
}
  </style>
  