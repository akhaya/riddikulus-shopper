import React, {Component} from 'react'
import CreditCard from './CreditCard'

 class Address extends Component {
  constructor(props) {
    super(props)
    this.state = {
      orderProcessed: false
    }
    this.handleCheckout = this.handleCheckout.bind(this)
  }
  handleCheckout (event) {
    event.preventDefault()
    this.props.handleProcessUserOrder(this.props.userId)
    this.setState({orderProcessed: true})
  }

  render() {
    return (
      this.state.orderProcessed ? <h5>Your order was processed</h5> :
      (<div className="container">
        <div className="row">
            <h2>Address</h2>
            <h5>{this.props.address}</h5>
            <CreditCard />
            <button className="btn btn-default" type="submit" onClick={this.handleCheckout}>Place Order</button>
            <hr />
        </div>
      </div>)
    )

  }

}

export default Address
