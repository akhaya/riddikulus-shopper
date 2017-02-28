'use strict'

const Sequelize = require('sequelize')
const db = require('APP/db')

const Product = db.define('products', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  description: Sequelize.TEXT,
  color: {
    type: Sequelize.ENUM('red', 'black', 'white', 'green', 'yellow', 'blue', 'orange', 'purple', 'brown', 'pink'),
    defaultValue: 'black'
  },
  size: Sequelize.ENUM('XS', 'S', 'M', 'L', 'XL'),
  pictureURL: Sequelize.STRING,
  inventory: {
    type: Sequelize.INTEGER,
    defaultValue: 0
  },
  magicalAbilities: Sequelize.ARRAY(Sequelize.STRING),
  lifespan: {
    type:Sequelize.INTEGER,
    validate: {
      min: 0
    }
  },
  price: {
    type: Sequelize.INTEGER,
    defaultValue: 0,
    validate: {
      min: 0
    }
  } //either full galleons or in nuts. haha.
})

module.exports = Product
