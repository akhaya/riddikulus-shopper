import React, {Component} from 'react'
import {connect} from 'react-redux'
import CreditCard from './CreditCard'

class AddressForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
        address1: '',
        address2: '',
        city: '',
        state: '',
        zip: '',
        orderProcessed: false
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleChange (event) {
    const target = event.target
    const name = target.name
    this.setState({[name]: target.value})
  }
  handleSubmit (event) {
    this.props.handleProcessGuestOrder({
        address1: this.state.address1,
        address2: this.state.address2,
        city: this.state.city,
        state: this.state.state,
        zip: this.state.zip,
    })
    this.setState({orderProcessed: true})
  }
  render() {
    console.log('======', this.props)
    return (
        this.state.orderProcessed ? <h5>Your order was processed</h5> :
        (<div className="container">
          <div className="row">
             <form className="form-horizontal">
                    <fieldset>
                        {/*-- Address form --*/}

                        <h2>Address</h2>

                        {/*-- address-line1 input--*/}
                        <div className="control-group">
                            <label className="control-label">Address Line 1</label>
                            <div className="controls">
                                <input id="address-line1" name="address1" type="text" placeholder="address line 1"
                                className="input-xlarge" onChange={this.handleChange} />
                                <p className="help-block">Street address, P.O. box, company name, c/o</p>
                            </div>
                        </div>
                        {/*-- address-line2 input--*/}
                        <div className="control-group">
                            <label className="control-label">Address Line 2</label>
                            <div className="controls">
                                <input id="address-line2" name="address2" type="text" placeholder="address line 2"
                                className="input-xlarge" onChange={this.handleChange} />
                                <p className="help-block">Apartment, suite , unit, building, floor, etc.</p>
                            </div>
                        </div>
                        {/*-- city input--*/}
                        <div className="control-group">
                            <label className="control-label">City / Town</label>
                            <div className="controls">
                                <input id="city" name="city" type="text" placeholder="city" className="input-xlarge" onChange={this.handleChange} />
                                <p className="help-block"></p>
                            </div>
                        </div>
                        {/*-- region input--*/}
                        <div className="control-group">
                            <label className="control-label">State</label>
                            <div className="controls">
                                <input id="region" name="state" type="text" placeholder="state / province / region"
                                className="input-xlarge" onChange={this.handleChange} />
                                <p className="help-block"></p>
                            </div>
                        </div>
                        {/*-- postal-code input--*/}
                        <div className="control-group">
                            <label className="control-label">Zip / Postal Code</label>
                            <div className="controls">
                                <input id="postal-code" name="zip" type="text" placeholder="zip or postal code"
                                className="input-xlarge" onChange={this.handleChange} />
                                <p className="help-block"></p>
                            </div>
                        </div>
                    </fieldset>
                </form>
            <CreditCard />
            <button className="btn btn-default" type="submit" onClick={this.handleSubmit}>Place Order</button>
            <hr />
          </div>
        </div>)
    )
  }
}

export default AddressForm

