import axios from 'axios'

// reducer
const reducer = (state=null, action) => {

  switch(action.type) {

  case RECEIVE_PRODUCT:
    return action.product

  }

  return state
}

// constants
const RECEIVE_PRODUCT = 'RECEIVE_PRODUCT'

// action creators
export const receiveProduct = product => ({
  type: RECEIVE_PRODUCT,
  product: product,
})

export const getProductById = productId => {
  return dispatch => {
    axios.get(`/api/products/${productId}`)
    .then(res => {
      dispatch(receiveProduct(res.data))
    })
    .catch(console.error.bind(console))
    }
}

export default reducer
