import React from 'react'
import {Link} from 'react-router'
import Address from './Address'
import AddressForm from './AddressForm'
import CreditCard from './CreditCard'

export default (props) => {
  const userId = props.cart.user_id
  function handleCheckout (event) {
    event.preventDefault()
    console.log(props.cart)
    // props.handleProcessUserOrder(userId)
    // browserHistory.push('/checkout')
  }
  console.log('======checkout', props)
  return (
    <div className="row">
    <div className="col-md-1">
    </div>
      <div className="col-md-8">
        <div className="panel panel-default">
          <div className="panel-body">
            {props.cart.user_id && props.cart.address_id ? <Address /> : <AddressForm />}
            <CreditCard />
          </div>
        </div>
        <button className="btn btn-default" type="submit" onClick={handleCheckout}>Place Order</button>
        <hr />
      </div>
    </div>
  )
}
