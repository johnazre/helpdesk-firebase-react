import React, { Component } from 'react'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap'
import firebase from '../../firebase'

class AddTicketForm extends Component {
  state = {
    studentId: 1,
    type: '',
    description: ''
  }
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  handleSubmit = e => {
    e.preventDefault();
    const ticketsRef = firebase.database().ref('tickets');
    const ticket = {
      description: this.state.description,
      status: 'Unadressed',
      priority: 2,
      type: this.state.type,
      studentId: '-LN6qP_3iYSU7yH5X1j4'
    }
    ticketsRef.push(ticket);
    
    this.setState({
      description: '',
      type: ''
    });
  }
  render () {
    return (
      <Form onSubmit={this.handleSubmit}>
        <FormGroup>
          <Label for="type">Type</Label>
          <Input type="select" name="type" id="type" onChange={this.handleChange} value={this.state.type}>
            <option value="">Please select an option...</option>
            <option value="conceptual-question">Conceptual Question</option>
            <option value="code-issue">Code Issue</option>
          </Input>
        </FormGroup>
        <FormGroup>
          <Label for="description">Description</Label>
          <Input type="textarea" name="description" id="description" onChange={this.handleChange} value={this.state.description} />
        </FormGroup>
        <Button type="submit">Submit</Button>
      </Form>
    )
  }
}

export default AddTicketForm