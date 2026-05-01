import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router";
import { HelmetProvider } from "@vuer-ai/react-helmet-async";
import './assets/styles/global.scss'
import './assets/styles/components.scss'
import './assets/styles/ui.scss'

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </HelmetProvider>
  </StrictMode>,
);
