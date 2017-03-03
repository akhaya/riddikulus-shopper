import React from 'react'

export default ({orderTotals}) => {
  return (
    <div className="panel panel-default">
      <div className="panel-heading">
        <h3 className="panel-title">Order Total</h3>
      </div>
      <div className="panel-body">
        <dl className="dl-horizontal">
          <dt>Subtotal:</dt>
          <dd>{orderTotals.subtotal}</dd>
          <dt>Tax</dt>
          <dd>{orderTotals.tax}</dd>
          <dt>Shipping</dt>
          <dd>{orderTotals.shipping}</dd>
        </dl>
      </div>
      <div className="panel-footer">
        <dl className="dl-horizontal">
          <dt>Total:</dt>
          <dd>{orderTotals.total}</dd>
        </dl>
      </div>
    </div>
  )
}
