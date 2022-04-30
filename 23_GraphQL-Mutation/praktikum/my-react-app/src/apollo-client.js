import {ApolloClient, InMemoryCache} from "@apollo/client";
import {split, HttpLink} from "@apollo/client";
import {getMainDefinition} from "@apollo/client/utilities";
import {GraphQLWsLink} from "@apollo/client/link/subscriptions";
import {createClient} from "graphql-ws";

const httpLink = new HttpLink({
  uri: "https://passenger-alterra.hasura.app/v1/graphql",
  headers: {
    "x-hasura-admin-secret": "7wZ3sRlz7SBuBHtBCOg6akpswtzjXjEIAnQnVEguyXzQKCRvDKFIa5h6fe4zoyev",
  },
});

const wsLink = new GraphQLWsLink(
  createClient({
    url: "ws://passenger-alterra.hasura.app/v1/graphql",
    connectionParams: {
      headers: {
        "x-hasura-admin-secret": "7wZ3sRlz7SBuBHtBCOg6akpswtzjXjEIAnQnVEguyXzQKCRvDKFIa5h6fe4zoyev",
      },
    },
  })
);

const splitLink = split(
  ({query}) => {
    const definition = getMainDefinition(query);
    return definition.kind === "OperationDefinition" && definition.operation === "subscription";
  },
  wsLink,
  httpLink
);

const client = new ApolloClient({
  link: splitLink,
  cache: new InMemoryCache(),
});

export default client;
