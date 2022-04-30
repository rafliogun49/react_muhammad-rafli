import {ApolloClient, InMemoryCache} from "@apollo/client";

const client = new ApolloClient({
  uri: "https://passenger-alterra.hasura.app/v1/graphql",
  cache: new InMemoryCache(),
  headers: {
    "x-hasura-admin-secret": "7wZ3sRlz7SBuBHtBCOg6akpswtzjXjEIAnQnVEguyXzQKCRvDKFIa5h6fe4zoyev",
  },
});

export default client;
