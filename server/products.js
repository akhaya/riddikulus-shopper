'use strict'

const db = require('APP/db')
const Product = db.model('products')

module.exports = require('express').Router()
// serves up main page with all products
.get('/', (req, res, next) =>
     Product.findAll()
     .then(products => res.json(products))
     .catch(next))
