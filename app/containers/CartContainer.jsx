import React, { Component } from 'react'
import {connect} from 'react-redux'
import OrderItem from '../components/OrderItem'
import CartSidebar from '../components/CartSidebar'
<<<<<<< HEAD
import {deleteOrderItemFromGuestCart, updateOrderItemFromGuestCart} from '../reducers/cart'
=======
import {updateOrderItemFromUserCart} from '../reducers/cart'

import {deleteOrderItemFromUserCart} from '../reducers/cart'

>>>>>>> c42766acfd8eac7959d95ff3ca42fca48864a1b6

class CartContainer extends Component {
  constructor(props){
    super(props)

    this.calculateSubtotal = this.calculateSubtotal.bind(this)
    this.calculateTax = this.calculateTax.bind(this)
    this.calculateShipping =  this.calculateShipping.bind(this)
    this.calculateTotal =  this.calculateTotal.bind(this)
  }

  calculateSubtotal(){
    const orderlines = this.props.cart.orderlines
    if(orderlines && orderlines.length > 0){
      return orderlines.map(ol => ol.subtotal).reduce( (a,b) => a+b )
    }
    return 0
  }
  calculateShipping(){
    const orderlines = this.props.cart.orderlines
<<<<<<< HEAD
    if(orderlines && orderlines.length > 0){
=======
    if(orderlines && orderlines.length > 0 ){
>>>>>>> c42766acfd8eac7959d95ff3ca42fca48864a1b6
      return orderlines.length*50
    }
    return 0
  }
  calculateTax(){
    return this.calculateSubtotal()*0.089
  }
  calculateTotal(){
    return this.calculateSubtotal()+this.calculateTax()+this.calculateShipping()
  }

  render(){
    const cart = this.props.cart
    const orderlines = cart.orderlines
<<<<<<< HEAD
    const userId = cart.user_id
    const handleGuestDelete = this.props.handleGuestDelete
    const handleGuestUpdate = this.props.handleGuestUpdate
=======

    const handleUpdate = this.props.handleUpdate
    const handleDelete = this.props.handleDelete
    const userId = cart.user_id

>>>>>>> c42766acfd8eac7959d95ff3ca42fca48864a1b6
    const noItemsMessage = (
    <div className="panel panel-default">
      <div className="panel-body">
        <h4>  You have no items in your cart. </h4>
      </div>
    </div>)
    return (
      <div className="container">
        <h3>Cart</h3>
        <div className="row">
          <div className="col-md-9">
<<<<<<< HEAD
            {orderlines && orderlines.length > 0 ? orderlines.map(orderline => <OrderItem orderline={orderline} handleGuestDelete={handleGuestDelete} handleGuestUpdate={handleGuestUpdate} userId={userId} key={orderline.id} />) : noItemsMessage}
          </div>
          <div className="col-md-3">
            <CartSidebar orderTotals={{
              subtotal: this.calculateSubtotal(),
              shipping: this.calculateShipping(),
              tax: this.calculateTax(),
              total: this.calculateTotal()
            }}/>
=======
            {orderlines && orderlines.length > 0 ? orderlines.map(orderline => <OrderItem orderline={orderline} handleDelete={handleDelete} handleUpdate={handleUpdate} userId={userId} key={orderline.id} />) : noItemsMessage}
          </div>
          <div className="col-md-3">
            <CartSidebar orderTotals={{
               subtotal: this.calculateSubtotal(),
               shipping: this.calculateShipping(),
               tax: this.calculateTax(),
               total: this.calculateTotal()
             }}/>
>>>>>>> c42766acfd8eac7959d95ff3ca42fca48864a1b6
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    cart: state.cart
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
<<<<<<< HEAD
    handleGuestDelete(orderlineId) {
      dispatch(deleteOrderItemFromGuestCart(orderlineId))
    },
    handleGuestUpdate(orderlineId, color, quantity) {
      dispatch(updateOrderItemFromGuestCart(orderlineId, color, quantity))
    },
=======
    handleUpdate(userId, orderId, productId, color, quantity) {
      dispatch(updateOrderItemFromUserCart(userId, orderId, productId, color, quantity))
    },
    handleDelete (userId, orderId, productId) {
      dispatch(deleteOrderItemFromUserCart(userId, orderId, productId))
    }
>>>>>>> c42766acfd8eac7959d95ff3ca42fca48864a1b6
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartContainer)

