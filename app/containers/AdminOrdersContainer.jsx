import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router'
import AdminUsers from '../components/AdminUsers'
import deleteUser from '../reducers/users'


const mapStateToProps = (state) => {
  return {
      orders: state.orders
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    deleteOrder: function(orderId) {
        dispatch(deleteOrder(userId))
      }
  }
}

export default connect (mapStateToProps, mapDispatchToProps)(AdminUsers)
