const db = require('APP/db')
const Product = db.model('products')

module.exports = require('express').Router()
  .get('/:id', (req, res, next) => {
    Product.findById(req.params.id)
    .then(creature => {
      res.json(creature)
    })
    .catch(next)
  })
