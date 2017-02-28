'use strict'

const db = require('APP/db')
const Product = require('./product')
const {expect} = require('chai')

describe('Product', () => {
  before('wait for the db', () => db.didSync)

  describe('validations and required fields', () => {
    it('requires a product name', () =>{
      const product = Product.build()
      return product.validate()
        .then(err => {
          expect(err).to.be.an('object')
          expect(err.errors[0].type).to.be.equal('notNull Violation')
        })
    })


    it("price and inventory defaults to 0", () => {
     const product = Product.build({
       name: 'Phoenix',
       description: 'Blah blah',
       color: 'red',
       size: 'M',
       lifespan: 6
     })
     expect(product.price).to.be.equal(0)
     expect(product.inventory).to.be.equal(0)

    })

    it("Price cannot be lower than 0", () => {
     const product = Product.build({
       name: 'Phoenix',
       description: 'Blah blah',
       color: 'red',
       size: 'M',
       lifespan: 6,
       price: -20
     })
     return product.validate()
        .then(err => {
          expect(err).to.be.an('object')
          expect(err.errors[0].message).to.be.equal('Validation min failed')
        })

    })
  })
})
