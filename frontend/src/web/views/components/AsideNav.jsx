// Componente Aside Navegacion
// AsideNav.jsx

// Recursos
import React, { useRef, useEffect } from "react";
import "./assets/css/asidenav.css";
import menuIcon from "./assets/icons/menu-bar.png";

// Componente
const AsideNav = ({ isOpen, onToggle }) => {
  const asideRef = useRef(null);
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (
        isOpen &&
        asideRef.current &&
        !asideRef.current.contains(event.target)
      ) {
        onToggle(false);
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, [isOpen, onToggle]);
  return (
    <>
      <div className="container-aside-outside">
        <button
          className="button-drop-asidenav"
          onClick={() => onToggle(!isOpen)}
        >
          <img src={menuIcon} alt="Menu" className="icon-os-as" />
        </button>
      </div>
      <div
        className={`container-aside-inside ${isOpen ? "open" : "closed"}`}
        ref={asideRef}
      >
        <aside className="asidenav">
          <h3>Menú Lateral</h3>
        </aside>
      </div>
    </>
  );
};

export default AsideNav;
