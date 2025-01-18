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
    return pages[page] || <div>Error 404: Página no encontrada</div>;
  },
  applyTheme: (themeName) => {
    const htmlElement = document.documentElement;
    htmlElement.className = themeName;
  },
  getSavedContents: () => {
    const savedContents = JSON.parse(localStorage.getItem("contentsSaved"));
    const favoritesList = document.getElementById("favorites-list");
    favoritesList.innerHTML = "";
    if (!savedContents) {
      const errorMessage = document.createElement("h4");
      errorMessage.textContent =
        "Tu almacenamiento local está dañado o vacío. No se encontraron favoritos.";
      errorMessage.classList.add("favorite-item");
      favoritesList.appendChild(errorMessage);
      return;
    }
    if (savedContents.length === 0) {
      const noFavoritesMessage = document.createElement("h4");
      noFavoritesMessage.textContent = "No tienes favoritos.";
      favoritesList.appendChild(noFavoritesMessage);
      return;
    }
    savedContents.forEach((id) => {
      const contentData = Responses.getContentLabelById(id);
      if (contentData) {
        const listItem = document.createElement("li");
        listItem.classList.add("favorite-item");
        const link = document.createElement("a");
        link.href = `/content/${id}`;
        link.textContent = contentData;
        listItem.appendChild(link);
        favoritesList.appendChild(listItem);
      } else {
        console.warn(`ID no encontrado: ${id}`);
      }
    });
  },
  getContentLabelById: (id) => {
    const contents = {
      "html-etiquetas": "Etiquetas HTML",
      "html-codigos-base": "Códigos base",
      "html-metadatos": "Metadatos",
      "css-importaciones": "Importaciones CSS",
      "html-buenas-practicas": "Buenas prácticas HTML",
      "html-importaciones": "Importaciones HTML",
      "css-selectores": "Selectores CSS",
      "css-propiedad": "Propiedad CSS",
      "css-valor": "Valor CSS",
      "css-buenas-practicas": "Buenas prácticas CSS",
      "css-reglas": "Reglas CSS",
      "css-comentarios": "Comentarios CSS",
      "js-palabras-reservadas": "Palabras reservadas JS",
      "js-comandos": "Comandos JS",
      "js-funciones": "Funciones JS",
      "js-programacion-modular": "Programación Modular JS",
      "js-dom": "DOM JS",
      "js-cmv": "CMV JS",
      "js-buenas-practicas": "Buenas prácticas JS",
      "react-vite": "Vite React",
      "react-componentes": "Componentes React",
      "react-estructura-de-archivos": "Estructura de Archivos React",
      "react-buenas-practicas": "Buenas prácticas React",
      "react-codigo-base": "Código Base React",
    };
    return contents[id] || `ID no encontrado: ${id}`;
  },
};

export default Responses;
