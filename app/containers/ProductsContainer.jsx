import React, {Component} from 'react'
import {connect} from 'react-redux'
import Products from '../components/Products'


//based on the filters selected, the products view should change
// when there are no filters selected, all products should be displayed
// inital state = all products



const mapStateToProps = (state) => {
  return {
    products: state.products.list
  }
}

export default connect(mapStateToProps)(Products)
