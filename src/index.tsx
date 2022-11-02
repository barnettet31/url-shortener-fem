import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { HashRouter } from "react-router-dom";

import { UserProvider } from "./services/authentication/auth.context";
import { UrlProvider } from "./services/urls/urls.context";


const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <HashRouter>
      <UserProvider>
        <UrlProvider>
          <App />
        </UrlProvider>
      </UserProvider>
    </HashRouter>
  </React.StrictMode>
);
