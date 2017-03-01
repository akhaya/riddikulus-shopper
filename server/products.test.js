const request = require('supertest-as-promised')
const {expect} = require('chai')
const db = require('APP/db')
const Product = require('APP/db/models/product')
const app = require('./start')

describe('/api/products', () => {
  it('serves up all products on request to GET /', () =>
    request(app)
      .get('/api/products')
      .expect(200)
  )
})
