'use strict'

const db = require('APP/db')
const Review = require('./review')
const {expect} = require('chai')

describe('Review', () => {
  before('wait for the db', () => db.didSync)

  describe('validations and required fields', () => {
    it('includes rating and body fields', () =>{
      Review.create({
        rating: 5,
        body: 'I love my creature!',
      })
      .then(review => {
        expect(review.rating).to.equal(5)
        expect(review.body).to.equal('I love my creature!')
      })
    })

    it('requires a review rating', () =>{
      Review.create({})
      .catch(err => {
        expect(err).to.be.an('object')
        expect(err.errors[0].type).to.be.equal('notNull Violation')
        })

    })

    it("Rating cannot be lower than 1", () => {
      Review.create({
       rating: -1
      })
      .catch(err => {
        expect(err).to.be.an('object')
        expect(err.errors[0].message).to.be.equal('Validation min failed')
      })
    })

    // made rating min and mix into tests because I didn't know how to catch 2 errors from a Promise.all
    it("Rating cannot be greater than 5", () => {
      Review.create({
       rating: 200
      })
      .catch(err => {
        expect(err).to.be.an('object')
        expect(err.errors[0].message).to.be.equal('Validation max failed')
      })
    })

  })
})
