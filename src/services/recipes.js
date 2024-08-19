// fetching information of a recipe
export async function getRecipe(recipeId) {
  try {
    const response = await this.axios.get(
      this.$root.store.server_domain + "/recipes/get/" + recipeId
    );
    return response;
  } catch (error) {
    console.log(error);
    return {};
  }
}

export async function getInstructions(recipeId) {
  try {
    const response = await this.axios.get(
      this.$root.store.server_domain + "/recipes/instructions/" + recipeId
    );
    return response;
  } catch (error) {
    console.log(error);
    return {};
  }
}
