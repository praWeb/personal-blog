import React, { Component } from 'react'
import axios from 'axios'

// Next Components
import Head from 'next/head'
import Link from 'next/link'

// Components
import Layout from './../components/Layout'

export default class Index extends Component {

  constructor(props) {
   super(props)
  }

  static async getInitialProps() {
    this.loading = true
    const response = await axios.get('https://api.tvmaze.com/search/shows?q=batman')
    this.loading = false
    return { shows: response.data }
  }

  render() {
    let shows = this.props.shows || []

    let shows_list = <ul>
       { shows.map((show) => (
         <li key={ show.show.id }>
           <Link as={`/p/${ show.show.id }`} href={`/post?id=${ show.show.id }`}>
             <a> { show.show.name } </a>
           </Link>
         </li>
       ))}
       <style jsx>{`
         li {
           list-style: none;
           margin: 5px 0;
         }
       `}</style>
    </ul>

    return(
      <div>
         <Head>
            <title> NextJS Project </title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
         </Head>
         <div>
          <Layout>
            <h1> Batman TV Shows </h1>
            <article>
              <h1> Articles </h1>
           	  { this.loading ? " Loading......" : shows_list }
            </article>
            <style jsx>{`
              h1, a {
                font-family: "Arial";
              }

              ul {
                padding: 0;
              }

              a {
                text-decoration: none;
                color: blue;
              }

              a:hover {
                opacity: 0.6;
              }
            `}</style>
          </Layout>
         </div>
      </div>
    )
   }

}
