import React, {Component} from 'react'
import {connect} from 'react-redux'
import SingleProduct from '../components/SingleProduct'

const mapStateToProps = (state) => {
  return {
    product: state.product,
    cart: state.cart,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleProduct)
