import withData from '../lib/withData'
import React, { Component } from 'react'

// Components
import Layout from './../components/Layout'
import CreateUserComponent from '../components/CreateUser'

class CreateUser extends Component {
  render() {
    return (
      <section>
        <Layout>
          <CreateUserComponent />
        </Layout>  
      </section>
    )
  }
}

export default withData(CreateUser)
