// @flow
import axios from 'axios'

type response<T> = {
  status: number;
  data: Array<T>;
}

const endpoints: Object = {
  getAllUsers: 'https://jsonplaceholder.typicode.com/users',
  getUserPosts: 'https://jsonplaceholder.typicode.com/posts?userId=',
  getPostComments: 'https://jsonplaceholder.typicode.com/comments?postId=',
}

function getUsers () {
  return axios.get(endpoints.getAllUsers)
}

function getPosts (userId: number) {
  return axios.get(endpoints.getUserPosts + userId)
}

function getComments (postId: number) {
  return axios.get(endpoints.getPostComments + postId)
}

export { getUsers, getPosts, getComments }
