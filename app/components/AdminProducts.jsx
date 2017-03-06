import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router'
import UserRow from './UserRow'

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
                <UserRow
                  order={order}
                  key={order.id}
                  onDelete={() => props.deleteOrder(order.id)}
                  />
                )}
            </tbody>
          </table>
        </div>
      </div>
  )
}
