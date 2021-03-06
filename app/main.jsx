'use strict'
import React from 'react'
import {Router, Route, IndexRedirect, IndexRoute, browserHistory} from 'react-router'
import {render} from 'react-dom'
import {connect, Provider} from 'react-redux'
import store from './store'
// import axios from 'axios';
import NavbarComponent from './components/NavbarComponent'
import ProductsContainer from './containers/ProductsContainer'
import CartContainer from './containers/CartContainer'
// import {receiveProducts} from './reducers/products'
import {whoami} from './reducers/auth'
import SingleProductContainer from './containers/SingleProductContainer'
import AdminPanel from './components/AdminPanel'
import AdminUsersContainer from './containers/AdminUsersContainer'
import AdminProductsContainer from './containers/AdminProductsContainer'
import AdminOrdersContainer from './containers/AdminOrdersContainer'
// import {receiveProduct, getProductById} from './reducers/product'
// import {receiveUsers} from './reducers/users'
// import {receiveOrders} from './reducers/orders'
import SignupContainer from './containers/SignupContainer'
import {onAppEnter, onProductsEnter, onSingleProductEnter, onAdminEnter, onAdminLeave, onAdminUsersEnter, onAdminOrdersEnter, onCartEnter} from './onEnter'
import userHistoryContainer from './containers/userHistoryContainer'
import CheckoutContainer from './containers/CheckoutContainer'

// add this to onEnter file when merging with onEnter branch
const onCheckoutEnter = () => {
  store.dispatch(whoami())
}

const App = connect(

  ({ auth, cart }) => ({ user: auth, cart })
) (
  ({ user, children, cart }) =>
    <div>
      <NavbarComponent user={user} cart={cart}/>

      {children}
      <div>View on <a href="https://github.com/akhaya/riddikulus-shopper/">Github</a></div>
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
        <Route path="/users/:userId" component={userHistoryContainer} />
        <Route path="/checkout" component={CheckoutContainer} onEnter={onCheckoutEnter} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('main')
)
