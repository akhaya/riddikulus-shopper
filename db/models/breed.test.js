'use strict'

const db = require('APP/db')
const Breed = require('./breed')
const {expect} = require('chai')

describe('Breed', () => {
  before('wait for the db', () => db.didSync)

  describe('validations and required fields', () => {
    it('requires a breed name', () =>{
      const breed = Breed.build()
      return breed.validate()
        .then(err => {
          expect(err).to.be.an('object')
          expect(err.errors[0].type).to.be.equal('notNull Violation')
        })
    })


  })
})
