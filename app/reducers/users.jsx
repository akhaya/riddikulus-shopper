import axios from 'axios'


// reducer
const reducer = (state=null, action) => {

  switch(action.type) {

  case RECEIVE_USERS:
    return action.users

  }

  return state
}

// constants
const RECEIVE_USERS = 'RECEIVE_USERS'
const DELETE_USER = 'DELETE_USER'
const MAKE_ADMIN = 'MAKE_ADMIN'

// action creators
export const receiveUsers = users => ({
  type: RECEIVE_USERS,
  users: users
})

export const deleteUser = userId => {
  dispatch => {
    axios.delete(`/${userID}`)
      .then(() => {
        return axios.get('/api/users')
      })
      .then(res => {
        dispatch(receiveUsers(res.data))
      }).catch(console.error)
  }
}

export default reducer
