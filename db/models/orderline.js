const Sequelize = require('sequelize')
const db = require('APP/db')
const Order = require('./order')

const Orderline = db.define('orderlines', {
  color:{
    type: Sequelize.STRING,
    allowNull: false,
  },
  quantity:{
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  size:{
    type: Sequelize.STRING,
    allowNull: false,
  },
  unitPrice:{
    type: Sequelize.INTEGER,
    allowNull: false,
  }
}, {

  getterMethods:{
    subtotal: function(){
      return this.quantity * this.unitPrice;
    }
  },

})

module.exports = Orderline
