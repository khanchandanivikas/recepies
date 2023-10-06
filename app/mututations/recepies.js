import { gql } from "graphql-request";

export const AddUserFavouriteRecepie = gql`
    mutation AddUserFavouriteRecepie($recipeId: String!) {
        userFavoriteRecipe(
            recipeId: $recipeId
        ) {
            success
            isUserFavorite
        }
    }        
`;