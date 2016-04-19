export const GET_USERS = 'GET_USERS'
export const getUsers = () => {
  let users = ['yucong', 'zhouxing', 'leiguang', 'yufanchao']
  return {
    type: GET_USERS,
    users
  }
}

export const ADD_USER = 'ADD_USER'
export const addUser = user => {
  return {
    type: ADD_USER,
    user
  }
}
