# GraphQL - Subscription

Selain Queries dan Mutations, GraphQL juga mendukung operasi lain yang bernama Subsicriptions. Subscriptions ini memungkinkan kita untuk fetching data secara berkala (update). Mereka dapat mempertahankan koneksi aktif ke server graphQL melalui websocket sehingga memungkinkan server untuk mengupdate ke hasil subscription.

Subscription sangat berguna untuk memberi tahu client secara real time terkait perubahan data di back-end. Subscription cocok digunakan ketika menemui kondisi sebagai berikut:

- Ada perubahan kecil atau incremental pada object yang besar.
- Real time update dengan latensi rendah. contohnya pada aplikasi chat

Library yang dapat digunakan dalam subscription ada 2 yaitu subscriptions-transport-ws dan graphql-ws. Untuk kali ini saya membuat subscription dengan library kedua.

### Setup

```jsx
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
```

### Implement

```graphql
const SubscribePassenger = gql`
  subscription MySubscription {
    passenger {
      id
      jenis_kelamin
      nama
      umur
    }
  }
`;
```

```jsx
const {data: response, loading: isLoading, subscribeToMore} = useSubscription(SubscribePassenger);
useEffect(() => {
  subscribeToMore({
    document: SubscribePassenger,
    updateQuery: (prev, {subscriptionData: {response}}) => {
      return console.log(response);
    },
  });
}, []);
```
