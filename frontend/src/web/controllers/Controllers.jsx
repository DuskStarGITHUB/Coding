// Estos son controladores que se encargan de filtrar y trabajar contenido en base a los modelos
// Archivo: Controllers.jsx

// Recursos
import React, { useState, useEffect } from "react";
import Testing from "../../test/TestingCMV"; //Controlador Modelo Vista Testeo
import Responses from "../models/Responses"; //Modelo de metodos de respuestas rapidas
import NavBar from "../views/components/NavBar";
import Footer from "../views/components/Footer";
import AsideNav from "../views/components/AsideNav";
// Lista de controladores

export const ControllerTest = () => {
  // Controlador para testear respuestas
  const [result, setResult] = useState(null);
  const handleResponseTest = (type, message) => {
    const response = Responses.TestModel(type, message);
    setResult(type === "document" ? response : null);
  };
  return <Testing onTest={handleResponseTest} result={result} />;
};

export const ControllerViews = () => {
  const [currentPage, setCurrentPage] = useState("inicio");
  const [theme, setTheme] = useState("default");
  const [isAsideOpen, setIsAsideOpen] = useState(false);
  useEffect(() => {
    Responses.applyTheme(theme);
  }, [theme]);
  useEffect(() => {
    if (isAsideOpen) {
      Responses.getSavedContents();
    }
  }, [isAsideOpen]);
  return (
    <>
      <NavBar currentPage={currentPage} onPageChange={setCurrentPage} />
      <div className={`container-content ${isAsideOpen ? "open" : "closed"}`}>
        {Responses.getPageModel(currentPage)}
        <Footer />
      </div>
      <AsideNav isOpen={isAsideOpen} onToggle={setIsAsideOpen} />
    </>
  );
};
