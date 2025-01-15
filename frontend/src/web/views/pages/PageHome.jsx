// Página de inicio
import React from "react";
import "./assets/pagehome.css";

const PageHome = () => {
  return (
    <main className="pi-main-container">
      <header className="pi-header">
        <div className="pi-header-content">
          <h1 className="pi-page-title">
            <span className="rainbow-text">Coding</span> - Documentación y
            Componentes
          </h1>
          <p className="pi-intro-text">
            "Tu guía práctica para el desarrollo web y la reutilización
            eficiente."
          </p>
        </div>
      </header>
      {/* Introducción */}
      <section className="pi-section-introduction">
        <article className="pi-intro-article">
          <h2 className="pi-section-title">Bienvenido a Coding</h2>
          <p className="pi-section-description">
            Una WEB diseñada para desarrolladores, con una amplia gama de
            contenido sobre codigo de diversos lenguajes, Aqui puedes conseguir
            informacion y componentes de manera gratuita e sencilla para tus
            proyectos.
          </p>
        </article>
      </section>
      {/* Características */}
      <section className="pi-section-features">
        <article className="pi-features-article">
          <h2 className="pi-section-title">Características Principales</h2>
          <div className="pi-feature-cards">
            <div className="pi-card">
              <h3>📘 Documentación</h3>
              <p>Syntaxis y ejemplos prácticos para cada tecnología.</p>
            </div>
            <div className="pi-card">
              <h3>💻 Componentes</h3>
              <p>Reutiliza y personaliza bloques de código fácilmente.</p>
            </div>
            <div className="pi-card">
              <h3>🚀 Optimización</h3>
              <p>Consejos para acelerar tu flujo de trabajo y proyectos.</p>
            </div>
          </div>
        </article>
      </section>
      {/* Tecnologías */}
      <section className="pi-section-technologies">
        <article className="pi-technologies-article">
          <h2 className="pi-section-title">
            Tecnologías Disponibles Actualmente
          </h2>
          <table className="pi-tech-table">
            <thead>
              <tr>
                <th>Tecnología</th>
                <th>Uso</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>HTML</td>
                <td>Estructura básica de las páginas web.</td>
              </tr>
              <tr>
                <td>CSS</td>
                <td>Estilos visuales y diseño responsivo.</td>
              </tr>
              <tr>
                <td>JavaScript</td>
                <td>Interactividad y funcionalidad dinámica.</td>
              </tr>
              <tr>
                <td>React</td>
                <td>Construcción de interfaces de usuario modernas.</td>
              </tr>
            </tbody>
          </table>
        </article>
      </section>
      {/* Bloques de Código */}
      <section className="pi-section-code">
        <article className="pi-code-article">
          <h2 className="pi-section-title">WEB LOCAL</h2>
          <p>
            Guarda esta web localmente mediante instalacion por git, para
            trabajar sin conexion.
          </p>
          <pre className="pi-code-block">
            <code>{`
    git clone https://github.com/DuskStarGITHUB/Coding
    cd Coding
            `}</code>
          </pre>
        </article>
      </section>
      {/* Acerca de la web */}
      <section className="pi-section-about">
        <article className="pi-about-article">
          <h2 className="pi-section-title">Funcionalidad de la WEB</h2>
          <h3 className="pi-section-subtitle">Guardar contenido a favoritos</h3>
          <p>
            Puedes guardar cierto contenido para dejarlo mas accesible cuando
            entras a la web, de es amanera aumentaras tu productividad.
          </p>
          <h3 className="pi-section-subtitle">Prueba un fragmento de codigo</h3>
          <p>
            Puedes ejecutar html, css, js y react (js) de maner aislada con una
            vista en vivo para tu pequeño componente.
          </p>
          <h3 className="pi-section-subtitle">
            Consigue componentes para tu proyecto
          </h3>
          <p>
            Puedes conseguir componentes para tu proyecto de manera gratuita y
            altamente <span className="rainbow-text">personalizables</span>
          </p>
        </article>
        <article className="pi-about-article">
          <h2 className="pi-section-title">Acerca de la WEB</h2>
          <h3 className="pi-section-subtitle">LocalStorage</h3>
          <p>
            Implementamos la funcionalidad de la web en un estado local, para su
            correcto funcionamiento porfavor no borrar los datos de esta web o
            perdera su progreso.
          </p>
          <h3 className="pi-section-subtitle">Cookies</h3>
          <p>
            No implementamos cookies en la web ya que concideramos dichas como
            inecesarias para este proyecto.
          </p>
          <h3 className="pi-section-subtitle">Sesiones</h3>
          <p>
            No implementamos sesiones en la web ya que concideramos dichas como
            inecesarias
          </p>
        </article>
        <article className="pi-create-article">
          <h2 className="pi-section-title">Quieres Contribuir?</h2>
          <p>
            Si deseas ayudar con aportación de código/documentación o
            funcionalidad puedes hacerlo en la plataforma de GitHub.
          </p>
          <button
            className="btn-repository"
            onClick={() =>
              window.open("https://github.com/DuskStarGITHUB/Coding", "_blank")
            }
          >
            Ir al repositorio
          </button>
        </article>
      </section>
    </main>
  );
};

export default PageHome;
