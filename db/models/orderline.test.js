const db = require('APP/db')
const Orderline = require('./orderline')
const Order = require('./order')
const Product = require('./product')
const {expect} = require('chai')

describe('Orderline', () => {
  //clear db and make order with order_id = 1
  before('wait for the db', () => {
    return db.sync()
      .then(() => {
        return Product.create({
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
        })
      })
      .then(() => {
        return Order.create({
          status: 'pending'
        })
      }).catch(console.error)
  })

    it('includes color, quantity, size and unitPrice fields', () => {
      return Orderline.create({
        color: 'black',
        quantity: 3,
        size: 'small',
        unitPrice: 25,
        order_id: 1
      })
      .then(newOrderline => {
        expect(newOrderline.color).to.equal('black');
        expect(newOrderline.quantity).to.equal(3);
        expect(newOrderline.size).to.equal('small');
        expect(newOrderline.unitPrice).to.equal(25);
      }).catch(console.error)
    })

    it('no field can be null', () => {
      return Orderline.create({
        color: null,
        quantity: 3,
        size: 'small',
        unitPrice: 25,
        order_id: 1
      })
      .catch(result => {
        expect(result).to.be.an.instanceOf(Error);
        expect(result.message).to.contain('color cannot be null');
      })
    })

    it('has an `order_id` field', () => {
      return Orderline.create({
        color: 'black',
        quantity: 3,
        size: 'small',
        unitPrice: 25,
        order_id: 1
      })
      .then(newOrderline => {
        expect(newOrderline.order_id).to.equal(1);
      }).catch(console.error)
    })

    it('calculates the subtotal', () => {
      return Orderline.create({
        color: 'black',
        quantity: 3,
        size: 'small',
        unitPrice: 25,
        order_id: 1,
      })
      .then(newOrderline => {
        expect(newOrderline.subtotal).to.equal(75);
      }).catch(console.error)
    })

    it('returns the associated product when querying an orderline (defaultScope)', () => {
      return Orderline.create({
        color: 'black',
        quantity: 3,
        size: 'small',
        unitPrice: 25,
        order_id: 1,
        product_id: 1
      }).then(orderline => {
        return Orderline.findById(orderline.id)
      }).then((orderline) => {
        expect(orderline).to.have.property('product')
        expect(orderline.product).to.be.an('object')
        expect(orderline.product.name).to.be.equal('Thunderbird')
      }).catch(console.error)
    })

})
