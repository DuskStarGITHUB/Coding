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
  applyTheme: (theme) => {
    document.documentElement.className = theme;
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
      "html-eti": "Etiquetas HTML",
      "html-cb": "Códigos base",
      "html-meta": "Metadatos",
      "html-imports": "Importaciones",
      "html-bp": "Buenas prácticas",
      "css-imports": "Importaciones CSS",
      "css-select": "Selectores CSS",
      "css-property": "Propiedad CSS",
      "css-value": "Valor CSS",
      "css-comments": "Comentarios CSS",
      "css-rules": "Reglas CSS",
      "css-bp": "Buenas prácticas CSS",
      "js-reserved": "Palabras reservadas JS",
      "js-commands": "Comandos JS",
      "js-functions": "Funciones JS",
      "js-cmv": "CMV JS",
      "js-dom": "DOM JS",
      "js-modular": "Programación Modular JS",
      "js-bp": "Buenas prácticas JS",
      "react-vite": "Vite React",
      "react-components": "Componentes React",
      "react-cb": "Código Base React",
      "react-bp": "Buenas prácticas React",
      "react-structure": "Estructura de Archivos React",
    };
    const contentLabel = contents[id];
    if (!contentLabel) {
      console.warn(`Contenido no encontrado para ID: ${id}`);
    }
    return contentLabel || `ID no encontrado: ${id}`;
  },
};

export default Responses;
