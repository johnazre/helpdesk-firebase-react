import React, { Component } from 'react'
import firebase from '../../firebase'
import { Table } from 'reactstrap'
import TicketItem from './TicketItem';

class TicketList extends Component {
  state = {
    tickets: []
  }
  componentDidMount() {
    const ticketsRef = firebase.database().ref('tickets');
    const usersRef = firebase.database().ref('users');
    
    // Get the tickets
    ticketsRef.on('value', snapshot => {
      let tickets  = snapshot.val()
      
      // Create the new 
      let newState = []
      for(let key in tickets) {
        let studentId = tickets[key].studentId

        // Query the users to find the student
        usersRef.orderByKey().equalTo(studentId).on('value', snapshot => {
          let queryResult = snapshot.val()
          let student = queryResult[studentId]
          let { title, description, status, priority } = tickets[key]
          newState.push({
            id: key,
            title,
            description,
            status,
            priority,
            student
          })
          this.setState({ tickets: newState })
        });
        
      }
    });
  }
  render () {
    let listOfTickets = this.state.tickets.map(ticket => 
      <TicketItem key={ticket.id} ticket={ticket} />
    )
    return (
      <Table bordered>
        <thead>
          <tr>
            <th>Name</th>
            <th>Issue Description</th>
            <th>Status</th>
            <th>Priority</th>
            <th>Manage</th>
          </tr>
        </thead>
        <tbody>
          {listOfTickets}
        </tbody>
      </Table>
    )
  }
}

export default TicketList