import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { AppContextProvider } from "./context/AppContext";
import { ApplicationContextProvider } from "./context/ApplicationContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <AppContextProvider>
        <ApplicationContextProvider>
          <App />
        </ApplicationContextProvider>
      </AppContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
