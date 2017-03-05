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
import {whoami} from './reducers/auth'
import SingleProductContainer from './containers/SingleProductContainer'
import {getProductById} from './reducers/product'

const onAppEnter = () => {
  //GET THAT CART

  store.dispatch(whoami())

}

const onProductsEnter = () => {
  axios.get('/api/products')
  .then(res => {
    store.dispatch(receiveProducts(res.data))
  })
  .catch(console.error.bind(console))
}

const onSingleProductEnter = (nextRouterState) => {
  const productId = nextRouterState.params.productId
  store.dispatch(getProductById(productId))
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
      <Route path="/" component={App} onEnter={onAppEnter}>
        <IndexRedirect to="/products" />
        <Route path="/products" component={ProductsContainer} onEnter={onProductsEnter} />
        <Route path="/products/:productId" component={SingleProductContainer} onEnter={onSingleProductEnter} />
        <Route path="/cart" component={CartContainer} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('main')
)
