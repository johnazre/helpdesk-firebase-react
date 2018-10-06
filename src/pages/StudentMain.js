import React from 'react'
import AddTicketForm from '../components/student/AddTicketForm'
import { Container, Row, Col } from 'reactstrap'

const StudentMain = (props) => {
  return (
    <Container>
      <Row>
        <Col>
          Student Area
          <AddTicketForm />
        </Col>
      </Row>
    </Container>
  )
}

export default StudentMain