'use strict'

const db = require('APP/db')
const Order = require('./order')
const Orderline = require('./orderline')
const User = require('./user')
const {expect} = require('chai')

describe('Order Model', () => {
  before('wait for the db', () => db.didSync)

    var order1;

    beforeEach('create an order with some orderlines', () => {
      order1 = Order.create({
        status: 'pending'
      })
      // let order2 = Order.create({
      //   status: 'pending'
      // })

      // return Promise.all(order1, order2);
    })

      // This assertion expects that the Order model will put a `status` column in the messages table.
      it('has status as part of definition', () => {
        expect(Order.attributes.status).to.be.an('object');
      })

      it('has a user_id', () => {
        let userId
        User.create({
          name:'blah',
          email: 'blah@blah.com'
        }).then(user => {
          userId=user.id
          return Order.create({
            user_id: user.id
          })
        }).then(newOrder => {
            expect(newOrder.user_id).to.equal(userId)
        })

      })

})
