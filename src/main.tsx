import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { MotionConfig } from "framer-motion";
// Solo eje de peso (wght), sin cursiva ni eje óptico: es lo único que usamos.
// El navegador solo descarga los subsets de unicode-range que realmente
// necesita para el texto renderizado (ES/EN → subset "latin"/"latin-ext").
import "@fontsource-variable/inter/wght.css";
import "./index.css";
import App from "./App.tsx";
import { LocaleProvider } from "./i18n/LocaleProvider.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <LocaleProvider>
      {/* reducedMotion no se especifica: framer-motion anima siempre por
          defecto (decisión explícita, no hereda prefers-reduced-motion del
          sistema) — coherente con el Canvas 3D, ver useSceneStore.ts. */}
      <MotionConfig>
        <App />
      </MotionConfig>
    </LocaleProvider>
  </StrictMode>,
);
