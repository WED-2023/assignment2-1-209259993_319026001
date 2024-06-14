<template>
    <b-modal id="recipeModal" title="Create New Recipe" @show="resetForm">
      <div class="custom-modal-content">
      <form @submit.prevent="submitForm">
        <b-form-group label="Title of Recipe" label-for="title-input">
          <b-form-input id="title-input" v-model="form.title" required></b-form-input>
        </b-form-group>
  
        <b-form-group label="Image (URL)" label-for="image-input">
          <b-form-input id="image-input" v-model="form.image" required></b-form-input>
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
  
        <!-- Dietry Restrictions -->
        <b-form-group label="Dietary Options">
          <b-form-checkbox v-model="form.vegetarian">Vegetarian</b-form-checkbox>
          <b-form-checkbox v-model="form.vegan">Vegan</b-form-checkbox>
          <b-form-checkbox v-model="form.glutenFree">Gluten Free</b-form-checkbox>
        </b-form-group>

  
        <b-button type="submit" variant="primary">Create Recipe</b-button>
      </form>
    </div>
    </b-modal>
  </template>
  
  <script>
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
  
        // Here you would handle form submission, e.g., send data to API or process locally
        console.log('Form submitted with data:', this.form);
        // You can then close the modal after successful submission
        this.$bvModal.hide('recipeModal');
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
  </style>
  