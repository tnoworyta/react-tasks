import React, { Component } from 'react'

import UserNew from './New'
import UserDetails from './Details'

export default class UserList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      users: [
        { name: 'Example name', surname: 'Example surname', id: new Date().getTime().toString() },
      ],
    }
  }

  handleAddUserClick = user => {
    this.setState(state => ({
      users: state.users.concat({
        name: user.name,
        surname: user.surname,
        id: new Date().getTime().toString(),
      }),
    }))
  }

  render() {
    const { users } = this.state
    return (
      <div>
        <UserNew handleAddUserClick={this.handleAddUserClick} />
        <h3>User list</h3>
        <ul>
          {users.map(user => (
            <li key={user.id}>
              <UserDetails user={user} />
            </li>
          ))}
        </ul>
      </div>
    )
  }
}
