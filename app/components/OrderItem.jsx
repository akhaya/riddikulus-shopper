import React from 'react'

export default (props) => {
  const product = props.orderline.product;
  const orderline = props.orderline
  return (
    <div className="row">

      <div className="col-md-4">
        <img className="img-thumbnail" src={product.pictureURL} />
      </div>

      <div className="col-md-4">
        <dl class="dl-horizontal">
          <dt>Description:</dt>
          <dd>{product.description}</dd>
          <dt>Size</dt>
          <dd>{product.size}</dd>
        </dl>
      </div>

      <div className="col-md-4">
        <dl class="dl-horizontal">
          <dt>Price</dt>
          <dd>{product.price}</dd>
          <dt>Color</dt>
          <dd>
            <select value={orderline.color} name="color" id="color" className="form-group" >
              {product.colors.map(color => <option value={color} key={color}>{color}</option>)}
            </select>
          </dd>
          <dt>Quantity</dt>
          <dd>
            <input type="text" className="form-control" id="quantity" name="quantity" placeholder="Amount" />
          </dd>
        </dl>
      </div>

    </div>

  )
}
