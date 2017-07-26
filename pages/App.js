import React, { Component } from 'react'
import axios from 'axios'

// Next Components
import Head from 'next/head'
import Link from 'next/link'

// Components
import Layout from './../components/Layout'

export default class App extends Component {

  constructor(props) {
   super(props)
  }

  render() {
    return(
      <div>
         <Head>
            <title> NextJS Project </title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
         </Head>
         <div>
          <Layout>
            { this.props.children }
          </Layout>
         </div>
      </div>
    )
  }

}
