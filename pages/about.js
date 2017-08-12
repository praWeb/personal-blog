import React, { Component } from 'react'
import withAuth from '../lib/withAuth'

// Components
import Layout from './../components/Layout'

class About extends Component {

  render() {
    console.log(this.props)
    const user = this.props.auth.getProfile()
    return(
      <div>
        <Layout>
          <h1> {user.id} </h1>
           <p> Hello, Welcome to NextJs </p>
        </Layout>
      </div>
    )

  }

}

export default withAuth(About)
