// Estos son controladores que se encargan de filtrar y trabajar contenido en base a los modelos
// Archivo: Controllers.jsx

// Recursos
import React, { useState } from "react";
import Testing from "../../test/TestingCMV"; //Controlador Modelo Vista Testeo
import Responses from "../models/Responses"; //Modelo de metodos de respuestas rapidas

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