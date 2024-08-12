import ReactDOM from "react-dom/client";
import App from "./App.tsx";

// styles
import "./global.css";

// Apollo Client
import { ApolloProvider } from "@apollo/client";
import client from "./apolloClient";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);
