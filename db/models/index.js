'use strict';

// Require our models. Running each module registers the model into sequelize
// so any other part of the application could call sequelize.model('User')
// to get access to the User model.

const User = require('./user')
const OAuth = require('./oauth')
const Order = require('./order')
const Orderline = require('./orderline')
const Product = require('./product')
const Breed = require('./breed')
const Address = require('./address')
const Review = require('./review')

OAuth.belongsTo(User)
User.hasOne(OAuth)

Orderline.belongsTo(Order)
Orderline.belongsTo(Product)
Order.hasMany(Orderline)
Product.hasMany(Orderline)
Order.belongsTo(User)
Order.belongsTo(Address)
Address.hasMany(Order)
// adds breed id on product
// gives product getBreed, setBreed, removeBreed
Product.belongsTo(Breed)

// adds breed id to product (already exists)
// gives breed a getProducts, setProducts, addProduct
Breed.hasMany(Product)

// adds product id to review
// gives product getReview, addReview
Product.hasMany(Review)

// adds user id column on review
// gives review getUser, setUser, removeUser
Review.belongsTo(User)

module.exports = {User, Product, Breed, Order, Orderline, Address}
