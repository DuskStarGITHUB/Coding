// Este modelo da respuestas en base a métodos rapidos
// Archivo: Responses.jsx

import React from "react";

// Modelo
const Responses = {
  // Lista de metodos
  TestModel: (type, message = "MODEL ==> ModelJOIN") => {
    switch (type) {
      case "log":
        console.log(message);
        return null;
      case "error":
        console.error(message);
        return null;
      case "table":
        console.table([message]);
        return null;
      case "warn":
        console.warn(message);
        return null;
      case "alert":
        alert(message);
        return null;
      case "document":
        return <div>{message}</div>;
      default:
        console.log("Tipo de consola no reconocido:", type);
        return "Error: Tipo de respuesta no reconocido.";
    }
  },
};

export default Responses;
