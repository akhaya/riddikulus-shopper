'use strict';

// Require our models. Running each module registers the model into sequelize
// so any other part of the application could call sequelize.model('User')
// to get access to the User model.

const User = require('./user')
const OAuth = require('./oauth')
const Order = require('./order')
const Orderline = require('./orderline')

OAuth.belongsTo(User)
User.hasOne(OAuth)
Orderline.belongsTo(Order)
//Orderline.belongsTo(Product)
Order.belongsToMany(Orderline, {through: 'order_orderline'})
// Product.hasMany(Orderline)
module.exports = {User, Order, Orderline}

