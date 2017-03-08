import React from 'react'
import {logout} from 'APP/app/reducers/auth'
import {connect} from 'react-redux'
import {Link} from 'react-router'

export const WhoAmI = ({ user, logout }) => (
  <div className="whoami">
    <span className="whoami-user-name">{`Hi, ${user && user.name}!`}</span>
    <Link to={`/users/${user.id}`}><span className="glyphicon glyphicon-user"></span></Link>
    <button className="btn btn-default logout" onClick={logout}>Logout</button>
  </div>
)


export default connect (
  ({ auth }) => ({ user: auth }),
  {logout},
)(WhoAmI)
