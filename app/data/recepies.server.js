import { graphqlClient } from "../lib/graphql-client";
import { GetDefaultRecepies, GetRecepiesByTag, GetRecepieById, GetRecepieByName } from "../queries/recepies";

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

export async function getRecepieById(id) {
  try {
    const data = await graphqlClient.request(GetRecepieById, {
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