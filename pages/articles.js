import React, { Component } from 'react'

// Components
import Layout from './../components/Layout'
import ArticlesList from '../components/ArticlesList'

export default class Articles extends Component {

  render() {

    return(
      <div>
        <Layout>
           <p> Articles List </p>
           <ArticlesList />
        </Layout>
      </div>
    )

  }

}
