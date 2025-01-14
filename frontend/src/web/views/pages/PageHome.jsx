// Página de inicio
import React from "react";
import "./assets/pagehome.css";

const PageHome = () => {
  return (
    <main className="pi-main-container">
      <header className="pi-header">
        <div className="pi-header-content">
          <h1 className="pi-page-title">
            Coding - Documentación y Componentes
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
    git clone https://github.com/tu_usuario/Coding.git
    cd Coding
            `}</code>
          </pre>
        </article>
      </section>
      {/* Contacto */}
      <section className="pi-section-contact">
        <article className="pi-contact-article">
          <h2 className="pi-section-title">Contacto</h2>
          <p className="pi-section-description">
            Si tienes alguna pregunta o sugerencia, no dudes en contactarnos:
          </p>
          <address className="pi-contact-info">
            📧 Email: duskstar@coding.com <br />
            🌐 Web: www.coding.com
          </address>
        </article>
      </section>
    </main>
  );
};

export default PageHome;
