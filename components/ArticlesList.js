import { Component } from 'react'
import {Link} from '../config/routes'
import { gql, graphql } from 'react-apollo'
import withData from '../lib/withData'


class ArticlesList extends Component {

  constructor(){
    super()
    this.handleDelete = this.handleDelete.bind(this)
  }

  handleDelete(e) {
    e.preventDefault()

    this.props.mutate({
      variables: { id: e.target.elements[0].id }
    })
  }

  render() {
    let articlesList = this.props.articlesList || []

    if(articlesList.length < 1) {
      return(
        <div> No Articles Published so far... </div>
      )
    }

    return(
      <ul>
      {
        articlesList.map( article => <li key={article.id}>
          <div>
            <author> { article.author.email } </author>
            <form onSubmit={ this.handleDelete }>
              <input type="submit" id={ article.id } value="Delete"/>
            </form>
          </div>
          <div>
            <Link route="article" params={{id: article.id}}>
              { article.title }
            </Link>
          </div>
        </li>)
      }
      </ul>
    )
  }
}

const deleteArticle = gql`
  mutation deleteArticle($id: ID!){
    deleteArticle(id: $id){
      id
    }
  }
`

export default withData(graphql(deleteArticle)(ArticlesList))
