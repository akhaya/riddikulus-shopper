import React from 'react'
// import {Link} from 'react-router'

export default (props) => {
  console.log('======checkout', props)
  return (
      <div className="container">
        <div className="row">
           <form className="form-horizontal">
                  <fieldset>
                      {/*-- Address form --*/}

                      <h2>Address</h2>

                      {/*-- full-name input--*/}
                      <div className="control-group">
                          <label className="control-label">Full Name</label>
                          <div className="controls">
                              <input id="full-name" name="full-name" type="text" placeholder="full name"
                              className="input-xlarge" />
                              <p className="help-block"></p>
                          </div>
                      </div>
                      {/*-- address-line1 input--*/}
                      <div className="control-group">
                          <label className="control-label">Address Line 1</label>
                          <div className="controls">
                              <input id="address-line1" name="address-line1" type="text" placeholder="address line 1"
                              className="input-xlarge" />
                              <p className="help-block">Street address, P.O. box, company name, c/o</p>
                          </div>
                      </div>
                      {/*-- address-line2 input--*/}
                      <div className="control-group">
                          <label className="control-label">Address Line 2</label>
                          <div className="controls">
                              <input id="address-line2" name="address-line2" type="text" placeholder="address line 2"
                              className="input-xlarge" />
                              <p className="help-block">Apartment, suite , unit, building, floor, etc.</p>
                          </div>
                      </div>
                      {/*-- city input--*/}
                      <div className="control-group">
                          <label className="control-label">City / Town</label>
                          <div className="controls">
                              <input id="city" name="city" type="text" placeholder="city" className="input-xlarge" />
                              <p className="help-block"></p>
                          </div>
                      </div>
                      {/*-- region input--*/}
                      <div className="control-group">
                          <label className="control-label">State</label>
                          <div className="controls">
                              <input id="region" name="region" type="text" placeholder="state / province / region"
                              className="input-xlarge" />
                              <p className="help-block"></p>
                          </div>
                      </div>
                      {/*-- postal-code input--*/}
                      <div className="control-group">
                          <label className="control-label">Zip / Postal Code</label>
                          <div className="controls">
                              <input id="postal-code" name="postal-code" type="text" placeholder="zip or postal code"
                              className="input-xlarge" />
                              <p className="help-block"></p>
                          </div>
                      </div>
                  </fieldset>
              </form>
        </div>
      </div>
  )
}
