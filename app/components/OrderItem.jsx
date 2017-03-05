import React, {Component} from 'react'

class OrderItem extends Component {
  constructor(props) {
    super(props)

    this.handleDelete = this.handleDelete.bind(this)
  }

  handleDelete (event) {
    event.preventDefault()
    console.log('===here', this.props)
    // if user is guest
    if (!this.props.user_id) {
      const orderlineId = this.props.orderline.id
      this.props.handleGuestDelete(orderlineId)
    }
    // put user handle delete in else statement below

  }

  render() {
    const product = this.props.orderline.product
    const orderline = this.props.orderline

    return (
      <div className="panel panel-default">
        <div className="panel-body">
          <div className="row">

            <div className="col-md-4">
              <img className="img-thumbnail cart" src={product.pictureURL} />
            </div>

            <div className="col-md-4">
              <dl>
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
                  {this.props.errorMessage}
                </dd>
              </dl>
              <button className="btn btn-default" type="submit" onClick={this.handleDelete}>Delete</button>
              <button className="btn btn-default" type="submit">Update</button>
            </div>

          </div>
        </div>
      </div>
    )
  }
}

export default OrderItem
