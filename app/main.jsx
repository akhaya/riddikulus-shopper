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
import SingleProduct from './components/SingleProduct'

const onAppEnter = () => {
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
      <Route path="/" component={App} onEnter={onAppEnter}>
        <IndexRoute component={ProductsContainer} />
        <Route path="/products" component={ProductsContainer} />
      </Route>
        {/*<IndexRedirect to="/jokes" />
        <Route path="/jokes" component={Jokes} />
      </Route>*/}
    </Router>
  </Provider>,
  document.getElementById('main')
)
