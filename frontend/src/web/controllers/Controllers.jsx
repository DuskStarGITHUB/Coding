// Estos son controladores que se encargan de filtrar y trabajar contenido en base a los modelos
// Archivo: Controllers.jsx

// Recursos
import React, { useState, useEffect } from "react";
import Testing from "../../test/TestingCMV"; //Controlador Modelo Vista Testeo
import Responses from "../models/Responses"; //Modelo de metodos de respuestas rapidas
import "../views/global/themes/themes.css";
import "../views/global/themes/global.css";
import NavBar from "../views/components/NavBar";

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
  const theme = "default";
  useEffect(() => {
    document.documentElement.className = theme;
  }, [theme]);
  const renderPage = () => {
    return Responses.getPageModel(currentPage);
  };
  return (
    <>
      <NavBar currentPage={currentPage} onPageChange={setCurrentPage} />
      {renderPage()}
    </>
  );
};