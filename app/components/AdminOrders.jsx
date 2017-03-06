import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router'
import OrderRow from './OrderRow'

export default (props) => {
  return (
      <div className="container-fluid">
        <div className="row">
          <table className="table table-hover">
            <thead>
              <tr>
                <th>ID</th>
                <th>User Id</th>
                <th>Date Placed</th>
                <th>Total</th>
                <th>Status</th>
                <th>See Details</th>
                <th>Delete?</th>
              </tr>
            </thead>
            <tbody>
              {props.orders && props.orders.map(order =>
                <OrderRow
                  order={order}
                  key={order.id}
                  />
                )}
            </tbody>
          </table>
        </div>
      </div>
  )
}
