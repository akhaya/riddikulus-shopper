'use strict'

const db = require('APP/db')
const Breed = require('./breed')
const {expect} = require('chai')

describe('Breed', () => {
  before('wait for the db', () => db.didSync)

  describe('validations and required fields', () => {
    it('includes name field', () =>{
      Breed.create({
        name: 'dog',
      })
      .then(breed => {
        expect(breed.name).to.equal('dog')
      })
    })

    it('requires a breed name', () =>{
      Breed.create({})
      .catch(err => {
        expect(err).to.be.an('object')
        expect(err.errors[0].type).to.be.equal('notNull Violation')
      })
    })


  })
})
