import axios from 'axios'

// reducer
const reducer = (state=null, action) => {
  let newOrders;
  switch(action.type) {

  case RECEIVE_ORDERS:
    return action.orders

  case UPDATE_ORDER:
    //find the updated order and replace it with the new version
    newOrders=state.map(order => {
      if(action.order.id===order.id) return action.order
      return order
    })
    return newOrders;

  case DELETE_ORDER:
    //filter out the deleted order
    newOrders=state.filter(order => {
      return action.orderId!==order.id
    })
    return newOrders;
  }

  return state
}

// constants
const RECEIVE_ORDERS = 'RECEIVE_ORDERS'
const UPDATE_ORDER = 'UPDATE_ORDER'
const DELETE_ORDER = 'DELETE_ORDER'

// action creators
export const receiveOrders = orders => ({
  type: RECEIVE_ORDERS,
  orders: orders
})

export const updateOrder = order => ({
  type: UPDATE_ORDER,
  order: order
})

export const deleteOrder = orderId => ({
  type: DELETE_ORDER,
  orderId: orderId
})


export const updateOrderAsync = (orderId, updateObj) => {
  return dispatch => {
    axios.post(`/api/orders/${orderId}/update`, updateObj)
    .then(res => {
      dispatch(updateOrder(res.data))
    })
    .catch(console.error)
    }
}

export const deleteOrderAsync = (orderId) => {
  return dispatch => {
    axios.delete(`/api/orders/${orderId}`)
    .then(res => {
      dispatch(deleteOrder(res.data))
    })
    .catch(console.error)
    }
}

export default reducer
