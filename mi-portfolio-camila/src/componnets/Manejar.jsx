import React from "react";
import { FaJava, FaJs, FaHtml5, FaCss3Alt, FaReact } from "react-icons/fa";
import "../css/manejar.css"

const tecnologias = [
  { nombre: "Java", icono: <FaJava /> },
  { nombre: "JavaScript", icono: <FaJs /> },
  { nombre: "React", icono: <FaReact /> },
  { nombre: "HTML", icono: <FaHtml5 /> },
  { nombre: "CSS", icono: <FaCss3Alt /> },
];

const Manejar = () => {
  return (
    <>
    <h2 className="titulo-tecnologias text-center">Tecnologías que manejo</h2>
    <section className="tecnologias-wrapper">
      <div className="tecnologias-lista">
        {tecnologias.map((tech) => (
          <div key={tech.nombre} className="tecnologia-item">
            <div className="icono">{tech.icono}</div>
            <span>{tech.nombre}</span>
          </div>
        ))}
      </div>
      <br />
      <br />
      <br />
    </section>
    </>
  );
};

export default Manejar;
