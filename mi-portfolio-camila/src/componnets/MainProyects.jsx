import React, { useState, useEffect } from "react";
import axios from "axios";
import { Card } from "react-bootstrap";
import "../css/proyectos.css";

const MainProyects = () => {
  const [datos, setDatos] = useState([]);

  const getDatos = async () => {
    try {
      const response = await axios.get("http://localhost:3001/proyectos");
      setDatos(response.data);
    } catch (error) {
      console.error("Error al obtener los datos", error);
    }
  };

  useEffect(() => {
    getDatos();
  }, []);

  return (
    <>
    <br />
    <br />
    <h2 className="titulo-proyectos text-center">MIS PROYECTOS :</h2>
    <div className="card-grid">
      {datos.map((dato) => (
        <div key={dato.nombre} className="project-wrapper">
          <h3 className="project-title">{dato.nombre}</h3>

          <div
            className="project-card"
            style={{
              backgroundImage: `url(${dato.imagen})`,
            }}
          >
            <div className="card-overlay">
              <p>{dato.descripcion}</p>
              {dato.github ? (
                <a href={dato.github} target="_blank" rel="noopener noreferrer">
                  Ver en GitHub
                </a>
              ) : (
                <span>GitHub: próximamente</span>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
    <br />
    <br />
    <br />
    <br />
    <br />
    </>
  );
};

export default MainProyects;
