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

// action creators
export const receiveUsers = users => ({
  type: RECEIVE_USERS,
  users: users
})

export default reducer
