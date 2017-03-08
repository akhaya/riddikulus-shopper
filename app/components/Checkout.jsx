import React, {Component} from 'react'
import {connect} from 'react-redux'
import {browserHistory} from 'react-router'
import Address from './Address'
import AddressForm from '../components/AddressForm'
import CreditCard from './CreditCard'
import {processUserOrder, processGuestOrder} from '../reducers/cart'

class Checkout extends Component {
  constructor(props) {
    super(props)
  }

  render() {
  const userId = this.props.cart.user_id
  return (
    <div className="row">
    <div className="col-md-1">
    </div>
      <div className="col-md-8">
        <div className="panel panel-default">
          <div className="panel-body">
            {this.props.cart.user_id && this.props.cart.address_id ? <Address address={this.props.cart.address.fullAddress} userId={userId} handleProcessUserOrder={this.props.handleProcessUserOrder}/>
            :
            <AddressForm handleProcessGuestOrder={this.props.handleProcessGuestOrder}/>}
          </div>
        </div>
      </div>
    </div>
  )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleProcessUserOrder(userId) {
      dispatch(processUserOrder(userId))
    },
    handleProcessGuestOrder(address, orderlines) {
      dispatch(processGuestOrder(address, orderlines))
    }
  }
}

export default connect(null, mapDispatchToProps)(Checkout)

