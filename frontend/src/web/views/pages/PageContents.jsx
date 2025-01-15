// Página de contenidos
import React from "react";
import "./assets/PageContents.css";
import contents from "../components/ContentsPage";

const PageContents = () => {
  const addFavorite = (id) => {
    const savedContents =
      JSON.parse(localStorage.getItem("contentsSaved")) || [];
    if (!savedContents.includes(id)) {
      savedContents.push(id);
      localStorage.setItem("contentsSaved", JSON.stringify(savedContents));
    }
  };

  return (
    <main>
      <div className="content-cards">
        {contents.map((content) => (
          <div
            className="content-card"
            key={`${content.type}-${content.title}`}
          >
            <h3>{content.title}</h3>
            <span>[{content.type}]</span>
            <span>[{content.fc}]</span>
            <p>{content.description}</p>
            <button onClick={() => addFavorite(content.id)}>
              Añadir a favoritos
            </button>
          </div>
        ))}
      </div>
    </main>
  );
};

export default PageContents;
