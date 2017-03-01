import axios from 'axios'

const initialState = {}

//REDUCER
const reducer = (state=initialState, action) => {
  const newState = Object.create({}, state)
  switch(action.type) {
    default:
      return state
  }
  return newState
}

//CONSTANTS
const ADD_ITEM = 'ADD_ITEM'

//ACTION CREATORS
// export const authenticated = user => ({
//   type: AUTHENTICATED, user
// })

// export const login = (username, password) =>
//   dispatch =>
//     axios.post('/api/auth/login/local',
//       {username, password})
//       .then(() => dispatch(whoami()))
//       .catch(() => dispatch(whoami()))

// export const logout = () =>
//   dispatch =>
//     axios.post('/api/auth/logout')
//       .then(() => dispatch(whoami()))
//       .catch(() => dispatch(whoami()))

// export const whoami = () =>
//   dispatch =>
//     axios.get('/api/auth/whoami')
//       .then(response => {
//         const user = response.data
//         dispatch(authenticated(user))
//       })
//       .catch(failed => dispatch(authenticated(null)))

export default reducer
