import React, { Component } from 'react'
import { gql, graphql } from 'react-apollo'
import withData from '../lib/withData'

class Article extends Component{

  constructor(props) {
    super(props)
  }

  componentDidMount() {
    console.log(this.props)
    console.log(this.props.url.query.id)
  }

  render() {
    return(
      <section>

      </section>
    )
  }
}

const article = gql `
  query getArticles($id: ID!) {
    allArticles(id: $id) {
      id
      title
      text
      author {
        email
      }
    }
  }
`

export default withData(graphql(article)(Article))
