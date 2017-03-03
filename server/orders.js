'use strict'

const db = require('APP/db')
const Order = db.model('orders')
const Orderline = db.model('orderlines')
const localUserStorage = require('store')

module.exports = require('express').Router()
  .use((req, res, next) => {
    //load the local storage cart
    req.cart = localUserStorage.get('cart')
    next()
  })
  .get('/cart/update/:orderId/:productId', (req, res, next) => {
    Orderline.findAll({
      where: {
        order_id: req.params.orderId,
        product_id: req.params.productId,
      }
    })
    .then(([orderlineToDelete]) => {
      orderlineToDelete.destroy()
    })
    .then(() => {
      console.log('======deleted')
    })
    // .then(() => Orderline.findAll({
    //   where: {
    //     order_id: req.params.orderId
    //   }
    // }))
    // .then(newOrderline => res.json(newOrderline))
    .catch(next)
  })
  .get('/cart', (req, res, next) => {
    //guest user cart route
     if(!req.cart){
       localUserStorage.set('cart', { status: 'pending'})
       req.cart = localUserStorage.get('cart')
     }
     res.send(req.cart)
  })
  .get('/cart/:userId', (req, res, next) => {
      var cart = req.cart
      //is there a cart in local storage?
      //is it empty? if yes, then load the recent pending order or create one in db
      if(cart && cart.orderlines){
        //if the local storage cart has items, make that the pending cart for this user
        Order.create({
          status: cart.status,
          user_id: req.params.userId,
          orderlines: cart.orderlines
        }).then(newCart => {
          res.send(newCart)
        }).catch(console.error)
      } else {
        //if it is empty (does not have any orderlines added yet) or doesn't exist
        //find or create an existing pending cart for the user
        Order.findOrCreate({
          where: {
            status: 'pending',
            user_id: req.params.userId
          },
          order: [
            ['created_at', 'DESC'] //gets the most recently created order
          ],
          defaults: {
            status: 'pending',
            user_id: req.params.userId
          }
        }).spread((newCart, bool) => {
          localUserStorage.remove('cart')
          res.send(newCart)
        })

      }

  })
  // can't put any routes below the route above
  // maybe there is a parens missing?
  // check later if time

