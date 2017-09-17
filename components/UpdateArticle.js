import { Component } from 'react'
import { gql, graphql } from 'react-apollo'

class UpdateArticle extends Component {

  constructor(props) {
    super(props)
    this.state={
      title: "",
      test: "",
      email: ""
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  componentDidMount(){
    console.log(this.props)
    this.setState({
      email: this.props.article.author.email,
      title: this.props.article.title,
      text: this.props.article.text
    })
  }
  handleSubmit(e) {
    e.preventDefault()
    this.props.mutate({
      variables: { title: this.state.title, text: this.state.text, id: this.props.article.id }
    })
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value })
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
        <form onSubmit={ this.handleSubmit }>
          <div>
            <input type="text" value={ this.state.title } name="title" />
            <p>
              <textarea rows="4" cols="20" placeholder="article content" name="text" value={ this.state.text } onChange={ this.handleChange }/>
            </p>
            <input type="submit" value="Edit Article" />
          </div>
        </form>
      </article>
    )
  }
}

const editArticle = gql`
  mutation editArticle($title: String!, $text: String!, $id: ID!) {
    updateArticle(title: $title, text: $text, id: $id) {
      id
      text
      createdAt
    }
  }
`
export default graphql(editArticle)(UpdateArticle)
