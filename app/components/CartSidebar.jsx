import React from 'react'

export default (props) => {
  return (
    <div className="panel panel-default">
      <div className="panel-heading">
        <h3 className="panel-title">Order Total</h3>
      </div>
      <div className="panel-body">
        <dl className="dl-horizontal">
          <dt>Subtotal:</dt>
          <dd>1,200</dd>
          <dt>Tax</dt>
          <dd>80</dd>
          <dt>Shipping</dt>
          <dd>9-</dd>
        </dl>
      </div>
      <div className="panel-footer">
        <dl className="dl-horizontal">
          <dt>Total:</dt>
          <dd>total dummy</dd>
        </dl>
      </div>
    </div>
  )
}
