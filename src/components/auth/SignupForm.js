import React, { Component } from 'react'
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap'
import firebase from '../../firebase'

class SignupForm extends Component {
  state = {
    username: '',
    password: ''
  }
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  handleSubmit = e => {
    e.preventDefault();
    const auth = firebase.auth()
    auth.createUserWithEmailAndPassword(this.state.username, this.state.email)
  }
  render () {
    return (
      <Form onSubmit={this.handleSubmit}>
        <FormGroup>
          <Label for="type">Type</Label>
          <Input type="select" name="type" id="type" onChange={this.handleChange} value={this.state.type}>
            <option value="">Please select an option...</option>
            <option value="1">Conceptual Question</option>
            <option value="2">Code Issue</option>
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

export default SignupForm