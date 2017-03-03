'use strict'

const db = require('APP/db')
const Address = require('./address')
const {expect} = require('chai')

describe('Address', () => {
  before('wait for the db', () => db.didSync)

  describe('validations and required fields', () => {
    it('includes all the fields', () =>{
      return Address.create({
        address1: '123 Street St',
        address2: 'Apt B',
        city: 'New Yawk',
        state: 'NY',
        zip: 11223,
      })
      .then(address => {
        expect(address.address1).to.equal('123 Street St')
        expect(address.address2).to.equal('Apt B')
        expect(address.city).to.equal('New Yawk')
        expect(address.state).to.equal('NY')
        expect(address.zip).to.equal(11223)
      })
    })

      it('requires the address1 field', () =>{
      return Address.create({
          city: 'New Yawk',
          state: 'NY',
          zip: 11223
      })
      .catch(err => {
        expect(err).to.be.an('object')
        expect(err.errors[0].type).to.be.equal('notNull Violation')
      })
    })

    it('requires the city field', () =>{
      return Address.create({
          address1: '123 Street St',
          state: 'NY',
          zip: 11223
      })
      .catch(err => {
        expect(err).to.be.an('object')
        expect(err.errors[0].type).to.be.equal('notNull Violation')
      })
    })

    it('requires the state field', () =>{
      return Address.create({
          address1: '123 Street St',
          city: 'New Yawk',
          zip: 11223
      })
      .catch(err => {
        expect(err).to.be.an('object')
        expect(err.errors[0].type).to.be.equal('notNull Violation')
      })
    })

    it('requires the zip field', () =>{
      return Address.create({
          city: 'New Yawk',
          address1: '123 Street St',
          state: 'NY'
      })
      .catch(err => {
        expect(err).to.be.an('object')
        expect(err.errors[0].type).to.be.equal('notNull Violation')
      })
    })


  })
})
