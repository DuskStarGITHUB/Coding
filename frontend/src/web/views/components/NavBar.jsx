// Componente barra de navegación
// NavBar.jsx

// Recursos
import React from "react";
import "./assets/css/navbar.css";

// Componente
const NavBar = ({ currentPage, onPageChange }) => {
  const handleClick = (section) => {
    onPageChange(section);
  };
  return (
    <nav className="navbar">
      <button
        className={`nav-item ${currentPage === "contenidos" ? "active" : ""}`}
        onClick={() => handleClick("contenidos")}
      >
        Contenidos
      </button>
      <button
        className={`nav-item ${currentPage === "inicio" ? "active" : ""}`}
        onClick={() => handleClick("inicio")}
      >
        Inicio
      </button>
      <button
        className={`nav-item ${currentPage === "contacto" ? "active" : ""}`}
        onClick={() => handleClick("contacto")}
      >
        Contacto
      </button>
    </nav>
  );
};

export default NavBar;
