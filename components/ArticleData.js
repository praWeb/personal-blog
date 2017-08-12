import { Component } from 'react'


export default class ArticleData extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    console.log(this)
    let article = this.props.article || ""

    if(article) {
      return(
        <div> OOPS! Sorry no articles are found </div>
      )
    }

    return(
      <article>
        { article.author.email }
        <div>
          { article.title }
          <p>
            { article.text }
          </p>
        </div>
      </article>
    )
  }
}
