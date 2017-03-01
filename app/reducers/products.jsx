import axios from 'axios'

// reducer
const reducer = (state=null, action) => {

  switch(action.type) {

  case RECEIVE_PRODUCTS:
    return action.products

  }

  return state
}

// constants
const RECEIVE_PRODUCTS = 'RECEIVE_PRODUCTS'

// action creators
export const receiveProducts = products => ({
  type: RECEIVE_PRODUCTS,
  products: products,
})

// export const getProducts = () =>
//   dispatch =>
//     axios.get('/api/products')
//       .then(res => {
//         dispatch(receiveProducts(res.data))
//       })
//       .catch(console.error.bind(console))

export default reducer
