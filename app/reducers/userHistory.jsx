import axios from 'axios'
import _ from 'lodash'

const initialState = []

//REDUCER
const reducer = (state=initialState, action) => {


  switch(action.type) {
    case GET_HISTORY:
      return action.orderHistory

    default:
      return state
  }
}

//CONSTANTS
const SET_CART = 'GET_HISTORY'

//ACTION CREATORS
export const orderHistory = orderHistory => ({
  type: RECEIEVE_ORDER_HISTORY,
  orderHistory: orderHistory
})

export const receiveOrderHistory = (userId) => {
  dispatch =>
    axios.get(`api/orders/${userId}`)
    .then(res => {
      //console.log(res.data)
    })
}

export default reducer
