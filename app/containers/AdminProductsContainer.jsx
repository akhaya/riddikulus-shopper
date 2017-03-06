import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router'
import AdminProducts from '../components/AdminProducts'
import deleteProduct from '../reducers/users'


const mapStateToProps = (state) => {
  return {
      products: state.products
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    deleteOrder: function(productId) {
        dispatch(deleteProduct(productId))
      }
  }
}

export default connect (mapStateToProps, mapDispatchToProps)(AdminProducts)
