import React, { Component } from 'react'
import Link from 'next/link'

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
        <Link href="/articles">
      	  <a style={ linkStyle }> Articles </a>
      	</Link>
      </div>
    )

  }

}
