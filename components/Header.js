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
      	<Link href="/">
      	  <a style={ linkStyle }> Home </a>
      	</Link>
        <Link href="/about">
      	  <a style={ linkStyle }> About </a>
      	</Link>
        <Link route="article">
      	  <a style={ linkStyle }> Articles </a>
      	</Link>
        <Link href="/createArticle">
          <a style={ linkStyle }> Create Article </a>
        </Link>
        <Link href="/users">
      	  <a style={ linkStyle }> Users </a>
      	</Link>
        <Link href="/createUser">
          <a style={ linkStyle }> Create User </a>
        </Link>

        <UserSession />

      </div>
    )

  }

}
