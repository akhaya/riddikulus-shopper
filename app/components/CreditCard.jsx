import React, {Component} from 'react'
// import {Link} from 'react-router'

// credit card info is not yet stored on the database
class CreditCard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      creditcard: ''
    }
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange (event) {
    this.setState({creditcard: event.target.value})
  }
  render() {
    const errorMessage = (<h5>Your credit card number must be 16 digits.</h5>)
    return (
        <div className="container">
          <div className="row">
             <form className="form-horizontal">
                    <fieldset>
                        {/*-- Address form --*/}

                        <h2>Credit Card</h2>

                        {/*-- full-name input--*/}
                        <div className="control-group">
                            <div className="controls">
                                <input id="creditcard" name="creditcard" type="text" placeholder="credit card number"
                                className="input-xlarge" onChange={this.handleChange} />
                                <p className="help-block"></p>
                            </div>
                            {this.state.creditcard.length > 0 && this.state.creditcard.length < 16 ? errorMessage : null}
                        </div>
                    </fieldset>
                </form>
          </div>
        </div>
    )
  }
}

export default CreditCard
