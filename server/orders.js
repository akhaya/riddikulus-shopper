'use strict'

const db = require('APP/db')
const Order = db.model('orders')
const Orderline = db.model('orderlines')


module.exports = require('express').Router()
  .get('/', (req, res, next) => {
  console.log(req.sessionCookies)
  res.send('OK')
})
