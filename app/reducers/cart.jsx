import axios from 'axios'
import _ from 'lodash'

const initialState = {}

//REDUCER
const reducer = (state=initialState, action) => {

  //const newState = Object.create({}, state)

  switch(action.type) {
    case SET_CART:
      return action.cart

    case ADD_TO_CART:
      let newState = Object.assign({}, state)
      newState.orderlines = newState.orderlines || []
      const duplicateOrder = _.find(newState.orderlines, {'id': action.orderline.id})
      newState.orderlines = newState.orderlines.filter(orderline => {
        return orderline !== duplicateOrder
      })
      .concat(action.orderline)
      return newState

    default:
      return state
  }
  //return newState
}

//CONSTANTS
const SET_CART = 'SET_CART'
const ADD_TO_CART = 'ADD_TO_CART'

//ACTION CREATORS

export const receiveCart = cart => ({
  type: SET_CART, cart
})

export const clearCart = cart => ({
  type: SET_CART,
  cart: {}
})

export const addToCart = orderline => ({
  type: ADD_TO_CART,
  orderline: orderline,
})

export const processGuestOrder = (address) =>
  dispatch =>
    axios.post('/api/orders/cart/process/guest', address)
      .then(response => {
        // console.log('====order processed')
      })
      .catch(console.error)

export const processUserOrder = userId =>
  dispatch =>
    axios.put(`/api/orders/cart/process/${userId}`)
      .then(response => {
        const cart = response.data
        dispatch(receiveCart(cart))
      })
      .catch(console.error)

export const checkoutUserCart = (orderTotals, userId) =>
  dispatch =>
    axios.put(`/api/orders/cart/checkout/${userId}`, orderTotals)
      .then(response => {
        const cart = response.data
        dispatch(receiveCart(cart))
      })
      .catch(console.error)

export const receiveUserCart = (userId) =>
  dispatch =>
    axios.get(`/api/orders/cart/${userId}`)
      .then(response => {
        const cart = response.data
        dispatch(receiveCart(cart))
      })
      .catch(console.error)

export const receiveGuestCart = () =>
  dispatch =>
    axios.get(`/api/orders/cart`)
      .then(response => {
        const cart = response.data
        dispatch(receiveCart(cart))
      })
      .catch(console.error)

export const deleteOrderItemFromGuestCart = (orderlineId) =>
  dispatch =>
    axios.delete(`api/orders/cart/delete/guest/${orderlineId}`)
      .then(response => {
        const updatedCart = response.data
        dispatch(receiveCart(updatedCart))
      })
      .catch(console.error)

// update by color
export const updateOrderItemFromUserCart = (userId, orderId, productId, color, quantity) =>
  dispatch =>
    axios.put(`/api/orders/cart/update/${userId}/${orderId}/${productId}`, {color, quantity})
      .then(response => {
        const updatedCart = response.data
        dispatch(receiveCart(updatedCart))
      })
      .catch(console.error)

export const updateOrderItemFromGuestCart = (orderlineId, color, quantity) =>
  dispatch =>
    axios.put(`api/orders/cart/update/guest/${orderlineId}`, {color, quantity})
      .then(response => {
        const updatedCart = response.data
        dispatch(receiveCart(updatedCart))
      })
      .catch(console.error)

export const deleteOrderItemFromUserCart = (userId, orderId, productId) =>
  dispatch =>
    axios.delete(`/api/orders/cart/delete/${userId}/${orderId}/${productId}`)
      .then(response => {
        const updatedCart = response.data
        dispatch(receiveCart(updatedCart))
      })
      .catch(console.error)

export const addItemToUserCart = (color, quantity, productId, orderId, price, size) =>
  dispatch =>
    axios.post(`/api/orders/cart/add`, {color, quantity, productId, orderId, price, size})
      .then(response => {
        const orderline = response.data
        dispatch(addToCart(orderline))
      })
      .catch(console.error)

export const addItemToGuestCart = (product, color, quantity, productId, price, size) =>
  dispatch =>
    axios.post(`/api/orders/cart/add/guest`, {product, color, quantity, productId, price, size})
      .then(response => {
        const orderline = response.data
        dispatch(addToCart(orderline))
      })
      .catch(console.error)

export default reducer
