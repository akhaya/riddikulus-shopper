'use strict'

const db = require('APP/db')
const Review = require('./review')
const {expect} = require('chai')

describe('Review', () => {
  before('wait for the db', () => db.didSync)

  describe('validations and required fields', () => {
    it('requires a review rating', () =>{
      const review = Review.build()
      return review.validate()
        .then(err => {
          expect(err).to.be.an('object')
          expect(err.errors[0].type).to.be.equal('notNull Violation')
        })
    })

    it("Rating cannot be lower than 1 or greater than 5", () => {
     const review1 = Review.build({
       rating: -1
     })
     const review2 = Review.build({
       rating: 200
     })
     return Promise.all([review1.validate(), review2.validate()])
        .then(([review1Error, review2Error]) => {
          expect(review1Error).to.be.an('object')
          expect(review1Error.errors[0].message).to.be.equal('Validation min failed')
          expect(review2Error).to.be.an('object')
          expect(review2Error.errors[0].message).to.be.equal('Validation max failed')
        })

    })
  })
})
