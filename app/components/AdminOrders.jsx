import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router'
import OrderRow from './OrderRow'
import AdminTable from './AdminTable'

export default (props) => {
  const headers = ['ID', 'User ID', 'Date Placed', 'Total', 'Status', 'See Details', 'Delete?']
  return (
      <div className="container-fluid">
        <AdminTable headers={headers}>
          {props.orders && props.orders.map(order =>
            <OrderRow
              order={order}
              key={order.id}
              handleSubmit={props.handleSubmit}
              onDelete={props.deleteOrder}
              />
            )}
        </AdminTable>
      </div>
  )
}
