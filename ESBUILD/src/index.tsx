import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./components/App.js";
import React from "react";

const container = document.getElementById("app");

if (!container) {
  throw new Error("Failed to find the root element");
}

const root = createRoot(container);

root.render(
  <StrictMode>
    <App message="Optimized Store with React 19" />
  </StrictMode>
);