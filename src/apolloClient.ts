import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://lotto-dusky-one.vercel.app/api",
  cache: new InMemoryCache(),
});
export default client;

// URI que apunta al al deployment de Vercel, cambiar cuando se termine el desarrollo
// https://lotto-dusky-one.vercel.app/api
// http://localhost:4500/api
