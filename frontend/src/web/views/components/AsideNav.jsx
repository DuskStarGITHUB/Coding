// Componente Aside Navegacion
// AsideNav.jsx

// Recursos
import React, { useRef } from "react";
import "./assets/css/asidenav.css";
import menuIcon from "./assets/icons/menu-bar.png";
import cerrarIcon from "./assets/icons/cerrar.png";

// Componente
const AsideNav = ({ isOpen, onToggle }) => {
  const asideRef = useRef(null);
  return (
    <>
      {!isOpen && (
        <div className="container-aside-outside">
          <button
            className="button-drop-asidenav"
            onClick={() => onToggle(true)}
          >
            <img src={menuIcon} alt="Menu" className="icon-os-as" />
          </button>
        </div>
      )}
      <div
        className={`container-aside-inside ${isOpen ? "open" : "closed"}`}
        ref={asideRef}
      >
        <aside className="asidenav">
          <button className="close-btn" onClick={() => onToggle(false)}>
            <img src={cerrarIcon} alt="Menu" className="icon-os-as" />
          </button>
          <div className="asidecontent">
            <ul id="favorites-list"></ul>
          </div>
        </aside>
      </div>
    </>
  );
};

export default AsideNav;
