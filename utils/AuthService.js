import { gql, graphql } from 'react-apollo'
import withData from './../lib/withData'

// utils/AuthService.js
export default class AuthService {
  constructor() {
    this.fetch = this.fetch.bind(this)
    this.login = this.login.bind(this)
    this.loggedIn = this.loggedIn.bind(this)
    this.getProfile = this.getProfile.bind(this)
  }

  login(token, user) {
    // Get a token
    this.setToken(token)
    this.setProfile(user)
  }

  loggedIn(){
    // Checks if there is a saved token and it's still valid
    const token = this.getToken()
     return !!token
    // return !!token && !isTokenExpired(token) // handwaiving here
  }

  setProfile(profile){
    // Saves profile data to localStorage
    localStorage.setItem('profile', JSON.stringify(profile))
  }

  getProfile(){
    // Retrieves the profile data from localStorage
    const profile = localStorage.getItem('profile')
    return profile ? JSON.parse(localStorage.profile) : {}
  }

  setToken(idToken){
    // Saves user token to localStorage
    localStorage.setItem('id_token', idToken)
  }

  getToken(){
    // Retrieves the user token from localStorage
    return localStorage.getItem('id_token')
  }

  logout(){
    // Clear user token and profile data from localStorage
    localStorage.removeItem('id_token');
    localStorage.removeItem('profile');
  }

  _checkStatus(response) {
    // raises an error in case response status is not a success
    if (response.status >= 200 && response.status < 300) {
      return response
    } else {
      var error = new Error(response.statusText)
      error.response = response
      throw error
    }
  }

  fetch(email, password, options){
    // performs api calls sending the required authentication headers
    const headers = {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }

    if (this.loggedIn()){
      headers['Authorization'] = 'Bearer ' + this.getToken()
    }

    return this.props.mutate({
      variables:{ email: email, password: password }
    }).then(response => response.json())
  }

}
