import axios from 'axios'


// reducer
const reducer = (state=null, action) => {

  switch(action.type) {

  case RECEIVE_USERS:
    return action.users

  case RECEIVE_USER:
    return action.user

  }

  return state
}

// constants
const RECEIVE_USERS = 'RECEIVE_USERS'
const RECEIVE_USER = 'RECEIVE_USER'

// action creators
export const receiveUsers = users => ({
  type: RECEIVE_USERS,
  users: users
})

export const receiveUser = user => ({
  type: RECEIVE_USER,
  user: user
})

// thunks
export const changeAdminStatus = userId => {
  return dispatch => {
    axios.put(`api/users/${userId}/admin`)
      .then(res => {
        console.log("RES IN ACTION CREATOR", res)
        dispatch(receiveUsers(res.data))
      }).catch(console.error)
  }
}

export const deleteUser = userId => {
  return dispatch => {
    axios.delete(`api/users/${userId}`)
      .then(res => {
        dispatch(receiveUsers(res.data))
      }).catch(console.error)
  }
}

export default reducer
