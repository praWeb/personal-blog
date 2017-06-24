import { Component } from 'react'
import axios from 'axios'

// Components
import Layout from '../components/Layout.js'

export default class Page extends Component {

  static async getInitialProps(context) {
    let query = context.query
    const response = await axios.get(`https://api.tvmaze.com/shows/${query.id}`)
    return { show: response.data }
  }

  render() {
    let show = this.props.show
    return (
      <section>
      	<Layout>
      	  <div>
            <h1> { show.name } </h1>
            <p> { show.summary } </p>
          </div>
  	    </Layout>
      </section>
    )
  }
}
