import { Component } from 'react'

// Components

export default class UsersList extends Component {

  render() {
    let usersList = this.props.usersList || []

    return (
      <ul>
        {
          usersList.map( user => <li key={ user.id }> { user.email } </li>)
        }
      </ul>

    )
  }
}
