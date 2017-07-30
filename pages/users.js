import { Component } from 'react'
import { gql, graphql } from 'react-apollo'
import withData from '../lib/withData'

// Components
import Layout from './../components/Layout'
import UsersList from '../components/UsersList.js'

class Users extends Component {
  render () {
    return (
      <section>
        <Layout>
          <h1> Registered Users </h1>
          <UsersList usersList={this.props.data.allUsers} />
        </Layout>
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

export default withData(graphql(UsersQuery)(Users))
