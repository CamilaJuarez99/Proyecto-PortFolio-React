import React from "react";
import "../css/aboutme.css";
import { Container, Row, Col, Card } from "react-bootstrap";

const MainAbout = () => {
  const datos = {
    nombre: "Camila",
    apellido: "Juarez",
    imagen: "/imagenPerfil.jpg",
    presentacion:
      "Hola mi nombres es Camila Juarez, actualmente me encuentro estudiando Programacion en la Facultad Regional Tucuman. Estoy en 2do año de la carrera, puedo manejar los siguientes lenguajes de programacion: java , javascript y c#.",
  };

  return (
    <div className="main">
      <Container className="mt-5 mi-container">
        <Row className="justify-content-center">
          <Col md={6} lg={4}>
            <Card className="text-center mi-card">
              <Card.Img variant="top" src={datos.imagen} />
              <Card.Body>
                <Card.Text className="texto">{datos.presentacion}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default MainAbout;
