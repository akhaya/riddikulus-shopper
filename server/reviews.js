'use strict'

const db = require('APP/db')
const User = db.model('users')
const Review = db.model('reviews')

module.exports = require('express').Router()
  .get('/product/:id', (req, res, next) => {
    Review.findAll({
      where: {
        product_id: req.params.id
      },
      include: [{
        model: User,
        attributes: ['name', 'email']
      }]
    }).then(reviews => {
      console.log(reviews)
      res.json(reviews)
    }).catch(next)
  })
  .post('/product/:id', (req, res, next) => {
    console.log(req.body)
    Review.create(req.body)
      .then(review => {
        res.json(review)
      }).catch(next)
  })
  .delete('/:id', (req, res, next) => {
    Review.destroy({
      where: {
        id: req.params.id
      }
    }).then(count =>{
      res.send('Deleted')
    }).catch(next)
  })
