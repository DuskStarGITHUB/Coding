// Este archivo tiene cosas para el testeo de controlador modelo vista
// Archivo: TestingCMV.jsx

//Recursos
import React, { useState } from "react";

//VISTA
const Testing = ({ onTest, result }) => {
  const [type, setType] = useState("log");
  const [message, setMessage] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (onTest) {
      onTest(type, message || "Mensaje predeterminado");
    }
  };
  //Contenido
  return (
    <section>
      <h1>Controlador de Testeo</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Tipo de respuesta:
          <select value={type} onChange={(e) => setType(e.target.value)}>
            <option value="log">Console Log</option>
            <option value="error">Console Error</option>
            <option value="table">Console Table</option>
            <option value="warn">Console Warn</option>
            <option value="alert">Alert</option>
            <option value="document">Document (HTML)</option>
          </select>
        </label>
        <br />
        <label>
          Mensaje:
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Escribe un mensaje"
          />
        </label>
        <br />
        <button type="submit">Enviar</button>
      </form>
      {type === "document" && result && (
        <div>
          <h2>Resultado:</h2>
          {React.isValidElement(result) ? result : <p>{result}</p>}
        </div>
      )}
    </section>
  );
};

export default Testing;
