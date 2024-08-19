import { axios, shared_data } from '../main'; 

// function to check if recipes is in favorites of user
export async function isInFav(recipeId) {
  try {
    const response = await axios.get(
      `${shared_data.server_domain}/users/${shared_data.username}/isFavorite/${recipeId}`,
      {
        withCredentials: true
      });
      return response.data;
  } catch (error) {
    console.log(error);
    return {};
  }
}

// function to check if recipe was viewed by user
export async function isInViewed(recipeId) {
  try {
        // Log the username to verify it's correctly set
        console.log("Username:", shared_data.username);

        // Log the cookies to verify they are being sent
        const cookies = document.cookie;
        console.log("Cookies:", cookies);
    const response = await axios.get(
      `${shared_data.server_domain}/users/${shared_data.username}/isViewed/${recipeId}`,
      {
        withCredentials: true
      });
      return response.data;
 } catch (error) {
    console.log(error);
    return {};
  }
}

// function that adds a recipe to user's favorite recipes
export async function addToFavorites(recipeId) {
  try {
    console.log("addToFav called");
    const response = await axios.post(
      shared_data.server_domain + "/users/" + shared_data.username + "/favorites",
      { recipeId: recipeId }
    );
    if (response.data === true) {
      console.log("successfully added to favorites");
      return true;
    } else {
      console.error("Failed to add to favorites:", response.message);
      return false;
    } 
  } catch (error) {
    console.log(error);
    return false;
  } 
}