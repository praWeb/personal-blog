import React, { Component } from 'react'
import { gql, graphql, gqlQuery } from 'react-apollo'
import withData from '../lib/withData'

// Components
import Layout from '../components/Layout.js'
import ArticleData from '../components/ArticleData'

class Article extends Component{

  constructor(props,article) {
    super(props)
  }

  render() {
    console.log(this.props)
    if(!this.props.data){
      return(
        <section>
          Loading...
        </section>
      )
    }else{
      return(
        <section>
          <Layout>
            <ArticleData article={ this.props.data.Article } />
          </Layout>  
        </section>
      )
    }

  }
}

const article = gql `
  query getArticles($id: ID!) {
    Article(id: $id) {
      id
      title
      text
      author {
        email
      }
    }
  }
`

export default withData(graphql(article, {
  options: (props) => ({
    variables:{
      id: props.url.query.id
    }
  })
})(Article))
