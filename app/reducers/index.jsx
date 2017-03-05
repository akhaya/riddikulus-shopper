import { combineReducers } from 'redux'
import auth from './auth'
import products from './products'

const rootReducer = combineReducers({ auth, products })

export default rootReducer
