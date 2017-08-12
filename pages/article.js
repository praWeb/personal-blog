import React, { Component } from 'react'
import { gql, graphql } from 'react-apollo'
import withData from '../lib/withData'

import ArticleData from '../components/ArticleData'

class Article extends Component{

  constructor(props) {
    super(props)
  }

  componentDidMount() {
    console.log(this.props)
    console.log(this.props.url.query.id)
    // const country = this.gqlQuery({query: article, variables: {id: this.props.url.query.id}).get()
    // console.log(country)
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
          <ArticleData article={ this.props.data.article } />
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
