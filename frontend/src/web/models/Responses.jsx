// Este modelo da respuestas en base a métodos rapidos
// Archivo: Responses.jsx

//Recursos
import React from "react";
import PageHome from "../views/pages/PageHome";
import PageContents from "../views/pages/PageContents";
import PageContact from "../views/pages/PageContact";

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
  getPageModel: (page) => {
    const pages = {
      inicio: <PageHome />,
      contenidos: <PageContents />,
      contacto: <PageContact />,
    };
    return pages[page] || <div>Error: Página no encontrada</div>;
  },
};

export default Responses;
