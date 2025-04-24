import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Card } from 'react-bootstrap';

const Main = ({ datos }) => {
  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={6} lg={4}>
          <Card className="text-center shadow">
            <Card.Img variant="top" src={datos.imagen} />
            <Card.Body>
              <Card.Title>{datos.nombre} {datos.apellido}</Card.Title>
              <Card.Text>{datos.presentacion}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Main;
