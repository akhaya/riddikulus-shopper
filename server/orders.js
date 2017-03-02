'use strict'

const db = require('APP/db')
const Order = db.model('orders')
const Orderline = db.model('orderlines')

const errorHandling = console.error.bind(console)

module.exports = require('express').Router()
  .get('/cart', (req, res, next) => {
    if(!req.session.cart){
      req.session.cart = {
        status: 'pending'
      }
    }
    res.send(req.session.cart)
  })
  .get('/cart/:id', (req, res, next) => {
    Order.findOrCreate({
      where: {
        status: 'pending',
        user_id: req.params.id
      }
    }).spread((cart, bool) => {
      res.send(cart)
    }).catch(errorHandling)
  })
  .get('/', (req, res, next) => {
    console.log(req.session.cart)
    res.send('OK')
  })
