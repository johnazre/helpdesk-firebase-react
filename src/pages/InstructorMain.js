import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import TicketList from '../components/instructor/TicketList';

const InstructorMain = (props) => {
  return (
    <Container>
      <Row>
        <Col>
          Instructor Area
          <TicketList />
        </Col>
      </Row>
    </Container>
  )
}

export default InstructorMain