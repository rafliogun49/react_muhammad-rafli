import {ApolloClient, InMemoryCache} from "@apollo/client";

const client = new ApolloClient({
  uri: "https://login-alterra.hasura.app/v1/graphql",
  headers: {
    "x-hasura-admin-secret": "BvLNeIXMFE8FqkSaxw1Q22RS0YWyGrjjhdc2VOec8NTzl0nxL5tkZkonVubOilKt",
  },
  cache: new InMemoryCache(),
});

export default client;
