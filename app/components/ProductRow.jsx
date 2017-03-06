import React, {Component} from 'react'
import {connect} from 'react-redux'

export default (props) => {
  const product = props.product
  return (
      <tr>
        <th scope="row">{product.id}</th>
        <td>{product.name}</td>
        <td>{product.breed}</td>
        <td>{product.colors}</td>
        <td>{product.size}</td>
        <td>{product.inventory}</td>
        <td><a href="#" target="_self">DETAILS</a></td>
        <td><a href="#" target="_self" onClick={props.onDelete}>DELETE</a></td>
      </tr>
  )
}
