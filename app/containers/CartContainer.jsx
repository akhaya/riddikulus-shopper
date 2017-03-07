import React, { Component } from 'react'
import {connect} from 'react-redux'
import OrderItem from '../components/OrderItem'
import CartSidebar from '../components/CartSidebar'
import {updateOrderItemFromUserCart, deleteOrderItemFromUserCart, deleteOrderItemFromGuestCart, updateOrderItemFromGuestCart} from '../reducers/cart'

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
      return orderlines.map(ol => ol.quantity*ol.unitPrice).reduce( (a,b) => a+b )
    }
    return 0
  }
  calculateShipping(){
    const orderlines = this.props.cart.orderlines
    if(orderlines && orderlines.length > 0){
      return orderlines.length*50
    }
    return 0
  }
  calculateTax(){
    return Math.floor(this.calculateSubtotal()*0.089)
  }
  calculateTotal(){
    return this.calculateSubtotal()+this.calculateTax()+this.calculateShipping()
  }

  render(){
    const cart = this.props.cart
    const orderlines = cart.orderlines
    const userId = cart.user_id
    const handleUserUpdate = this.props.handleUserUpdate
    const handleUserDelete = this.props.handleUserDelete
    const handleGuestDelete = this.props.handleGuestDelete
    const handleGuestUpdate = this.props.handleGuestUpdate
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
            {orderlines && orderlines.length > 0 ?
              orderlines.map(orderline => {
                return orderline.product? <OrderItem orderline={orderline} handleUserDelete={handleUserDelete} handleUserUpdate={handleUserUpdate} handleGuestDelete={handleGuestDelete} handleGuestUpdate={handleGuestUpdate} userId={userId} key={orderline.id} /> : null
              })
              : noItemsMessage}
          </div>
          <div className="col-md-3">
            <CartSidebar orderTotals={{
              subtotal: this.calculateSubtotal(),
              shipping: this.calculateShipping(),
              tax: this.calculateTax(),
              total: this.calculateTotal()
            }}/>
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
    handleUserUpdate(userId, orderId, productId, color, quantity) {
      dispatch(updateOrderItemFromUserCart(userId, orderId, productId, color, quantity))
    },
    handleUserDelete (userId, orderId, productId) {
      dispatch(deleteOrderItemFromUserCart(userId, orderId, productId))
    },
    handleGuestDelete(orderlineId) {
      dispatch(deleteOrderItemFromGuestCart(orderlineId))
    },
    handleGuestUpdate(orderlineId, color, quantity) {
      dispatch(updateOrderItemFromGuestCart(orderlineId, color, quantity))
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartContainer)

