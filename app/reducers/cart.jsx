import axios from 'axios'

const initialState = {}

//REDUCER
const reducer = (state=initialState, action) => {

  //const newState = Object.create({}, state)

  switch(action.type) {
    case SET_CART:
      return action.cart
    default:
      return state
  }
  //return newState
}

//CONSTANTS
const SET_CART = 'SET_CART'

//ACTION CREATORS
export const receiveCart = cart => ({
  type: SET_CART, cart
})

export const clearCart = cart => ({
  type: SET_CART,
  cart: {}
})


export const receiveUserCart = (userId) =>
  dispatch =>
    axios.get(`/api/orders/cart/${userId}`)
      .then(response => {
        const cart = response.data
        dispatch(receiveCart(cart))
      })
      .catch(failed => console.error)

export const receiveGuestCart = () =>
  dispatch =>
    axios.get(`/api/orders/cart`)
      .then(response => {
        const cart = response.data
        dispatch(receiveCart(cart))
      })
      .catch(failed => console.error)

export const deleteOrderItemFromGuestCart = (orderlineId) =>
  dispatch =>
    axios.delete(`api/orders/cart/delete/guest/${orderlineId}`)
      .then(response => {
        const updatedCart = response.data
        dispatch(receiveCart(updatedCart))
      })
      .catch(failed => console.error)

export const updateOrderItemFromGuestCart = (orderlineId, color, quantity) =>
  dispatch =>
    axios.put(`api/orders/cart/update/guest/${orderlineId}`, {color, quantity})
      .then(response => {
        const updatedCart = response.data
        dispatch(receiveCart(updatedCart))
      })
      .catch(failed => console.error)

export default reducer
