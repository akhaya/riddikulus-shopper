import React from 'react'
// import {Link} from 'react-router'

export default (props) => {
  console.log('======checkout', props)
  return (
    <div className="row">
    <div className="col-md-1">
    </div>
      <div className="col-md-8">
        <div className="panel panel-default">
          <div className="panel-body">
            Address
          </div>
        </div>
        <button className="btn btn-default" type="submit">Place Order</button>
        <hr />
      </div>
    </div>
  )
}
