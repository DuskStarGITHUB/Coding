// Componente de casilla de texto para aplciar un tema de pagina

// Recursos
import React, { useState } from "react";
import "./assets/css/ThemeCase.css";

// Componente
const ThemeCase = ({ onThemeChange }) => {
  const [themeInput, setThemeInput] = useState("");
  const handleInputChange = (event) => {
    setThemeInput(event.target.value);
  };
  const handleKeyDown = (event) => {
    if (event.key === "Enter" && themeInput.trim() !== "") {
      onThemeChange(themeInput.trim());
      setThemeInput("");
    }
  };
  return (
    <input
      type="text"
      placeholder="Escribe un tema"
      value={themeInput}
      onChange={handleInputChange}
      onKeyDown={handleKeyDown}
      className="input-theme"
    />
  );
};

export default ThemeCase;
