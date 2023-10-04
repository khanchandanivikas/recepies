import { graphqlClient } from "../lib/graphql-client";
import { GetDefaultRecepies } from "../queries/recepies";

export async function getDefaultRecepies() {
  try {
    const data = await graphqlClient.request(GetDefaultRecepies);
    return data.recipesByTag.edges;
  } catch (error) {
    throw new Error('Failed to get recepies.');
  }
}