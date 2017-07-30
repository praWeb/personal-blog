import React, { Component } from 'react'
import withData from '../lib/withData'

// Components
import Layout from './../components/Layout'
import CreatePost from '../components/CreatePost'

class CreateArticle extends Component {

  render() {

    return(
      <div>
        <Layout>
           <p> New Article </p>
           <CreatePost />
        </Layout>
      </div>
    )

  }

}

export default withData(CreateArticle)
