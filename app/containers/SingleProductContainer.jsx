import React, {Component} from 'react'
import {connect} from 'react-redux'
import SingleProduct from '../components/SingleProduct'

const mapStateToProps = (state) => {
  return {
    singleProduct: state.singleProduct
  }
}

export default connect(mapStateToProps)(SingleProduct)
