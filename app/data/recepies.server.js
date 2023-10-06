import { graphqlClient, userGraphqlClient } from "../lib/graphql-client";
import { GetDefaultRecepies, GetRecepiesByTag, GetRecepieById, GetRecepieByName, GetUserFavouriteRecepies } from "../queries/recepies";
import { AddUserFavouriteRecepie } from "../mututations/recepies";

export async function getDefaultRecepies() {
  try {
    const data = await graphqlClient.request(GetDefaultRecepies);
    return data.recipesByTag.edges;
  } catch (error) {
    throw new Error('Failed to get recepies.');
  }
}

export async function getRecepiesByTag(tag) {
  try {
    const data = await graphqlClient.request(GetRecepiesByTag, {
      tag: tag
    });
    return data.recipesByTag.edges;
  } catch (error) {
    throw new Error('Failed to get recepies.');
  }
}

export async function getRecepieById(id, user='') {
  try {
    const data = await userGraphqlClient(user).request(GetRecepieById, {
      id: id
    });
    return data.recipe;
  } catch (error) {
    throw new Error('Failed to get recepie.');
  }
}

export async function getRecepieByName(name) {
  try {
    const data = await graphqlClient.request(GetRecepieByName, {
      query: name
    });
    return data.searchRecipeByNameOrIngredient.onPlan;
  } catch (error) {
    throw new Error('Failed to get recepies.');
  }
}

export async function getUserFavouriteRecepies(user) {
  try {
    const data = await userGraphqlClient(user).request(GetUserFavouriteRecepies);
    return data.myFavoriteRecipes.edges;
  } catch (error) {
    throw new Error('Failed to get recepies.');
  }
}

export async function addUserFavouriteRecepie(user, recipeId) {
  try {
    const data = await userGraphqlClient(user).request(AddUserFavouriteRecepie, {
      recipeId
    });
    return data.userFavoriteRecipe.success;
  } catch (error) {
    throw new Error('Failed to add recepie.');
  }
}