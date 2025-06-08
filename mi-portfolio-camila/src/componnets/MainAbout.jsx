import React from "react";
import "../css/aboutme.css";
import { Container, Row, Col, Card } from "react-bootstrap";

const MainAbout = () => {
  const datos = {
    nombre: "Camila",
    apellido: "Juarez",
    imagen: "/imagenPerfil.jpg",
    presentacion:
      "Hola mi nombres es Camila Juarez, actualmente me encuentro estudiando Programacion en la Facultad Regional Tucuman. Estoy en 2do año de la carrera, tengo muchas ganas de aprender con la experiencia."
  };

  return (
    <div className="main-about">
      <br />
      <br />
      <br />
        <Row className="align-items-center justify-content-center">
          <Col md={4} className="image-column text-center">
            <img src={datos.imagen} alt="Perfil" className="imagen-perfil" />
          </Col>
          <Col md={6} className="text-column">
            <div className="linea-decorativa"></div>
            <h2 className="titulo-about">Sobre mí</h2>
            <p className="texto-about">{datos.presentacion}</p>
            <div className="linea-decorativa"></div>
          </Col>
        </Row>
        <br />
        <br />
    </div>
  );
};

export default MainAbout;
