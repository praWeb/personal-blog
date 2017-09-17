import React, { Component } from 'react'

export default class FlashMessage extends Component {
  constructor(props) {
    super(props)
  }

  render(){
    return(
      <section>
        { this.props.message }
      </section>
    )
  }
}
