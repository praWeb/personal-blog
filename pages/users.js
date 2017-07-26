import { Component } from 'react'
import { gql, graphql } from 'react-apollo'

// Components
import UsersList from '../components/UsersList.js'

function Users({ data: { loading, allUsers } }) {
  if(loading){
    return (
      <div> .... Loading..... </div>
    )
  }else {
    return (
        <section>
          <h1> Registered Users </h1>
          <UsersList usersList = {allUsers} />
        </section>
      )
  }
}

export default graphql(
  gql`
    query allUsers {
      allUsers {
        id
        email
      }
    }
  `
)(Users)
