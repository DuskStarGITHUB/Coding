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
    const savedContents =
      JSON.parse(localStorage.getItem("contentsSaved")) || [];
    const favoritesList = document.getElementById("favorites-list");
    favoritesList.innerHTML = "";
    if (savedContents.length === 0) {
      const noFavoritesMessage = document.createElement("li");
      noFavoritesMessage.textContent =
        "No has agregado documentacion en tus favoritos.";
      favoritesList.appendChild(noFavoritesMessage);
      return;
    }
    savedContents.forEach((content) => {
      const contentData = Responses.getContentLabel(content);
      if (contentData) {
        const listItem = document.createElement("li");
        const link = document.createElement("a");
        link.href = `#${contentData}`;
        link.textContent = contentData;
        listItem.appendChild(link);
        favoritesList.appendChild(listItem);
      }
    });
  },
  getContentLabel: (content) => {
    const contents = {
      html: "HTML",
      css: "CSS",
      js: "JavaScript",
      react: "React",
      node: "Node.js",
    };
    return contents[content] || null;
  },
};

export default Responses;
