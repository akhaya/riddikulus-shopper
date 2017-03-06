import React, {Component} from 'react'
import {Link} from 'react-router'

export default (props) => {
  return (
      <div className="container-fluid">
        <h3>Admin Panel</h3>
        <div className="container-fluid" role="navigation">
          <ul className="nav nav-tabs">
            <li role="presentation" className="active"><Link to="/admin/users">Users</Link></li>
            <li role="presentation"><Link to="/admin/orders">Orders</Link></li>
            <li role="presentation"><Link to="/admin/products">Products</Link></li>
          </ul>
        </div>
        <div className="container-fluid">
          {props.children}
        </div>
    </div>
  )
}
