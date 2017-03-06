import axios from 'axios'

// reducer
const reducer = (state=null, action) => {

  switch(action.type) {

  case RECEIVE_ORDERS:
    return action.orders

  }

  return state
}

// constants
const RECEIVE_ORDERS = 'RECEIVE_ORDERS'

// action creators
export const receiveOrders = orders => ({
  type: RECEIVE_ORDERS,
  orders: orders
})

export default reducer
