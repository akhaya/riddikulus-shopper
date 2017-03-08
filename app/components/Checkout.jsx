import React, {Component} from 'react'
import {connect} from 'react-redux'
import {browserHistory} from 'react-router'
import Address from './Address'
import AddressFormContainer from '../containers/AddressFormContainer'
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
            {this.props.cart.user_id && this.props.cart.address_id ? <Address address={this.props.cart.address.fullAddress} /> : <AddressFormContainer handleAddAddress={this.props.handleAddAddress} />}
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

const mapDispatchToProps = (dispatch) => {
  return {
    handleAddAddress(address) {
      dispatch(addAddress(address))
    },
  }
}

export default connect(null, mapDispatchToProps)(Checkout)
