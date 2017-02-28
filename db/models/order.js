const Sequelize = require('sequelize')
const db = require('APP/db')


const Order = db.define('orders', {
  orderDate: {
    // is this necessary if we have a created_at we can use??
    type: Sequelize.DATE,
  },
  status:{
    // only admin should be able to change the status
    type: Sequelize.ENUM,
    values: ['processing', 'shipped', 'delivered']
  },
})

module.exports = Order
