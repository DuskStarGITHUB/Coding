// Archivo Principal de REACT
// Archivo: main.jsx

// Recursos
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ControllerTest } from "./web/controllers/Controllers.jsx"; //Controladores

// Renderizado
createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <ControllerTest /> */}
  </StrictMode>
);
