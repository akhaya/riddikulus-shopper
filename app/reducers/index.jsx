import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  auth: require('./auth').default,
  products: require('./products').default,
  product: require('./product').default,
  users: require('./users').default
})

export default rootReducer
