import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { MotionConfig } from "framer-motion";
import "./index.css";
import App from "./App.tsx";
import { LocaleProvider } from "./i18n/LocaleProvider.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <LocaleProvider>
      <MotionConfig reducedMotion="user">
        <App />
      </MotionConfig>
    </LocaleProvider>
  </StrictMode>,
);
