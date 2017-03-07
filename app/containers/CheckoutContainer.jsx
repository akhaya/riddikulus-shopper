import React, {Component} from 'react'
import {connect} from 'react-redux'
import Checkout from '../components/Checkout'

const mapStateToProps = (state) => {
  return {
    cart: state.cart
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    // handleUserUpdate(userId, orderId, productId, color, quantity) {
    //   dispatch(updateOrderItemFromUserCart(userId, orderId, productId, color, quantity))
    // },
    // handleUserDelete (userId, orderId, productId) {
    //   dispatch(deleteOrderItemFromUserCart(userId, orderId, productId))
    // },
    // handleGuestDelete(orderlineId) {
    //   dispatch(deleteOrderItemFromGuestCart(orderlineId))
    // },
    // handleGuestUpdate(orderlineId, color, quantity) {
    //   dispatch(updateOrderItemFromGuestCart(orderlineId, color, quantity))
    // },
    // handleCheckoutUserCart(orderTotals, userId) {
    //   dispatch(checkoutUserCart(orderTotals, userId))
    // },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Checkout)
