import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://lotto-dusky-one.vercel.app/api",
  cache: new InMemoryCache(),
});
export default client;
