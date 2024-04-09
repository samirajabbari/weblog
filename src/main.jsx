import React from "react";
import ReactDOM from "react-dom/client";

import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import { ThemeProvider } from "@emotion/react";
import theme from "./mui/theme.js";
import App from "./App.jsx";
//------------files
import "./styles/index.css";
import "./styles/fonts.css";
import { BrowserRouter } from "react-router-dom";

const uriApi = import.meta.env.VITE_APP_GRAPHCMS_URI;
const client = new ApolloClient({
  uri: uriApi,
  cache: new InMemoryCache(),
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <ApolloProvider client={client}>
    <React.StrictMode>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ThemeProvider>
    </React.StrictMode>
  </ApolloProvider>
);
