// Componente pie de pagina
// Footer.jsx

// Recursos
import React from "react";
import "./assets/css/footer.css";

// Componente
const Footer = () => {
  return (
    <footer className="footer">
      <p>
        © {new Date().getFullYear()} <a className="rainbow-text">CODING</a> -
        Todos los derechos reservados.
      </p>
    </footer>
  );
};

export default Footer;
