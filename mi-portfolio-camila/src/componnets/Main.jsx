import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Card } from 'react-bootstrap';
import '../main.css';


const Main = ({ datos }) => {
  return (
    <div className='main'>
      <Container className="mt-5 mi-container" >
      <Row className="justify-content-center">
        <Col md={6} lg={4}>
          <Card className="text-center mi-card">
            <Card.Img variant="top" src={datos.imagen} />
            <Card.Body>
              <Card.Text className='texto'>{datos.presentacion}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
    </div>
  );
};

export default Main;
