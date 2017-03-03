'use strict'

const db = require('APP/db')
const Order = db.model('orders')
const localUserStorage = require('store')



module.exports = require('express').Router()
  .use((req, res, next) => {
    //load the local storage cart
    req.cart = localUserStorage.get('cart')
    console.log('REQ.CART:', req.cart)
    next()
  })
  .get('/cart', (req, res, next) => {
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
          console.log('NEW CART IN IF', newCart)
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
          console.log('NEW CART IN ELSE', newCart)
          localUserStorage.remove('cart')
          res.send(newCart)
        })

      }

  })
  .get('/', (req, res, next) => {
    res.send(localUserStorage.get('cart'))
  })
