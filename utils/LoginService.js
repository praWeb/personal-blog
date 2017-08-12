import React, { Component } from 'react'
import { gql, graphql, compose } from 'react-apollo'
import withData from './../lib/withData'
import AuthService from './AuthService'

const auth = new AuthService()

// utils/AuthService.js
class LoginService extends Component{
  constructor(props) {
    super(props)
    this.state = {
      email: "",
      password: ""
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  login() {
    let token = ""
    let user = ""
    let _this = this
    this.props.mutate({
      variables:{ email: this.state.email, password: this.state.password }
    }).then(function(response){
      token = response.data.signinUser.token
      user = response.data.signinUser.user
      if(user){
        console.log(user)
        auth.login(token, user)
        document.location.pathname="/"
      }
    })
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value })
  }

  handleSubmit(e){
    e.preventDefault()
    this.login()
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
      user {
        email
        id
      }
    }
  }
`
export default withData(compose(
  graphql(signinUser)
)(LoginService));
