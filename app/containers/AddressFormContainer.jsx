import React, {Component} from 'react'
import {connect} from 'react-redux'
// import {addAddress} from '../reducers/cart'
// import {Link} from 'react-router'

class AddressFormContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      address1: '',
      address2: '',
      city: '',
      state: '',
      zip: '',
    }
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange (event) {
    const target = event.target
    const name = target.name
    this.setState({[name]: target.value})
  }
  handleSubmit (event) {
    console.log('====', this.props)
    // this.props.handleAddAddress(this.state)
  }
  render() {
    console.log('====', this.props)
    return (
        <div className="container">
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
                <button className="btn btn-default" type="submit" onClick={this.handleSubmit}>Register Address</button>
                <hr />
          </div>
        </div>
    )
  }
}

export default AddressFormContainer

// const mapStateToProps = (state) => {
//   return {
//     cart: state.cart
//   }
// }

// const mapDispatchToProps = (dispatch) => {
//   return {
//     handleAddAddress(address) {
//       dispatch(addAddress(address))
//     },
//   }
// }

// export default connect(null, mapDispatchToProps)(AddressFormContainer)

