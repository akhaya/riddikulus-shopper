'use strict'

const db = require('APP/db')
const api = module.exports = require('express').Router()

api
  .get('/heartbeat', (req, res) => res.send({ok: true,}))
  .use('/auth', require('./auth'))
  .use('/users', require('./users'))
<<<<<<< HEAD
  .use('/single', require('./single'))
=======
  .use('/products', require('./products'))
>>>>>>> origin/master

// No routes matched? 404.
api.use((req, res) => res.status(404).end())
