// ./pages/login.js
import React, { Component } from 'react'
import AuthService from '../utils/AuthService'
const auth = new AuthService('http://localhost:3000')

export default class UserSession extends Component {

  constructor(props) {
    super(props)
    this.state={
      loggedIn: false
    }
    this.handleLogout = this.handleLogout.bind(this)
  }
  componentDidMount () {
    if (auth.loggedIn()) {
      this.setState({ loggedIn: true })
    }
  }

  handleLogout(e) {
    e.preventDefault()
    auth.logout()
    this.setState({ loggedIn: false })
  }

  handleLogin(e){
    e.preventDefault()
    console.log("here...")
    document.location.pathname="/login"
  }

  render () {
    if(this.state.loggedIn){
      return (
        <div>
          <form onSubmit={ this.handleLogout }>
            <input type="submit" value="Logout"/>
          </form>
        </div>
      )
    } else{
      return (
        <div>
          <form onSubmit={ this.handleLogin }>
            <input type="submit" value="Login"/>
          </form>
        </div>
      )
    }
  }
}
