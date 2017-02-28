const db = require('APP/db')
const Orderline = require('./orderline')
const {expect} = require('chai')

describe('Orderline', () => {
  before('wait for the db', () => db.didSync)


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
      })
    }),

    it('no field can be null', () => {
      Orderline.create({
        color: null,
        quantity: 3,
        size: 'small',
        unitPrice: 25,
        order_id: 1
      })
      .then(result => {
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
        expect(newOrderline.order_id).to.be(1);
      })
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
      })
    })

})
