'use strict'
import React from 'react'
import {Router, Route, IndexRedirect, IndexRoute, browserHistory} from 'react-router'
import {render} from 'react-dom'
import {connect, Provider} from 'react-redux'
import store from './store'
<<<<<<< HEAD
import Jokes from './components/Jokes'
import Login from './components/Login'
import WhoAmI from './components/WhoAmI'
import CartContainer from './containers/CartContainer'
=======
import axios from 'axios';

import NavbarComponent from './components/NavbarComponent'
import ProductsContainer from './containers/ProductsContainer'
import {receiveProducts} from './reducers/products'

const onAppEnter = () => {
  axios.get('/api/products')
  .then(res => {
    store.dispatch(receiveProducts(res.data))
  })
  .catch(console.error.bind(console))
}
>>>>>>> master

const App = connect(
  ({ auth }) => ({ user: auth })
) (
  ({ user, children }) =>
    <div>
<<<<<<< HEAD
      <nav>
        {user ? <WhoAmI/> : <Login/>}
      </nav>
=======
      <NavbarComponent user={user} />
>>>>>>> master
      {children}
    </div>
)

render (
  <Provider store={store}>
    <Router history={browserHistory}>
<<<<<<< HEAD
      <Route path="/" component={ExampleApp}>
        <IndexRedirect to="/cart" />
        <Route path="/cart" component={CartContainer} />
=======
      <Route path="/" component={App} onEnter={onAppEnter}>
        <IndexRoute component={ProductsContainer} />
        <Route path="/products" component={ProductsContainer} />
>>>>>>> master
      </Route>
        {/*<IndexRedirect to="/jokes" />
        <Route path="/jokes" component={Jokes} />
      </Route>*/}
    </Router>
  </Provider>,
  document.getElementById('main')
)
