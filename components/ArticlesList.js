import { Component } from 'react'


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
            { article.title }
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
