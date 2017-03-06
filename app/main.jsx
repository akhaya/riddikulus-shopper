'use strict'
import React from 'react'
import {Router, Route, IndexRedirect, IndexRoute, browserHistory} from 'react-router'
import {render} from 'react-dom'
import {connect, Provider} from 'react-redux'
import store from './store'
import axios from 'axios';

import NavbarComponent from './components/NavbarComponent'
import ProductsContainer from './containers/ProductsContainer'
import {receiveProducts} from './reducers/products'
import SingleProductContainer from './containers/SingleProductContainer'
import AdminPanel from './components/AdminPanel'
import AdminUsersContainer from './containers/AdminUsersContainer'
import AdminProductsContainer from './containers/AdminProductsContainer'
import {receiveProduct, getProductById} from './reducers/product'
import {receiveUsers} from './reducers/users'

const onAppEnter = () => {
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

const onAdminEnter = () => {
  // const user = store.getState().auth
  // if(!user || !user.isAdmin) {
  //   browserHistory.push('/products')
  // }
}
const onAdminUsersEnter = () => {
  axios.get('/api/users')
  .then(res => {
    store.dispatch(receiveUsers(res.data))
  })
  .catch(console.error.bind(console))
}

const onAdminOrdersEnter = () => {
  axios.get('/api/orders')
  .then(res => {
    store.dispatch(receiveOrders(res.data))
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
      <Route path="/" component={App} onEnter={onAppEnter}>
        <IndexRedirect to="/products" />
        <Route path="/products" component={ProductsContainer} />
        <Route path="/products/:productId" component={SingleProductContainer} onEnter={onSingleProductEnter} />
        <Route path="/admin" component={AdminPanel} onEnter={onAdminEnter}>
          <IndexRoute component={AdminUsersContainer} onEnter={onAdminUsersEnter}/>
          <Route path="/admin/users" component={AdminUsersContainer} onEnter={onAdminUsersEnter}/>
          <Route path="/admin/products" component={AdminProductsContainer} />
        </Route>
    </Route>
    </Router>
  </Provider>,
  document.getElementById('main')
)
