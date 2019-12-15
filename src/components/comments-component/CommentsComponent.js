// @flow
import React, { Component } from 'react'

type Props = {
  comments: Array<Object>;
}

class CommentsComponent extends Component<Props> {
  render () {
    return (
      <ul id="post-comments" className="list-group">
        {this.props.comments.map(comment => {
          return (
            <li className="list-group-item"
                key={comment.id}>
              {comment.body}
            </li>
          )
        })}
      </ul>
    )
  }
}

export default CommentsComponent
