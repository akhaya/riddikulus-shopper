import React, { Component } from 'react'
import {connect} from 'react-redux'
import OrderItem from '../components/OrderItem'
import CartSidebar from '../components/CartSidebar'


class CartContainer extends Component {
  constructor(props){
    super(props)

    this.calculateSubtotal = this.calculateSubtotal.bind(this)
    this.calculateTax = this.calculateTax.bind(this)
    this.calculateShipping =  this.calculateShipping.bind(this)
    this.calculateTotal =  this.calculateTotal.bind(this)

    this.state = {
      subtotal: this.calculateSubtotal(),
      shipping: 0,
      tax: this.calculateTax(),
      total: this.calculateTotal()
    }
  }

  calculateSubtotal(){
    const orderlines = this.props.cart.orderlines
    if(orderlines){
      return orderlines.map(ol => ol.subtotal).reduce( (a,b) => a+b )
    }
    return 0
  }
  calculateShipping(){
    const orderlines = this.props.cart.orderlines
    if(orderlines){
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

  componentWillReceiveProps(){
    this.setState({
      subtotal: this.calculateSubtotal(),
      shipping: this.calculateShipping(),
      tax: this.calculateTax(),
      total: this.calculateTotal()
    })
  }



  render(){
    const cart = this.props.cart
    const orderlines = cart.orderlines
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
            {orderlines? orderlines.map(orderline => <OrderItem orderline={orderline} key={orderline.id} />) : noItemsMessage}
          </div>
          <div className="col-md-3">
            <CartSidebar orderTotals={this.state}/>
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

export default connect(mapStateToProps)(CartContainer)
