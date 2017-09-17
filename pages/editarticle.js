import React, { Component } from 'react'
import { gql, graphql, gqlQuery } from 'react-apollo'
import withData from '../lib/withData'

import UpdateArticle from '../components/UpdateArticle'

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
          <UpdateArticle article={ this.props.data.Article } />
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
