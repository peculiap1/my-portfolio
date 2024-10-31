import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ApolloProvider } from "@apollo/client";
import App from "./App.jsx";

/**
 * Apollo
 */
import client from "./apollo/client.js";

/**
 * CSS Link
 */
import "./index.css";
import "lenis/dist/lenis.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </StrictMode>
);
