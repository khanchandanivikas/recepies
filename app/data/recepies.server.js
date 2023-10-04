import { graphqlClient } from "../lib/graphql-client";
import { GetDefaultRecepies, GetRecepiesByTag, GetRecepieById } from "../queries/recepies";

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
    throw new Error('Failed to get recepies.');
  }
}