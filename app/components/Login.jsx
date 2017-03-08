import React from 'react'
import {Link} from 'react-router'

export const Login = ({ login }) => (
  <form className="navbar-form navbar-left" onSubmit={evt => {
    evt.preventDefault()
    login(evt.target.username.value, evt.target.password.value)
  } }>
    <div className="form-group">
      <input type="text" className="form-control" placeholder="Username" name="username" />
      <input type="text" className="form-control" placeholder="Password" name="password" type="password" />
      <input type="submit" className="form-control" value="Login" />
      <Link to={'/signup'}>
        <input type="submit" className="form-control btn-danger signup-btn" value="Sign Up!" />
      </Link>
    </div>
  </form>
)

import {login} from 'APP/app/reducers/auth'
import {connect} from 'react-redux'

export default connect (
  state => ({}), {login})(Login)
