import { GraphQLClient } from 'graphql-request';

export const graphqlClient = new GraphQLClient(process.env.REMIX_APP_BACKEND_URL, {
        headers: {
            'Authorization': process.env.REMIX_APP_BACKEND_TOKEN
        },
    }
);

export const userGraphqlClient = ((user) => {
    const graphqlClient = new GraphQLClient(process.env.REMIX_APP_BACKEND_URL, {
        headers: {
            'Authorization': process.env.REMIX_APP_BACKEND_TOKEN,
            "SG-User": user ? user : ""
        }
    })
    return graphqlClient;
});