import React, {Component} from 'react'
import {connect} from 'react-redux'
import Checkout from '../components/Checkout'
import {processUserOrder} from '../reducers/cart'

const mapStateToProps = (state) => {
  return {
    cart: state.cart
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleProcessUserOrder(userId) {
      dispatch(processUserOrder(userId))
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Checkout)
