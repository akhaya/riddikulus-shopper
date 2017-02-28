'use strict'

const db = require('APP/db')
const Order = require('./order')
const {expect} = require('chai')

describe('Order', () => {
  before('wait for the db', () => db.didSync)



    describe('Order Model', () => {

      // This assertion expects that the Order model will put a `status` column in the messages table.
      it('has status as part of definition', () => {

        expect(Order.attributes.status).to.be.an('object');
      }),

      it('has a user_id', () => {
        Order.create({
          user_id: 1
        })
        .then(newOrder => {
          expect(newOrder.user_id).to.be(1)
        })

      })


    });
})
