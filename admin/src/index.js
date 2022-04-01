import React from "react";
import * as ReactDOMClient from "react-dom/client";
import App from "./App";
import "./sass/index.scss";
import { DarkModeProvider } from "./context/darkModeContext";

const container = document.getElementById("root");
const root = ReactDOMClient.createRoot(container);

root.render(
  <React.StrictMode>
    <DarkModeProvider>
      <App />
    </DarkModeProvider>
  </React.StrictMode>
);
