export const GET_USERS = 'GET_USERS'
export const getUsers = () => {
  let users = [
    { name: '隐木', avatar: 'http://yucong.oss-cn-shanghai.aliyuncs.com/yinmu.png?Expires=1461234936&OSSAccessKeyId=VL1Aa61bj8CkYSMR&Signature=eqTxqliAa9/6yI704H8ZksvegNs%3D' },
    { name: '泠妹', avatar: 'http://yucong.oss-cn-shanghai.aliyuncs.com/ling.png?Expires=1461234897&OSSAccessKeyId=VL1Aa61bj8CkYSMR&Signature=MVcztnDlHGl0Fu9tV04QXIsgPEY%3D' },
    { name: '龙三', avatar: 'http://yucong.oss-cn-shanghai.aliyuncs.com/longsan.png?Expires=1461234970&OSSAccessKeyId=VL1Aa61bj8CkYSMR&Signature=7j%2BbgpF4GEMh/r/zWvR9KVQF/Qg%3D' },
    { name: '兔子', avatar: 'http://yucong.oss-cn-shanghai.aliyuncs.com/tuzi.png?Expires=1461234981&OSSAccessKeyId=VL1Aa61bj8CkYSMR&Signature=Yq/DoJqBodsHQUP5sRwnlNR6wG8%3D' }
  ]
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
