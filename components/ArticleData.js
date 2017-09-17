import { Component } from 'react'
import { gql, graphql } from 'react-apollo'

export default class ArticleData extends Component {

  constructor(props) {
    super(props)
    this.state={
      title: "",
      test: "",
      email: ""
    }
  }

  componentDidMount(){
    console.log(this.props)
    this.setState({
      email: this.props.article.author.email,
      title: this.props.article.title,
      text: this.props.article.text
    })
  }

  render() {
    let article = this.props.article || ""

    if(!article) {
      return(
        <div> OOPS! Sorry no articles are found </div>
      )
    }

    return(
      <article>
        { this.state.email }
        <div>
          { this.state.title }
          <p>
            { this.state.text }
          </p>
        </div>
      </article>
    )
  }
}
