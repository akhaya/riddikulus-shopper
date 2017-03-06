import React, {Component} from 'react'
import {connect} from 'react-redux'

export default (props) => {
  const order = props.order
  return (
      <tr>
        <th scope="row">{order.id}</th>
        <td>{order.user_id}</td>
        <td>{order.created_at}</td>
        <td>{order.total}</td>
        <td>{order.status}</td>
        <td><a href="#" target="_self">DETAILS</a></td>
        <td><a href="#" target="_self">DELETE</a></td>
      </tr>
  )
}
