import React from 'react'
import {logout} from 'APP/app/reducers/auth'
import {connect} from 'react-redux'

export const WhoAmI = ({ user, logout }) => (
  <div className="whoami">
    <span className="whoami-user-name">{`Hi, ${user && user.name}!`}</span>
    <Link to={`/pastOrders`}><span className="glyphicon glyphicon-flash"></span></Link>
    <button className="btn btn-default logout" onClick={logout}>Logout</button>
  </div>
)


export default connect (
  ({ auth }) => ({ user: auth }),
  {logout},
)(WhoAmI)
