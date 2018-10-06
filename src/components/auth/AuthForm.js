import React, { Component } from 'react'
import { Button, Form, FormGroup, Label, Input, Container, Card, CardBody } from 'reactstrap'
import firebase from '../../firebase'
import { withRouter } from 'react-router-dom'

class AuthForm extends Component {
  state = {
    email: '',
    password: ''
  }
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  userLogin = () => {
    // const auth = firebase.auth()
    // auth.signInWithEmailAndPassword(this.state.email, this.state.password)
    this.props.history.push('/student')
  }
  userSignup = () => {
    // const auth = firebase.auth()
    // auth.createUserWithEmailAndPassword(this.state.email, this.state.password)
    this.props.history.push('/instructor')
  }
  render () {
    return (
      <Container>
        <Card style={{marginTop: 40}}>
          <CardBody>
            <Form onSubmit={this.handleSubmit}>
              <FormGroup>
                <Label for="email">Email</Label>
                <Input type="email" name="email" id="email" onChange={this.handleChange} value={this.state.email} />
              </FormGroup>
              <FormGroup>
                <Label for="password">Password</Label>
                <Input type="password" name="password" id="password" onChange={this.handleChange} value={this.state.password} />
              </FormGroup>
              <Button color="primary" onClick={this.userLogin}>Log In</Button>
              <Button color="secondary" onClick={this.userSignup}>Sign Up</Button>
            </Form>
          </CardBody>
        </Card>
      </Container>
    )
  }
}

export default withRouter(AuthForm)