import { gql } from "graphql-request";

export const GetDefaultRecepies = gql`{
    recipesByTag(tag: "main course") {
      edges {
        node {
          id
          name
          mainImage
        }
      }
    }
  }     
`;