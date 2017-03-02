'use strict'
import React from 'react'
import {Router, Route, IndexRedirect, IndexRoute, browserHistory} from 'react-router'
import {render} from 'react-dom'
import {connect, Provider} from 'react-redux'
import store from './store'
import axios from 'axios';

import NavbarComponent from './components/NavbarComponent'
import ProductsContainer from './containers/ProductsContainer'
import CartContainer from './containers/CartContainer'
import {receiveProducts} from './reducers/products'

// const onAppEnter = () => {
//   //GET THAT CART
//   if(auth){
//     //find or create a pending cart for user
//   }else{
//     //find or create a cart wih this sessionID
//   }
// }

const onProductsEnter = () => {
  axios.get('/api/products')
  .then(res => {
    store.dispatch(receiveProducts(res.data))
  })
  .catch(console.error.bind(console))
}


const App = connect(
  ({ auth }) => ({ user: auth })
) (
  ({ user, children }) =>
    <div>
      <NavbarComponent user={user} />

      {children}
    </div>
)

render (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={ProductsContainer} onEnter={onProductsEnter}/>
        <Route path="/products" component={ProductsContainer} onEnter={onProductsEnter} />
        <Route path="/cart" component={CartContainer} />
      </Route>

    </Router>
  </Provider>,
  document.getElementById('main')
)
