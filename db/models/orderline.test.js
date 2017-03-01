const db = require('APP/db')
const Orderline = require('./orderline')
const Order = require('./order')
const {expect} = require('chai')

describe('Orderline', () => {
  //clear db and make order with order_id = 1
  before('wait for the db', () => {
    return db.sync({force: true})
      .then(() => {
        return Order.create({
          status: 'pending'
        })
      })
  })

    it('includes color, quantity, size and unitPrice fields', () => {
      Orderline.create({
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
      }).catch(console.log)
    })

    it('no field can be null', () => {
      Orderline.create({
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
      Orderline.create({
        color: 'black',
        quantity: 3,
        size: 'small',
        unitPrice: 25,
        order_id: 1
      })
      .then(newOrderline => {
        expect(newOrderline.order_id).to.equal(1);
      }).catch(console.log)
    })

    it('calculates the subtotal', () => {
      Orderline.create({
        color: 'black',
        quantity: 3,
        size: 'small',
        unitPrice: 25,
        order_id: 1,
      })
      .then(newOrderline => {
        expect(newOrderline.subtotal).to.equal(75);
      }).catch(console.log)
    })

})
