import { Component } from 'react'
import {Link} from '../config/routes'

export default class ArticlesList extends Component {

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
          { article.author.email }
          <div>
            <Link as={`/article/${article.id}`} route={`/article/id=${article.id}`}>
              { article.title }
            </Link>
            <p>
              { article.text }
            </p>
          </div>
        </li>)
      }
      </ul>
    )
  }
}
