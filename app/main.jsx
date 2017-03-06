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
import AdminPanel from './components/AdminPanel'
import AdminUsersContainer from './containers/AdminUsersContainer'
import AdminProductsContainer from './containers/AdminProductsContainer'
import AdminOrdersContainer from './containers/AdminOrdersContainer'
import {receiveProduct, getProductById} from './reducers/product'
import {receiveUsers} from './reducers/users'
import {receiveOrders} from './reducers/orders'
import SignupContainer from './containers/SignupContainer'

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
//unsubsribe var declared globally so it can be accessed by onLeave hook.
let unsubscribeAdmin
const onAdminEnter = () => {
  unsubscribeAdmin = store.subscribe(() => {
    const user = store.getState().auth
    if(!user || !user.isAdmin) browserHistory.push('/products')
  })
  // if(!store.getState().auth || !store.getState().auth.isAdmin) {
  //   browserHistory.push('/products')
  // }
}
const onAdminLeave = () => {
  unsubscribeAdmin()
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

const onCartEnter = () => {
  store.dispatch(whoami())
}

const App = connect(

  ({ auth, cart }) => ({ user: auth, cart })
) (
  ({ user, children, cart }) =>
    <div>
      <NavbarComponent user={user} cart={cart}/>

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
        <Route path="/admin" component={AdminPanel} onEnter={onAdminEnter} onLeave={onAdminLeave}>
          <IndexRoute component={AdminUsersContainer} onEnter={onAdminUsersEnter}/>
          <Route path="/admin/users" component={AdminUsersContainer} onEnter={onAdminUsersEnter}/>
          <Route path="/admin/orders" component={AdminOrdersContainer} onEnter={onAdminOrdersEnter}/>
          <Route path="/admin/products" component={AdminProductsContainer} onEnter={onProductsEnter}/>
        </Route>
        <Route path="/signup" component={SignupContainer} />
        <Route path="/cart" component={CartContainer} onEnter={onCartEnter}/>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('main')
)
