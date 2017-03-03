'use strict'

const Sequelize = require('sequelize')
const db = require('APP/db')

const Address = db.define('addresses', {
  address1:{
    type: Sequelize.STRING,
    allowNull: false
  },
  address2:{
    type: Sequelize.STRING
  },
  city:{
    type: Sequelize.STRING,
    allowNull: false
  },
  state:{
    type: Sequelize.STRING,
    allowNull: false
  },
  zip:{
    type: Sequelize.INTEGER,
    allowNull: false
  }
}, {
  getterMethods: {
    fullAddress: function(){
      return `${address1}, ${address2}, ${city}, ${state} ${zip}`
    }
  }
})

module.exports = Address;
