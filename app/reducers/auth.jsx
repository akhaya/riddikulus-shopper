import axios from 'axios'
import {receiveUserCart, receiveGuestCart, clearCart} from './cart'
import {browserHistory} from 'react-router'

const reducer = (state=null, action) => {
  switch(action.type) {
  case AUTHENTICATED:
    return action.user
  }
  return state
}

const AUTHENTICATED = 'AUTHENTICATED'
export const authenticated = user => ({
  type: AUTHENTICATED, user
})

export const login = (username, password) =>
  dispatch =>
    axios.post('/api/auth/login/local',
      {username, password})
      .then(() => dispatch(whoami()))
      .catch(() => dispatch(whoami()))

export const logout = () =>
  dispatch =>
    axios.post('/api/auth/logout')
      .then(() => {
        dispatch(clearCart())
        dispatch(whoami())
        browserHistory.push('/')
      })
      .catch(() => dispatch(whoami()))

export const whoami = () =>
  dispatch =>
    axios.get('/api/auth/whoami')
      .then(response => {
        const user = response.data
        dispatch(authenticated(user))
        //get cart
        if(!user){
          dispatch(receiveGuestCart())
        }else{
          dispatch(receiveUserCart(user.id))
        }

      })
      .catch(failed => {
        dispatch(authenticated(null))
        dispatch(receiveGuestCart())
      })

export default reducer
