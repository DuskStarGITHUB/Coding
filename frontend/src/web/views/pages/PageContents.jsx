// Página de contenidos
import React from "react";
import "./assets/PageContents.css";

const PageContents = () => {
  const contents = [
    { type: "html", title: "HTML", description: "Documentación sobre HTML" },
    { type: "css", title: "CSS", description: "Documentación sobre CSS" },
    { type: "js", title: "JavaScript", description: "Documentación sobre JS" },
    { type: "react", title: "React", description: "Documentación sobre React" },
    {
      type: "node",
      title: "Node.js",
      description: "Documentación sobre Node.js",
    },
  ];
  const addFavorite = (type) => {
    const savedContents =
      JSON.parse(localStorage.getItem("contentsSaved")) || [];
    if (!savedContents.includes(type)) {
      savedContents.push(type);
      localStorage.setItem("contentsSaved", JSON.stringify(savedContents));
    }
  };
  return (
    <main>
      <div className="content-cards">
        {contents.map((content) => (
          <div className="content-card" key={content.type}>
            <h3>
              {content.title} [<span>{content.type}</span>]
            </h3>
            <p>{content.description}</p>
            <button onClick={() => addFavorite(content.type)}>
              Add to Favorites
            </button>
          </div>
        ))}
      </div>
    </main>
  );
};

export default PageContents;
