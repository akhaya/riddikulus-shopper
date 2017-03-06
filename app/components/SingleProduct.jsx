import React, {Component} from 'react'
import _ from 'lodash'
import {convertPrice} from '../utils'
import {Link} from 'react-router'

class SingleProduct extends Component {
  constructor(props) {
    super(props)

    this.state = {
      color: '',
      quantity: 1,
      addedToCart: false,
    }

    this.onColorChange = this.onColorChange.bind(this)
    this.onQuantityChange = this.onQuantityChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  onColorChange (event) {
    event.preventDefault()
    this.setState({color: event.target.value})
  }

  onQuantityChange (event) {
    event.preventDefault()
    this.setState({quantity: event.target.value})
  }

  handleSubmit (event) {
    event.preventDefault()
    // user must choose color before adding to cart
    // quantity defaults to 1 if user doesn't select quantity
    if (this.state.color !== '') {
      console.log('======')
      this.setState({addedToCart: true})
      const color = this.state.color
      const quantity = this.state.quantity
      const productId = this.props.product.id
      const orderId = this.props.cart.id
      const price = this.props.product.price
      const size = this.props.product.size
      const product = this.props.product
      if (!this.props.cart.user_id) {
        this.props.handleGuestAdd(product, color, quantity, productId, price, size)
      } else {
        this.props.handleUserAdd(color, quantity, productId, orderId, price, size)
      }
    }
  }

  render() {
    const animal = this.props.product
    if (!animal) return null
    const quantity = _.range(1, animal.inventory);
    const addedItemToCartMessage = (
      <div className="panel panel-default">
        <div className="panel-body">
          <h5>You've added {this.state.quantity} {this.state.color} {animal.name}{this.state.quantity > 1 ? 's' : ''} to your cart!</h5>
          <h5>Go to your <Link to='/cart'>cart</Link>.</h5>
        </div>
      </div>
      )
    const noMessage = (<div></div>)
    return(
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-4">
            <img src={animal.pictureURL} />
          </div>
          <div className="col-sm-6">
            <div>
              <h1> Name: {animal.name} </h1>
              <h1> Price: </h1>
              <h4>  {animal.price}  </h4>
              <h1> Profile:</h1>
              <h4> {animal.description} </h4>
              <h4> Colors </h4>
              <select onChange={this.onColorChange}>
                {/* added a blank option because didn't know how to automatically set local state to the this.props.product.color[0] */}
                <option> </option>
                {
                  animal.colors.map((color, id) => {
                    return <option key={id} value={color}> {color}</option>
                  })
                }
              </select>
              <h4> Quantity </h4>
              {
                <select onChange={this.onQuantityChange}>
                  {
                    quantity.map(num => {
                      return <option key={num} value={num}> {num}</option>
                    })
                  }
                </select>
              }
              <div>
                  <button type="button" className="btn btn-default" aria-label="Left Align" onClick={this.handleSubmit}>
                    <div className="glyphicon glyphicon-shopping-cart" aria-hidden="true"></div>
                  </button>
              </div>
              {this.state.addedToCart ? addedItemToCartMessage : noMessage}
            </div>
          </div>
        </div>
        <div className='row'>
          <div className="col-sm-8">
            <h1> Reviews </h1>
              <div className="panel panel-default">
                <div className="panel-body">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                  quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                  consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                  proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </div>
              </div>
            </div>
          <div className="col-sm-4">
            <h1> User Photos </h1>
              <div className="col-sm-5">
                <img className='thumbnail thumbnailImg' src={animal && animal.pictureURL} />
              </div>
              <div className="col-sm-5">
                <img className='thumbnail thumbnailImg' src={animal && animal.pictureURL} />
              </div>
              <div className="col-sm-5">
                <img className='thumbnail thumbnailImg' src={animal && animal.pictureURL} />
              </div>
              <div className="col-sm-5">
                <img className='thumbnail thumbnailImg' src={animal && animal.pictureURL} />
              </div>
          </div>
        </div>
      </div>

    )

  }
}

export default SingleProduct
