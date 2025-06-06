import React from 'react'
import { Form , Row, Col , Button} from 'react-bootstrap'

const MainContacts = () => {
  return (
    <div>
      <Form class="w-50 p-6 display: flex;">
      <Form.Group className="mb-3" controlId="forEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formAsunto">
        <Form.Label>Asunto</Form.Label>
        <Form.Control type="text" placeholder="Asunto" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formMensaje">
        <Form.Label>Mensaje</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>

        <Form.Group as={Row} className="mb-5">
        <Col sm={{ span: 10, offset: 2 }}>
          <Button type="submit">Send</Button>
        </Col>
      </Form.Group>
    </Form>
    </div>
  )
}

export default MainContacts
