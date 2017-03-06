'use strict'

const db = require('APP/db')
const User = require('./user')
const {expect} = require('chai')

describe('User', () => {
  before('wait for the db', () => db.didSync)

  describe('authenticate(plaintext: String) ~> Boolean', () => {
    it('resolves true if the password matches', () =>
      User.create({ password: 'ok' })
        .then(user => user.authenticate('ok'))
        .then(result => expect(result).to.be.true))

    it("resolves false if the password doesn't match", () =>
      User.create({ password: 'ok' })
        .then(user => user.authenticate('not ok'))
        .then(result => expect(result).to.be.false))
  })
  describe('deactivateUser() instance method', () =>{
    it('updates the user status, isGuest, isAdmin and password_digest fields', () => {
      User.create({
        email: 'test@test.com',
        password: 'hihi',
        isGuest: false,
        isAdmin: true
      }).then(user => {
        return user.deactivateUser()
      }).then(updatedUser => {
        expect(updatedUser.status).to.equal('inactive')
        expect(updatedUser.password_digest).to.equal(null)
        expect(updatedUser.isGuest).to.be.true
        expect(updatedUser.isAdmin).to.be.false
      })
      .catch(console.error)
    })
  })
  describe('setAdmin() instance method', () =>{
    it('sets isAdmin field to true', () => {
      User.create({
        email: 'test2@test.com',
        password: 'hihi',
        isAdmin: false
      }).then(user => {
        return user.setAdmin()
      }).then(updatedUser => {
        expect(updatedUser.isAdmin).to.be.true
      })
      .catch(console.error)
    })
  })
})
