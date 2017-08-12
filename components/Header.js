import React, { Component } from 'react'
import {Link} from '../config/routes'
import UserSession from './UserSession'

export default class Header extends Component {

  render() {

    let linkStyle = {
      maginRight: 15,
      fontSize: 20
    }

    return (
      <div>
      	<Link route="/">
      	  <a style={ linkStyle }> Home </a>
      	</Link>
        <Link route="/about">
      	  <a style={ linkStyle }> About </a>
      	</Link>
        <Link route="/articles">
      	  <a style={ linkStyle }> Articles </a>
      	</Link>
        <Link route="/createArticle">
          <a style={ linkStyle }> Create Article </a>
        </Link>
        <Link route="/users">
      	  <a style={ linkStyle }> Users </a>
      	</Link>
        <Link route="/createUser">
          <a style={ linkStyle }> Create User </a>
        </Link>

        <UserSession />

      </div>
    )

  }

}
