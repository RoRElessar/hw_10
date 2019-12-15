// @flow
import React, { Component } from 'react'

type Props = {
  users: Array<Object>;
  eventHandler: Function;
};

class UsersComponent extends Component<Props> {

  render () {
    return (
      <ul id="all-users" className="list-group">
        {
          this.props.users.map(user => {
            return (
              <li className="list-group-item"
                  key={user.id}
                  onClick={() => {this.props.eventHandler(user.id)}}>
                {user.name}
              </li>
            )
          })
        }
      </ul>
    )
  }
}

export default UsersComponent
