import React, {Component} from 'react'

class OrderItem extends Component {
  constructor(props) {
    super(props)
    this.state = {
      newColor: '',
      currentQuantity: this.props.orderline.quantity,
    }
    this.handleDelete = this.handleDelete.bind(this)
    this.handleUpdate = this.handleUpdate.bind(this)
    this.onColorChange = this.onColorChange.bind(this)
    this.onQuantityChange = this.onQuantityChange.bind(this)
  }

  handleDelete (event) {
    event.preventDefault()
    // if user is guest
    if (!this.props.userId) {
      const orderlineId = this.props.orderline.id
      this.props.handleGuestDelete(orderlineId)
    } else {
    // if user is logged in
      const userId = this.props.userId
      const orderId = this.props.orderline.order_id
      const productId = this.props.orderline.product_id
      this.props.handleUserDelete(userId, orderId, productId)
    }
  }

  // this updates the orderline view and database correctly but the orderlines render in a different order from before
  handleUpdate (event) {
    event.preventDefault()
    const newColor = this.state.newColor
    const newQuantity = this.state.currentQuantity

    // if user is guest
    if (!this.props.userId) {
      const orderlineId = this.props.orderline.id
      if (newColor !== '' || newQuantity !== this.props.orderline.quantity) {
        this.props.handleGuestUpdate(orderlineId, newColor, newQuantity)
      }
    } else {
      // if user is logged in
      const orderId = this.props.orderline.order_id
      const productId = this.props.orderline.product_id
      const userId = this.props.userId
      if (newColor !== '' || newQuantity !== this.props.orderline.quantity) {
        this.props.handleUserUpdate(userId, orderId, productId, newColor, newQuantity)
      }
    }
  }

  onColorChange (event) {
    event.preventDefault()
    this.setState({newColor: event.target.value})
  }

  onQuantityChange (event) {
    event.preventDefault()
    let newQuantity
    const inventory = this.props.orderline.product.inventory
    // user can only increase quantity up to current inventory
    if (event.target.value === 'increase' && this.state.currentQuantity < inventory) {
      newQuantity = this.state.currentQuantity + 1
      this.setState({currentQuantity: newQuantity})
    }
    // user can only decrease quantity down to 1
    // user cannot decrease quantity to 0 because this is equivalent of deleting an order item
    if (event.target.value === 'decrease' && this.state.currentQuantity > 1) {
      newQuantity = this.state.currentQuantity - 1
      this.setState({currentQuantity: newQuantity})
    }
  }

  render() {
    console.log('===orderitem', this.props)
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
                  {/* tag doesn't show new option when clicked, if time fix */}
                  <select value={orderline.color} name="color" id="color" className="form-group" onChange={this.onColorChange}>
                    {product.colors.map(color => <option value={color} key={color}>{color}</option>)}
                  </select>
                </dd>
                <dt>Quantity</dt>
                <dd>
                  <button className="btn btn-default btn-circle" value="decrease" onClick={this.onQuantityChange}>-</button>
                  { this.state.currentQuantity }
                  <button className="btn btn-default btn-circle" value="increase" onClick={this.onQuantityChange}>+</button>
                </dd>
              </dl>
              <button className="btn btn-default" type="submit" onClick={this.handleDelete}>Delete</button>
              <button className="btn btn-default" type="submit" onClick={this.handleUpdate}>Update</button>
            </div>

          </div>
        </div>
      </div>
    )
  }
}

export default OrderItem
