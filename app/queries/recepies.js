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

export const GetRecepiesByTag = gql`
  query GetRecepiesByTag($tag: String!) {
    recipesByTag(tag: $tag) {
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

export const GetRecepieById = gql`
  query GetRecepieById($id: ID!) {
    recipe(id: $id) {
      databaseId
      totalTime
      name
      rating
      numberOfServings
      ingredientLines
      cuisines
      mainImage
      isUserFavorite
      instructions
      nutritionalInfo {
        calories
        protein
        carbs
        fat
        sugar
        fiber
        cholesterol
        sodium
        calcium
        iron
      }
    }
  }      
`;

export const GetRecepieByName = gql`
  query GetRecepieByName($query: String!) {
    searchRecipeByNameOrIngredient(query: $query) {
      onPlan {
        id
        name
        mainImage
      }
    }
  }      
`;

export const GetUserFavouriteRecepies = gql`{
    myFavoriteRecipes {
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