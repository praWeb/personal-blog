import { Component } from 'react'
import { gql, graphql } from 'react-apollo'
import withData from '../lib/withData'

// Components
import Layout from '../components/Layout.js'
import ArticlesList from '../components/ArticlesList'

class Articles extends Component {
  render() {
    return (
      <section>
        <Layout>
          <ArticlesList articlesList={ this.props.data.allArticles }/>
        </Layout>
      </section>
    )
  }
}

const articles = gql `
  query getArticles {
    allArticles {
      id
      title
      text
      author {
        email
      }
    }
  }
`

export default withData(graphql(articles)(Articles))
