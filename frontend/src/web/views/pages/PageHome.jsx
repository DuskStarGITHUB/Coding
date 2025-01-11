// Página de Inicio
import React from "react";
import NavBar from "../components/NavBar";

const PageHome = () => {
  return (
    <div>
      <NavBar />
      <main style={{ padding: "1rem" }}>
        <h1>Welcome to the Home Page</h1>
        <p>This page adapts to the selected theme.</p>
      </main>
    </div>
  );
};

export default PageHome;
