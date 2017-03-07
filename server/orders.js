'use strict'

const db = require('APP/db')
const Order = db.model('orders')
const Orderline = db.model('orderlines')
const localUserStorage = require('store')
const {mustBeLoggedIn, forbidden} = require('./auth.filters')

module.exports = require('express').Router()
  .use((req, res, next) => {
    //load the local storage cart
    req.cart = localUserStorage.get('cart')
    next()
  })
  .get('/', forbidden('only admins can list all orders'), (req, res, next) => {
		Order.findAll({order: [['id', 'ASC']]})
		.then(orders => res.json(orders))
		.catch(next)
  })
  .get('/cart', (req, res, next) => {
    //guest user cart route
     if(!req.cart){
      // initial cart for guest user commented out
      // comment in when you are testing users
      localUserStorage.set('cart', { status: 'pending'})

      // local user storage cart dummy data for testing
      // comment out when you are testing users, login doesn't work with dummy data below
      // cart sidebar subtotal, tax, and total will not properly update because cart is dummy data
      // localUserStorage.set('cart', {
      //   status: 'pending',
      //   shippingCost: 150,
      //   tax: 100,
      //   subtotal:300,
      //   totalCost: 550,
      //   user_id: null,
      //   orderlines: [
      //     {
      //       id: 1,
      //       color: 'gray',
      //       quantity: 1,
      //       size: 'L',
      //       unitPrice: 500,
      //       order_id: 1,
      //       product_id: 1,
      //       subtotal: 500,
      //       product:   { name: 'Thunderbird',
      //         description: 'Flying beast that can sense danger, and create storms as it flies. Its tail feathers were used by Shikoba Wolfe to create powerful wands, particularly good for Transfiguration.',
      //         colors: ['gray', 'white', 'black', 'red'],
      //         size: 'L',
      //         pictureURL: 'https://images.pottermore.com/bxd3o8b291gf/6F2Hrc4vgASui8mcQMYKC2/88edf4f0d933a7cea6e36b9b0b66613d/Thunderbird_Fantastic_Beasts_CC_Trailer_WM.JPG?w=550&h=550&fit=thumb&f=center&q=85',
      //         inventory: 20,
      //         magicalAbilities: ['weather manipulation', 'fear sensing', 'flying'],
      //         lifespan: 60,
      //         price: 2000,
      //         breed_id:1
      //       }
      //     },
      //     {
      //       id: 2,
      //       color: 'white',
      //       quantity: 1,
      //       size: 'M',
      //       unitPrice: 100,
      //       order_id: 2,
      //       product_id: 4,
      //       subtotal: 100,
      //       product: { name: 'Bowtruckles',
      //         description: 'A small twig-like creature that guards wand-wood trees.',
      //         colors: ['green', 'brown'],
      //         size: 'XS',
      //         pictureURL: 'https://images.pottermore.com/bxd3o8b291gf/CHqGFAIkwK2y2meEMgQAY/9562ab7cb3f75af827bd4c3ffa1c2eea/FTB203_FANTASTIC_BEASTS_AND_WHERE_TO_FIND_THEM_A_NEW_HERO_FEATURETTE_2255.jpg?w=550&h=550&fit=thumb&f=center&q=85',
      //         inventory: 100,
      //         magicalAbilities: ['natural camouflage'],
      //         lifespan: 5,
      //         price: 100,
      //         breed_id: 2
      //       }
      //     },
      //     {
      //       id: 3,
      //       color: 'black',
      //       quantity: 1,
      //       size: 'L',
      //       unitPrice: 150,
      //       order_id: 2,
      //       product_id: 3,
      //       subtotal: 150,
      //       product: { name: 'Niffler',
      //         description: 'Long-snouted, burrowing creatures native to Britain with a penchant for anything shiny.',
      //         colors: ['brown', 'white', 'black'],
      //         size: 'S',
      //         pictureURL: 'https://images.pottermore.com/bxd3o8b291gf/3x8xkyxFqU0w6WaMAuUmsK/69b6776507fba83b3f90a4c59475440c/FB-TRL2-niffler_alt.jpg?w=550&h=550&fit=thumb&f=center&q=85',
      //         inventory: 100,
      //         magicalAbilities: ['flying'],
      //         lifespan: 10,
      //         price: 150,
      //         breed_id: 4
      //       }
      //     },
      //   ],
      // })
      req.cart = localUserStorage.get('cart')

     }
     res.send(req.cart)
  })
  .post('/cart/add', (req, res, next) => {
    // user cart: add/update orderline
    // check if orderline alredy exists for the item
    Orderline.findOrCreate({
      where: {
        product_id: req.body.productId,
        order_id: req.body.orderId,
        color: req.body.color,
      }
    })
    .spread((orderline, created) => {
      // if orderline was created and did not exist before
      if (created) {
        orderline.quantity = req.body.quantity
        orderline.unitPrice = req.body.price
        orderline.size = req.body.size
      } else {
      // if orderline already existed
        orderline.quantity = orderline.quantity + req.body.quantity
      }
      return orderline.save()
    })
    .then(orderline => res.json(orderline))
    .catch(next)
  })
  .post('/cart/add/guest', (req, res, next) => {
    //guest cart: add/update orderline
    let cart = localUserStorage.get('cart')
    cart.orderlines = cart.orderlines || []

    let existingOrderline = cart.orderlines.filter(orderline => {
      return orderline.product_id === req.body.productId
              && orderline.color === req.body.color
    })

    let newOrderline = {}
    // if orderline did not exist
    if (existingOrderline.length === 0) {
      newOrderline.id = cart.orderlines.length + 1
      newOrderline.product_id = req.body.productId
      newOrderline.color = req.body.color
      newOrderline.quantity = req.body.quantity
      newOrderline.unitPrice = req.body.price
      newOrderline.size = req.body.size
      newOrderline.subtotal = newOrderline.quantity * newOrderline.unitPrice
      newOrderline.product = req.body.product

      cart.orderlines.push(newOrderline)
    } else {
    // if orderline already existed
      newOrderline = existingOrderline[0]
      newOrderline.quantity += req.body.quantity
      newOrderline.subtotal = newOrderline.quantity * newOrderline.unitPrice

      cart.orderlines = cart.orderlines.map(orderline => {
        if (orderline.product_id === req.body.productId
              && orderline.color === req.body.color) {
          return newOrderline
        } else {
          return orderline
        }
      })
    }
    localUserStorage.set('cart', cart)
    res.json(newOrderline)
  })
  .delete('/cart/delete/guest/:orderlineId', (req, res, next) => {
    // guest cart: delete orderline and load the updated order
    let guestCart = req.cart
    guestCart.orderlines = guestCart.orderlines.filter(orderline => {
      return orderline.id !== +(req.params.orderlineId)
    })
    localUserStorage.set('cart', guestCart)
    // not sure if I needed to use req.cart in any way? seems to work with just store.js
    res.send(guestCart)
  })
  .put('/cart/update/guest/:orderlineId', (req, res, next) => {
    // guest cart: update product order/quantity on orderline and load the updated order
    let guestCart = localUserStorage.get('cart')
    guestCart.orderlines = guestCart.orderlines.map(orderline => {
      if (orderline.id === +(req.params.orderlineId)) {
        if (req.body.color) {
          orderline.color = req.body.color
        }
        if (req.body.quantity) {
          orderline.quantity = req.body.quantity
        }
      }
      return orderline
    })
    localUserStorage.set('cart', guestCart)
    res.send(guestCart)
  })
  // check if local storage is updating correctly
  // .get('/TEST', (req, res, next) => {
  //   let guestCart = localUserStorage.get('cart')
  //   res.send(guestCart)
  // })
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
        .catch(console.error)
      }
  })
  .delete('/cart/delete/:userId/:orderId/:productId', (req, res, next) => {
    // user cart: delete product from orderline and load the updated order

    // not sure if this is RESTful but couldn't think of another way to make sure the new order rendered after the delete
    // let me know if you have suggestions
    Orderline.findOne({
      where: {
        order_id: req.params.orderId,
        product_id: req.params.productId,
      }
    })
    .then((orderlineToDelete) => {
      orderlineToDelete.destroy()
    })
    .then(() => {
      return Order.findOne({
        where: {
          user_id: req.params.userId,
          status: 'pending',
        }
      })
    })
    .then(updatedOrder => {
      res.json(updatedOrder)
    })
    .catch(next)
  })
  .put('/cart/update/:userId/:orderId/:productId', (req, res, next) => {
    // user cart: update product color/quantity on orderline and load the updated order

    //  not sure if RESTful, any suggestions welcome
    Orderline.findOne({
      where: {
        order_id: req.params.orderId,
        product_id: req.params.productId,
      }
    })
    .then((orderlineToUpdate) => {
      return orderlineToUpdate.update({
        color: req.body.color,
        quantity: req.body.quantity,
      })
    })
    .then(() => {
      return Order.findOne({
        where: {
          user_id: req.params.userId,
          status: 'pending',
        }
      })
    })
    .then(updatedOrder => {
      res.json(updatedOrder)
    })
    .catch(next)
  })
  .post('/:id/update', forbidden('only admins can update orders'), (req, res, next) => {
    Order.findById(req.params.id)
      .then(order => {
        return order.update(req.body)
      }).then((updatedOrder) => res.json(updatedOrder) )
  })
  .delete('/:id', forbidden('only admins can delete orders'), (req, res, next) => {
		Order.destroy({
      where: {
        id: req.params.id
      }
    })
		.then(results => {
			res.send(req.params.id)
		})
		.catch(next)
  })
