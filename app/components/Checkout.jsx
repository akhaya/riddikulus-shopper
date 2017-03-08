import React, {Component} from 'react'
import {connect} from 'react-redux'
import {browserHistory} from 'react-router'
import Address from './Address'
import AddressForm from '../components/AddressForm'
import CreditCard from './CreditCard'
import {addAddress} from '../reducers/cart'

class Checkout extends Component {
  constructor(props) {
    super(props)
    this.state = {
      orderProcessed: false
    }

    this.handleCheckout = this.handleCheckout.bind(this)
  }

  handleCheckout (event) {
    event.preventDefault()
    const userId = this.props.cart.user_id
    if (userId) {
      this.props.handleProcessUserOrder(userId)
      this.setState({orderProcessed: true})
    } else {
      console.log('do something with user')
    }
  }

  render() {
  return (
    this.state.orderProcessed ? (<h5>Your order was processed!</h5>) :
    (<div className="row">
    <div className="col-md-1">
    </div>
      <div className="col-md-8">
        <div className="panel panel-default">
          <div className="panel-body">
            {this.props.cart.user_id && this.props.cart.address_id ? <Address address={this.props.cart.address.fullAddress} /> : <AddressForm />}
            <CreditCard />
          </div>
        </div>
        <button className="btn btn-default" type="submit" onClick={this.handleCheckout}>Place Order</button>
        <hr />
      </div>
    </div>)
  )
  }
}

export default Checkout
