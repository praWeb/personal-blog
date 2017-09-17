import { gql, graphql } from 'react-apollo'
import React, { Component } from 'react'
import AuthService from '../utils/AuthService'
import FlashMessage from './ui/FlashMessage'
import { Router } from './../config/routes'

const auth = new AuthService()

class CreatePost extends Component {

  constructor(props) {
    super(props)
    this.state={
      "title": "",
      "text": "",
      message: ""
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value })
  }

  handleSubmit(event) {
    event.preventDefault();
    let _this = this
    this.props.mutate({
      variables:{ title: this.state.title, text: this.state.text, authorId: auth.getProfile().id }
    }).then(function(response){
      if(response.data.createArticle){
        _this.setState({
          message: "Article created successfully!",
          title: "",
          text: ""
        })
        document.location.pathname = `/article/${response.data.createArticle.id}`
      }else{
        _this.setState({
          message: "Article creation failed!"
        })
      }
    })
  }

  render(){
    return (
      <section>
        <FlashMessage message={ this.state.message } />
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
  mutation createArticle($title: String!, $text: String!, $authorId: ID!) {
    createArticle(title: $title, text: $text, authorId: $authorId) {
      id
      text
      createdAt
    }
  }
`

export default graphql(createPost)(CreatePost)
