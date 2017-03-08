import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router'
import AdminOrders from '../components/AdminOrders'
import {deleteUser} from '../reducers/users'
import {updateOrderAsync, deleteOrderAsync} from '../reducers/orders'


const mapStateToProps = (state) => {
  return {
      orders: state.orders
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    deleteOrder: function(orderId) {
      dispatch(deleteOrderAsync(orderId))
    },
    handleSubmit: function(orderId, newStatus, evt){
      evt.preventDefault()
      dispatch(updateOrderAsync(orderId, {status: newStatus}))
    },
  }
}

export default connect (mapStateToProps, mapDispatchToProps)(AdminOrders)
