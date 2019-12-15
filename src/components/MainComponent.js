// @flow
import React, { Component } from 'react'
import { getUsers, getPosts, getComments } from '../services/Api'
import UsersComponent from './users-component/UsersComponent'
import PostComponent from './posts-component/PostComponent'
import CommentsComponent from './comments-component/CommentsComponent'

type response<T> = {
  status: number;
  data: Array<T>;
}

type Props = {}

type State = {
  users: Array<Object>;
  posts: Array<Object>;
  comments: Array<Object>;
}

class MainComponent extends Component<Props, State> {
  constructor (props: Object) {
    super(props)
    this.state = {
      users: [],
      posts: [],
      comments: [],
    }
  }

  getUsersEventHandler = (e: SyntheticEvent<HTMLButtonElement>) => {
    e.preventDefault()
    getUsers()
      .then(res => {
        const result: response<UsersComponent> = {
          status: res.status,
          data: res.data
        }

        this.setState({
          users: result.data
        })
      })
  }

  getPostsEventHandler = (userId: number) => {
    getPosts(userId)
      .then(res => {
        const result: response<PostComponent> = {
          status: res.status,
          data: res.data
        }

        this.setState({
          posts: result.data
        })
      })
  }

  getCommentsEventHandler = (postId: number) => {
    getComments(postId)
      .then(res => {
        const result: response<CommentsComponent> = {
          status: res.status,
          data: res.data
        }

        this.setState({
          comments: result.data
        })
      })
  }

  render () {
    return (
      <div className="container">
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <a href="#"
           className="btn btn-primary"
           onClick={this.getUsersEventHandler}>
          Get Users
        </a>

        <div className="row">
          <div className="col-lg-4">
            <UsersComponent users={this.state.users}
                            eventHandler={this.getPostsEventHandler}/>
          </div>
          <div className="col-lg-4">
            <PostComponent posts={this.state.posts}
                           eventHandler={this.getCommentsEventHandler}/>
          </div>
          <div className="col-lg-4">
            <CommentsComponent comments={this.state.comments}/>
          </div>
        </div>
      </div>
    )
  }
}

export default MainComponent
