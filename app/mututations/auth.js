import { gql } from "graphql-request";

export const CreateNewUser = gql`
    mutation CreateNewUser($name: String! $email: String! $password: String!) {
        createUser(
            name: $name
            email: $email
            password: $password
        ) {
            success
            message
            user {
                id
                databaseId
            }
        }
    }        
`;