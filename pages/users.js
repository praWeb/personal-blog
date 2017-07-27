import { Component } from 'react'
import { gql, graphql } from 'react-apollo'

// Components
import UsersList from '../components/UsersList.js'

class Users extends Component {
  render () {
    return (
      <section>
        <h1> Registered Users </h1>
        <UsersList usersList={this.props.data.allUsers} />
      </section>
    )
  }
}

const UsersQuery = gql`
  query allUsers {
    allUsers {
      id
      email
    }
  }
`

export default graphql(UsersQuery)(Users)
