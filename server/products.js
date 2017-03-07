'use strict'

const db = require('APP/db')
const Product = db.model('products')
const Breed = db.model('breeds')

module.exports = require('express').Router()
// serves up main page with all products
.get('/', (req, res, next) =>
     Product.findAll({
      include: [Breed]
     })
     .then(products => res.json(products))
     .catch(next))
.get('/:id', (req, res, next) => {
    Product.findById(req.params.id)
    .then(creature => {
      res.json(creature)
    })
    .catch(next)
  })
