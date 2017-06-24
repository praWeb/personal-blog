import React, { Component } from 'react'

// Components
import Header from './Header'

export default class Layout extends Component {
  
  render() {
    
    let layoutStyle= {
      margin: 20,
      padding: 20,
      border: '1px solid #DDD'
    }  
    
    return(
      <div className={ layoutStyle }>
        <Header/>
        { this.props.children }
      </div>
    )

  }
} 
