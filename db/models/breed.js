'use strict'

const Sequelize = require('sequelize')
const db = require('APP/db')

const Breed = db.define('breeds', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  }

})

module.exports = Breed
