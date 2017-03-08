import { combineReducers } from 'redux'
import auth from './auth'
import products from './products'

const rootReducer = combineReducers({
  auth: require('./auth').default,
  cart: require('./cart').default,
  products: require('./products').default,
  product: require('./product').default,
  users: require('./users').default,
  user: require('./users').default,
  reviews: require('./reviews').default
})

export default rootReducer
