<template>
    <div class="container" v-if="instructions">
        <h1>{{ recipe.title }}</h1>
        <h4>Servings: {{ servings }}</h4>
        <button @click="doubleServings">Double the Servings</button>
        <div v-for="(step, index) in instructions.steps" :key="index" class="step">
            <div class="step-header">
                <h2>Step {{ step.number }}</h2>
                <input type="checkbox" v-model="step.completed" @change="updateCompletionStatus(step)" />
            </div>
            <p>{{ step.step }}</p>
            <div v-if="step.ingredients.length > 0">
                <h3>Ingredients:</h3>
                <ul>
                    <li v-for="(ingredient, i) in step.ingredients" :key="i">
                        <img :src="ingredient.image" :alt="ingredient.name" class="ingredient-image"/>
                        {{ ingredient.name }}:
                        <span v-if="ingredient.id && extendedIngredients[ingredient.id]">
                            {{ extendedIngredients[ingredient.id].amount }} {{ extendedIngredients[ingredient.id].unit }}
                        </span>
                    </li>
                </ul>
            </div>
            <div v-if="step.equipment.length > 0">
                <h3>Equipment:</h3>
                <ul>
                    <li v-for="(equipment, i) in step.equipment" :key="i">
                        <img :src="equipment.image" :alt="equipment.name" class="equipment-image"/>
                        {{ equipment.name }} 
                        <span v-if="equipment.temperature">- {{ equipment.temperature.number }} {{ equipment.temperature.unit }}</span>
                    </li>
                </ul>
            </div>
            <div v-if="step.length">
                <p>Duration: {{ step.length.number }} {{ step.length.unit }}</p>
            </div>
        </div>
    </div>
</template>


<script>
import { mockGetRecipeInstructions, mockGetRecipeDetailsForIngridients } from "../services/recipes.js";

export default {
    data() {
        return {
            instructions: null,
            recipe: null,
            extendedIngredients: {}, // Dictionary to store extended ingredients by id
            servings: 0 // number of servings, to be updated
        };
    },
    async created() {
        try {
            let response;
            
            try {
                response = await mockGetRecipeInstructions(this.$route.params.recipeId);
                
                if (response.status && response.status !== 200) {
                    this.$router.replace("/NotFound");
                    return;
                }

                this.instructions = response.data.instructions[0];

                response = await mockGetRecipeDetailsForIngridients(this.$route.params.recipeId);
                if (response.status && response.status !== 200) {
                    this.$router.replace("/NotFound");
                    return;
                }

                this.recipe = response.data.recipe;
                this.servings = this.recipe.servings;
                
                // Preprocess ingredients
                this.preprocessIngredients();
                
                // Initialize step completion status
                this.initializeStepCompletion();
            } catch (error) {
                console.log("error:", error);
                this.$router.replace("/NotFound");
                return;
            }
        } catch (error) {
            console.log(error);
        }
    },
    methods: {
        doubleServings() {
            if (this.extendedIngredients) {
                // Double all ingredients in extendedIngredients dictionary
                Object.keys(this.extendedIngredients).forEach(id => {
                    this.extendedIngredients[id].amount *= 2;
                });
                this.servings *= 2;
            }
        },
        preprocessIngredients() {
            if (this.instructions && this.instructions.steps && this.recipe && this.recipe.extendedIngredients) {
                // Create dictionary of extended ingredients by id
                this.recipe.extendedIngredients.forEach(ingredient => {
                    this.$set(this.extendedIngredients, ingredient.id, {
                        amount: ingredient.amount,
                        unit: ingredient.unit
                    });
                });
            }
        },
        initializeStepCompletion() {
        // initialize the completed property for each step
        if (this.instructions && this.instructions.steps) {
            this.instructions.steps.forEach(step => {
                // retrieve completion status from local storage
                const completed = localStorage.getItem(`step-${step.number}`);
                this.$set(step, 'completed', completed === 'true');
                });
             }
        },
        updateCompletionStatus(step) {
        // Save the completion status to local storage so as long as user is connected
        // it will save the process. whenever user logs out, local storage clears itself (as defined in logout method)
        localStorage.setItem(`step-${step.number}`, step.completed);
        }
    }
};

</script>

<style lang="scss" scoped>
.container {
    width: 60%;
    margin: auto;
}

.step {
    border-bottom: 1px solid #ccc;
    padding: 15px 0;
}

.step-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.ingredient-image, .equipment-image {
    width: 50px;
    height: 50px;
    margin-right: 10px;
}

button {
    display: block;
    margin: 20px 0;
    padding: 10px 20px;
    background-color: #4CAF50;
    color: white;
    border: none;
    cursor: pointer;
    display: block;
    border-radius: 5px;
    transition: background-color 0.3s ease;
    text-align: center;
    text-decoration: none;
}

button:hover {
    background-color: #45a049;
}

input[type="checkbox"] {
    transform: scale(1.5);
    width: 20px; 
    height: 20px; 
    margin: 10px;
    cursor: pointer;
}

/* Optional: for better appearance on different browsers */
input[type="checkbox"] {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    background-color: #fff;
    border: 2px solid #7777776c;
    border-radius: 3px;
    display: inline-block;
    position: relative;
    cursor: pointer;
}

input[type="checkbox"]:checked {
    background-color: #4CAF50;
    border: 2px solid #4CAF50;
}

input[type="checkbox"]:checked::before {
    content: '✓';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
}
</style>
