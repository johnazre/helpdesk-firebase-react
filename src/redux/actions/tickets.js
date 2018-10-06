import firebase from '../../firebase'

export const ADD_TICKET = 'ADD_TICKET'
export const COMPLETE_TICKET = 'COMPLETE_TICKET'
export const HANDLE_TICKET = 'HANDLE_TICKET'

export const addTicket = (newTicket) => dispatch =>
  const ticketsRef = firebase.database().ref('tickets')

  const ticket = {
    description: newTicket.description,
    status: 'Unadressed',
    priority: 2,
    type: newticket.type,
    studentId: '-LN6qP_3iYSU7yH5X1j4'
  }
  ticketsRef.push(ticket);
}