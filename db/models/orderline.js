const Sequelize = require('sequelize')
const db = require('APP/db')
const Order = require('./order')
const Product = require('./product')

// some attributes have been made optional in order to do Orderline.findOrCreate (with certain attributes) in routes
const Orderline = db.define('orderlines', {
  color:{
    type: Sequelize.STRING,
    allowNull: false,
  },
  quantity:{
    type: Sequelize.INTEGER,
    // allowNull: false,
  },
  size:{
    type: Sequelize.STRING,
    // allowNull: false,
  },
  unitPrice:{
    type: Sequelize.INTEGER,
    // allowNull: false,
  }
}, {
  getterMethods: {
    subtotal: function(){
      return this.quantity * this.unitPrice;
    }
  },
  defaultScope: {
    /*Eager loading with include or default query - always applied when querying for this model.
    AN OBJECT*/
    include: [ Product ]
  }
})

module.exports = Orderline
