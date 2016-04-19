import { combineReducers } from 'redux'
import { GET_USERS, ADD_USER } from '../actions'

const users = (state = [], action) => {
  switch (action.type) {
    case GET_USERS:
      return [...action.users]
    case ADD_USER:
      return [...state, action.user]
    default:
      return state
  }
}

export default combineReducers({ users })
