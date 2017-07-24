import { Component } from 'react'
import { gql, graphql } from 'react-apollo'

export default class ArticlesList extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    let articlesList = this.props.articlesList || []

    console.log(articlesList)

    return(
      <ul>
      {
        articlesList.map( article => <li key={article.id}> { article.name } </li>)
      }
      </ul>
    )
  }
}
