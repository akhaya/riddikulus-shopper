import React from 'react'

export default (props) => {
  const product = props.orderline.product
  if (!product) return null
  const orderline = props.orderline
  const orderId = orderline.order_id
  const productId = orderline.product_id
  const userId = props.userId
  const handleDelete = (event) => {
    event.preventDefault();
    props.handleDelete(userId, orderId, productId)
  }

  return (
    <div className="panel panel-default">
      <div className="panel-body">
        <div className="row">

          <div className="col-md-4">
            <img className="img-thumbnail cart" src={product.pictureURL} />
          </div>

          <div className="col-md-4">
            <dl>
              <dt>Name:</dt>
              <dd>{product.name}</dd>
              <dt>Description:</dt>
              <dd>{product.description}</dd>
              <dt>Size</dt>
              <dd>{product.size}</dd>
            </dl>
          </div>

          <div className="col-md-4">
            <dl>
              <dt>Price</dt>
              <dd>  {product.price}  </dd>
              <dt>Color</dt>
              <dd>
                <select value={orderline.color} name="color" id="color" className="form-group" >
                  {product.colors.map(color => <option value={color} key={color}>{color}</option>)}
                </select>
              </dd>
              <dt>Quantity</dt>
              <dd>
                <button className="btn btn-default btn-circle">-</button>
                { orderline.quantity }
                <button className="btn btn-default btn-circle">+</button>
              </dd>
              <dd>
                {props.errorMessage}
              </dd>
            </dl>
            <button className="btn btn-default" type="submit" onClick={handleDelete}>Delete</button>
            <button className="btn btn-default" type="submit">Update</button>
          </div>

        </div>
      </div>
    </div>
  )
}
