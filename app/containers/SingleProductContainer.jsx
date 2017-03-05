import React, {Component} from 'react'
import {connect} from 'react-redux'
import SingleProduct from '../components/SingleProduct'
import {addItemToUserCart} from '../reducers/cart'

const mapStateToProps = (state) => {
  return {
    product: state.product,
    cart: state.cart,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleAdd (color, quantity, productId, orderId, price, size) {
      dispatch(addItemToUserCart(color, quantity, productId, orderId, price, size))
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleProduct)
