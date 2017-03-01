import React, { Component } from 'react'
import {connect} from 'react-redux'
import OrderItem from '../components/OrderItem'

const dummyData = [{
    color: 'red',
    quantity: 1,
    size: 'L',
    unitPrice: 500,
    order_id: 1,
    product_id: 1,
    product:
    {
      name: 'Thunderbird',
      description: 'Flying beast that can sense danger, and create storms as it flies. Its tail feathers were used by Shikoba Wolfe to create powerful wands, particularly good for Transfiguration.',
      colors: ['gray', 'white', 'black', 'red'],
      size: 'L',
      pictureURL: 'https://images.pottermore.com/bxd3o8b291gf/6F2Hrc4vgASui8mcQMYKC2/88edf4f0d933a7cea6e36b9b0b66613d/Thunderbird_Fantastic_Beasts_CC_Trailer_WM.JPG?w=550&h=550&fit=thumb&f=center&q=85',
      inventory: 20,
      magicalAbilities: ['weather manipulation', 'fear sensing', 'flying'],
      lifespan: 60,
      price: 2000,
      breed_id:1
    },

  }]


export default class CartContainer extends Component {
  render(){
    return (
      <div className="container">
        <h3>Cart</h3>
        <div className="row">
          <div className="col-md-9">
            {dummyData.map(orderline => <OrderItem orderline={orderline} key={orderline.name} />)}
          </div>
          <div className="col-md-3">
            dummy
          </div>
        </div>
      </div>
    )
  }
}

