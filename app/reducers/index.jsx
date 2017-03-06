import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  auth: require('./auth').default,
  cart: require('./cart').default,
  products: require('./products').default,
  product: require('./product').default,
  users: require('./users').default
})

export default rootReducer
