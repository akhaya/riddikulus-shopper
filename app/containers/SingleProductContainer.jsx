import React, {Component} from 'react'
import {connect} from 'react-redux'
import SingleProduct from '../components/SingleProduct'
import {addItemToUserCart, addItemToGuestCart} from '../reducers/cart'

const mapStateToProps = (state) => {
  return {
    product: state.product,
    cart: state.cart,
  }
}

//--N.A. (joe): great use case for rest and spread here (...args)
const mapDispatchToProps = (dispatch) => {
  return {
    handleAdd (...args) {
      dispatch(addItemToUserCart(...args))
    },
    handleGuestAdd (...args) {
      dispatch(addItemToGuestCart(...args))
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleProduct)
