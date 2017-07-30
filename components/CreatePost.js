import { gql, graphql } from 'react-apollo'
import React, { Component } from 'react'

class CreatePost extends Component {

  constructor(props) {
    super(props)
    this.state={
      "title": "",
      "text": ""
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value })
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.mutate({
      variables:{ title: this.state.title, text: this.state.text }
    })
  }

  render(){
    return (
      <section>
        <form onSubmit={ this.handleSubmit }>
          <input type="text" placeholder="Title" name="title" onChange={ this.handleChange }/>
          <textarea rows="4" cols="20" placeholder="article content" name="text" onChange={ this.handleChange }/>
          <input type="submit" />
        </form>
      </section>
    )
  }

}

const createPost = gql`
  mutation createArticle($title: String!, $text: String!, $authorId: String) {
    createArticle(title: $title, text: $text, authorId: "cj5lksni7a55j0123s3pzqfhi") {
      id
      text
      createdAt
    }
  }
`

export default graphql(createPost)(CreatePost)
