// Archivo Principal de REACT
// Archivo: main.jsx

// Recursos
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
  ControllerTest,
  ControllerViews,
} from "./web/controllers/Controllers.jsx"; //Controladores
import "./web/views/global/themes/global.css";
import "./web/views/global/themes/themes.css";
import "./web/views/global/animations/rainbow.css";

// Renderizado
createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <ControllerTest /> */}
    <ControllerViews />
  </StrictMode>
);
