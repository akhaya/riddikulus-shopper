import store from './store'
import axios from 'axios';
import {whoami} from './reducers/auth'
import {browserHistory} from 'react-router'
import {receiveProducts} from './reducers/products'
import {receiveProduct, getProductById} from './reducers/product'
import {receiveUsers} from './reducers/users'
import {receiveOrders} from './reducers/orders'
import {fetchReviews} from './reducers/reviews'

export const onAppEnter = () => {
  //GET THAT CART
  store.dispatch(whoami())
}

export const onProductsEnter = () => {
  axios.get('/api/products')
  .then(res => {
    store.dispatch(receiveProducts(res.data))
  })
  .catch(console.error.bind(console))
}

export const onSingleProductEnter = (nextRouterState) => {
  const productId = nextRouterState.params.productId
  store.dispatch(getProductById(productId))
  store.dispatch(fetchReviews(productId))
}
//unsubsribe var declared globally so it can be accessed by onLeave hook.
let unsubscribeAdmin
export const onAdminEnter = () => {
  unsubscribeAdmin = store.subscribe(() => {
    const user = store.getState().auth
    if(!user || !user.isAdmin) browserHistory.push('/products')
  })
  // if(!store.getState().auth || !store.getState().auth.isAdmin) {
  //   browserHistory.push('/products')
  // }
}
export const onAdminLeave = () => {
  unsubscribeAdmin()
}

export const onAdminUsersEnter = () => {
  axios.get('/api/users')
  .then(res => {
    store.dispatch(receiveUsers(res.data))
  })
  .catch(console.error.bind(console))
}

export const onAdminOrdersEnter = () => {
  axios.get('/api/orders')
  .then(res => {
    store.dispatch(receiveOrders(res.data))
  })
  .catch(console.error.bind(console))
}

export const onCartEnter = () => {
  store.dispatch(whoami())
}
