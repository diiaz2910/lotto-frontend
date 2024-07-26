import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "http://localhost:4500/playground",
  cache: new InMemoryCache(),
});
export default client;
