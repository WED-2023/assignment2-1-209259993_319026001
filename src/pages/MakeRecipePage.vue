<template>
    <div class="container" v-if="instructions && recipe">
        <h1>{{ recipe.title }}</h1>
        <h4>Servings: {{ servings }}</h4>
        <button @click="doubleServings">Double the Servings</button>
        <div v-for="(step, index) in instructions.steps" :key="index" class="step">
            <div class="step-header">
                <h2>Step {{ index+1 }}</h2>
                <input type="checkbox" v-model="step.completed" @change="updateCompletionStatus(step)" />
            </div>
            <p>{{ step.step }}</p>
            <div v-if="step.ingredients.length > 0">
                <h3>Ingredients:</h3>
                <ul>
                    <li v-for="(ingredient, i) in step.ingredients" :key="i">
                        {{ ingredient.name }}
                        <span v-if="ingredient.id && extendedIngredients[ingredient.id]">
                            - {{ extendedIngredients[ingredient.id].amount }} {{ extendedIngredients[ingredient.id].unit }}
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
import { getInstructions } from '../services/recipes';
export default {
    data() {
        return {
            recipeId : null,
            instructions: {steps: []},
            extendedIngredients: {},
            servings: 0
            };
    },
    props: ['recipe'], 
    async mounted() {
        try {
            // define id and procceed to initializing data
            this.recipeId = this.$route.params.recipeId || this.$route.params.personalRecipeId;
            await this.initializeData();
            await this.preprocessIngredients();
            await this.initializeStepCompletion();
            await this.initializeLocalStorage();
            await this.setLengths();
        } catch (error) {
            console.error("Initialization error:", error);
            this.$router.replace("/NotFound");
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
        async initializeData() {
            try {
                console.log("Initializing data...");
                // check if the recipeId is valid, if so - it's a recipe from API
                if (this.$route.params.recipeId && this.$route.params.recipeId !== "") {
                    console.log("Loading instructions of recipe...");
                    const instructionsResponse = await getInstructions(this.$route.params.recipeId);
                    // Check if the response status is OK
                    if (instructionsResponse.status !== 200 && instructionsResponse.status !== 304) {
                        this.$router.replace("/NotFound");
                        return;
                }
                // Assign the instructions to the component's data
                this.instructions = instructionsResponse.data[0];
                console.log("Instructions:", this.instructions);
                } 
                // if recipeId is not valid, it can be a personal recipe that the user added so check for personalRecipeId
                else if (this.$route.params.personalRecipeId && this.$route.params.personalRecipeId !== "") {
                    this.instructions.steps = this.recipe.instructions;
                } 
                // if neither recipeId nor personalRecipeId is valid, redirect to NotFound
                else {
                    console.log("No valid recipeId or personalRecipeId provided.");
                    this.$router.replace("/NotFound");
                    return;
                }
                this.servings = this.recipe.servings;

            } catch (error) {
                console.error("Error during data initialization:", error);
                throw error;
            }
        },
        async preprocessIngredients() {
            console.log("processing ingredients...")
            if (this.recipe && this.recipe.extendedIngredients) {
                // Create dictionary of extended ingredients by id
                this.recipe.extendedIngredients.forEach(ingredient => {
                    this.$set(this.extendedIngredients, ingredient.id, {
                        amount: ingredient.amount,
                        unit: ingredient.unit
                    });
                });
            }
            console.log("Extended Ingredients:", this.extendedIngredients);
        },
        async initializeStepCompletion() {
            console.log("initializing steps completion progress...")
            if (this.instructions && this.instructions.steps) {
                this.instructions.steps.forEach(step => {
                    // Retrieve completion status from local storage using recipe ID and step number
                    const completed = localStorage.getItem(`${this.recipeId}-step-${step.number}`);
                    this.$set(step, 'completed', completed === 'true');
                });
            }
        },
        async initializeLocalStorage() {
            console.log("initializing local storage...")
            // Initialize the dictionary in local storage if it doesn't exist
            if (!localStorage.getItem('completedSteps')) {
                localStorage.setItem('completedSteps', JSON.stringify({}));
            }
        },
        async setLengths() {
            // Check if 'instructionLengths' exists in local storage
            let lengths = JSON.parse(localStorage.getItem('instructionLengths')) || {};

            // Add current recipe's instructions length
            if (this.instructions && this.instructions.steps) {
                lengths[this.recipeId] = this.instructions.steps.length;
            }

            // Save the updated dictionary back to local storage
            localStorage.setItem('instructionLengths', JSON.stringify(lengths));
        },
        updateCompletionStatus(step) {
            // Save the completion status to local storage using recipe ID and step number
            localStorage.setItem(`${this.recipeId}-step-${step.number}`, step.completed);
            
            // Calculate the number of completed steps for this specific recipe
            const completedStepsCount = this.instructions.steps.filter(step => step.completed).length;
            
            // Update the dictionary in local storage to keep track of completed steps for this recipe
            let completedStepsDict = JSON.parse(localStorage.getItem('completedSteps')) || {};
            completedStepsDict[this.recipeId] = completedStepsCount;
            localStorage.setItem('completedSteps', JSON.stringify(completedStepsDict));
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
