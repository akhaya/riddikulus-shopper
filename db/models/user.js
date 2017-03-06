'use strict'

// bcrypt docs: https://www.npmjs.com/package/bcrypt
const bcrypt = require('bcryptjs')
const Sequelize = require('sequelize')
const db = require('APP/db')

const User = db.define('users', {
  name: Sequelize.STRING,
  email: {
    type: Sequelize.STRING,
    validate: {
			isEmail: true,
			notEmpty: true,
		}
  },

  // We support oauth, so users may or may not have passwords.
  password_digest: Sequelize.STRING, // This column stores the hashed password in the DB, via the beforeCreate/beforeUpdate hooks
	password: Sequelize.VIRTUAL, // Note that this is a virtual, and not actually stored in DB
  isGuest: {
    type: Sequelize.BOOLEAN,
    defaultValue: true
  },
  isAdmin: {
    type: Sequelize.BOOLEAN,
    defaultValue: false
  },
  status: {
    type: Sequelize.ENUM('active', 'inactive')
  }
}, {
	indexes: [{fields: ['email'], unique: true}],
  hooks: {
    beforeCreate: setEmailAndPassword,
    beforeUpdate: setEmailAndPassword,
  },
  instanceMethods: {
    // This method is a Promisified bcrypt.compare
    authenticate(plaintext) {
      return new Promise((resolve, reject) =>
        bcrypt.compare(plaintext, this.password_digest,
          (err, result) =>
            err ? reject(err) : resolve(result))
        )
    },
    deactivateUser() {
      this.set('status', 'inactive')
      this.set('password_digest', null)
      this.set('isGuest', true)
      this.set('isAdmin', false)
      this.set('password', null)
      return this.save()
    },
    toggleAdmin(){
      const newStatus = !this.isAdmin
      return this.set('isAdmin', newStatus).save()
    }
  }
})

function setEmailAndPassword(user) {
  user.email = user.email && user.email.toLowerCase()
  if (!user.password) return Promise.resolve(user)

  return new Promise((resolve, reject) =>
	  bcrypt.hash(user.get('password'), 10, (err, hash) => {
		  if (err) reject(err)
		  user.set('password_digest', hash)
      resolve(user)
	  })
  )
}

module.exports = User
