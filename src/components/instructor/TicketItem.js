import React from 'react'
import { Button } from 'reactstrap'

const TicketItem = ({ticket}) => {
  console.log('ticket in item', ticket)
  return (
    <tr>
      <td>{ticket.student.name}</td>
      <td>{ticket.description}</td>
      <td>{ticket.status}</td>
      <td>{ticket.priority}</td>
      <td>
        <Button color="success" size="sm">Resolve</Button>
        {/* <Button color="warning">Escalate</Button> */}
      </td>
    </tr>
  )
}

export default TicketItem