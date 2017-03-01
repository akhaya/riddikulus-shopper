'use strict'
import React from 'react'
import {Router, Route, IndexRedirect, browserHistory} from 'react-router'
import {render} from 'react-dom'
import {connect, Provider} from 'react-redux'

import store from './store'
import NavbarComponent from './components/NavbarComponent'

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
      <Route path="/" component={App} />
        {/*<IndexRedirect to="/jokes" />
        <Route path="/jokes" component={Jokes} />
      </Route>*/}
    </Router>
  </Provider>,
  document.getElementById('main')
)
