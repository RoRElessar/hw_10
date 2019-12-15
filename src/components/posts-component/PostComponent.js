// @flow
import React, { Component } from 'react'

type Props = {
  posts: Array<Object>;
  eventHandler: Function
}

class PostComponent extends Component<Props> {
  render () {
    return (
      <ul className="list-group">
        {this.props.posts.map(post => {
          return(
            <li className="list-group-item"
                key={post.id}
                onClick={() => {this.props.eventHandler(post.id)}}>
              {post.title}
            </li>
          )
        })}
      </ul>
    )
  }
}

export default PostComponent
