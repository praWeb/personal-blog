import React, { Component } from 'react'
import { gql, graphql } from 'react-apollo'
import withData from './../lib/withData'

class Login extends Component {

  constructor(props) {
    super(props)
    this.state = {
      email: "",
      password: ""
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleSubmit(event) {
    event.preventDefault()
    console.log(this.props)
    this.props.mutate({
      variables:{ email: this.state.email, password: this.state.password }
    }).then(function(data){
      console.log(data)
    })
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value })
  }

  render() {
    return (
      <section>
        <form onSubmit={ this.handleSubmit }>
          <input type="email" name="email" placeholder="Your email address" onChange={ this.handleChange }/>
          <input type="password" name="password" placeholder="password" onChange={ this.handleChange } />
          <input type="submit" />
        </form>
      </section>
    )
  }

}

const signinUser = gql`
  mutation signinUser($email: String!, $password: String!) {
    signinUser(email: { email: $email, password: $password } ) {
      token
    }
  }
`

export default withData(graphql(signinUser)(Login))
