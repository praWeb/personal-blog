// ./pages/login.js
import React, { Component } from 'react'
import LoginService from '../utils/LoginService'
import AuthService from '../utils/AuthService'

const auth = new AuthService('http://localhost:3000')

export default class Login extends Component {

  componentDidMount () {
    if (auth.loggedIn()) {
      this.props.url.replaceTo('/about')   // redirect if you're already logged in
    }
  }

  render () {
    return (
      <div>
         Login
        <LoginService />
      </div>
    )
  }
}

// export default withData(Login)
