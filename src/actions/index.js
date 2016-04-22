export const GET_USERS = 'GET_USERS'
export const getUsers = () => {
  let users = [
    { name: '隐木', avatar: 'http://yucong.oss-cn-shanghai.aliyuncs.com/yinmu.png?Expires=1461310833&OSSAccessKeyId=kziCCZuOkMBVYp8L&Signature=HJj7PeLOsUxDLBB/msudVhfgIVY%3D' },
    { name: '泠妹', avatar: 'http://yucong.oss-cn-shanghai.aliyuncs.com/ling.png?Expires=1461310788&OSSAccessKeyId=kziCCZuOkMBVYp8L&Signature=NKLqZNBsUTSzhEBFwesAVvaBl%2BA%3D' },
    { name: '龙三', avatar: 'http://yucong.oss-cn-shanghai.aliyuncs.com/longsan.png?Expires=1461310809&OSSAccessKeyId=kziCCZuOkMBVYp8L&Signature=6GIiu3zHmyefRajZ%2BMVsLK7NShc%3D' },
    { name: '兔子', avatar: 'http://yucong.oss-cn-shanghai.aliyuncs.com/tuzi.png?Expires=1461310818&OSSAccessKeyId=kziCCZuOkMBVYp8L&Signature=3dMG/8CzokJmjwIWFRVpwroif2k%3D' }
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
