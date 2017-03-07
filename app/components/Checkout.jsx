import React from 'react'
import {Link} from 'react-router'
import Address from './Address'
import AddressForm from './AddressForm'

export default (props) => {
  // if address render address component
  // if not user or no address render address form smart component
  if (props.cart.address_id) {
    console.log('===there is an address')
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
          </div>
        </div>
        <button className="btn btn-default" type="submit">Place Order</button>
        <hr />
      </div>
    </div>
  )
}
