const db = require('APP/db')

const seedUsers = () => db.Promise.map([
  {name: 'so many', email: 'god@example.com', password: '1234'},
  {name: 'Barack Obama', email: 'barack@example.gov', password: '1234'},
], user => db.model('users').create(user))

const seedProducts = () => db.Promise.map([
  { name: 'Thunderbird',
    description: 'Flying beast that can sense danger, and create storms as it flies. Its tail feathers were used by Shikoba Wolfe to create powerful wands, particularly good for Transfiguration.',
    colors: ['gray', 'white', 'black', 'red'],
    size: 'L',
    pictureURL: 'https://images.pottermore.com/bxd3o8b291gf/6F2Hrc4vgASui8mcQMYKC2/88edf4f0d933a7cea6e36b9b0b66613d/Thunderbird_Fantastic_Beasts_CC_Trailer_WM.JPG?w=550&h=550&fit=thumb&f=center&q=85',
    inventory: 20,
    magicalAbilities: ['weather manipulation', 'fear sensing', 'flying'],
    lifespan: 60,
    price: 2000,
    breed_id:1
  },
  { name: 'Bowtruckles',
    description: 'A small twig-like creature that guards wand-wood trees.',
    colors: ['green', 'brown'],
    size: 'XS',
    pictureURL: 'https://images.pottermore.com/bxd3o8b291gf/CHqGFAIkwK2y2meEMgQAY/9562ab7cb3f75af827bd4c3ffa1c2eea/FTB203_FANTASTIC_BEASTS_AND_WHERE_TO_FIND_THEM_A_NEW_HERO_FEATURETTE_2255.jpg?w=550&h=550&fit=thumb&f=center&q=85',
    inventory: 100,
    magicalAbilities: ['natural camouflage'],
    lifespan: 5,
    price: 100,
    breed_id: 2
  },
  { name: 'Hippogriffs',
    description: 'Half horse, half eagle creatures, immensely proud and extremely dangerous.',
    colors: ['brown', 'white', 'black', 'silver'],
    size: 'L',
    pictureURL: 'https://images.pottermore.com/bxd3o8b291gf/4QbMOZOaww8YAMWaoOuAys/d3368834aa24b460d375f10774c55fea/Buckbeak_WB_F3_ConceptOfHarryRidingFlyingBuckbeak_Illust_100615_Land.jpg?w=550&h=550&fit=thumb&f=center&q=85',
    inventory: 50,
    magicalAbilities: ['flying'],
    lifespan: 70,
    price: 500,
    breed_id: 3
  },
  { name: 'Niffler',
    description: 'Long-snouted, burrowing creatures native to Britain with a penchant for anything shiny.',
    colors: ['brown', 'white', 'black'],
    size: 'S',
    pictureURL: 'https://images.pottermore.com/bxd3o8b291gf/3x8xkyxFqU0w6WaMAuUmsK/69b6776507fba83b3f90a4c59475440c/FB-TRL2-niffler_alt.jpg?w=550&h=550&fit=thumb&f=center&q=85',
    inventory: 100,
    magicalAbilities: ['flying'],
    lifespan: 10,
    price: 150,
    breed_id: 4
  }
], product => db.model('products').create(product))

const seedBreeds = () => db.Promise.map([
  {name: 'bird'},
  {name: 'plant'},
  {name: 'bird-horse'},
  {name: 'mole'}
], breed => db.model('breeds').create(breed))

const seedAddresses = () => db.Promise.map([
  { address1: '5 Hanover Square',
    city: 'New York',
    state: 'NY',
    zip: 10004
  },
  { address1: '1234 116th St',
    city: 'New York',
    state: 'NY',
    zip: 10027
  },
], address => db.model('addresses').create(address))

const seedOrders = () => db.Promise.map([
  {status: 'pending'},
  {status: 'processing', shippingCost: 100, tax: 80, subtotal:250, totalCost: 430, user_id: 1, address_id: 1},
  {status: 'shipped', shippingCost: 150, tax: 100, subtotal:300, totalCost: 550, user_id: 2, address_id: 2},
  {status: 'pending', shippingCost: 150, tax: 100, subtotal:300, totalCost: 550, user_id: 1, address_id: 1},
  {status: 'pending', shippingCost: 150, tax: 100, subtotal:300, totalCost: 550, user_id: 2, address_id: 2},
], order => db.model('orders').create(order))

const seedOrderlines = () => db.Promise.map([
  {
    color: 'green',
    quantity: 1,
    size: 'S',
    unitPrice: 500,
    order_id: 1,
    product_id: 1
  },
  {
    color: 'brown',
    quantity: 1,
    size: 'M',
    unitPrice: 100,
    order_id: 3,
    product_id: 1
  },
  {
    color: 'gray',
    quantity: 2,
    size: 'L',
    unitPrice: 2000,
    order_id: 4,
    product_id: 1
   },
   {
    color: 'brown',
    quantity: 1,
    size: 'L',
    unitPrice: 500,
    order_id: 4,
    product_id: 3
   },
   {
    color: 'green',
    quantity: 4,
    size: 'XS',
    unitPrice: 100,
    order_id: 5,
    product_id: 2
   }
], orderline => db.model('orderlines').create(orderline))


db.didSync
  .then(() => db.sync({force: true}))
  .then(seedUsers)
  .then((users) => console.log(`Seeded ${users.length} users OK`))
  .then(seedBreeds)
  .then((breeds) => console.log(`Seeded ${breeds.length} breeds OK`))
  .then(seedProducts)
  .then((products) => console.log(`Seeded ${products.length} products OK`))
  .then(seedAddresses)
  .then((addresses) => console.log(`Seeded ${addresses.length} addresses OK`))
  .then(seedOrders)
  .then((orders) => console.log(`Seeded ${orders.length} orders OK`))
  .then(seedOrderlines)
  .then((orderlines) => console.log(`Seeded ${orderlines.length} orderlines OK`))
  .catch(error => console.error(error))
  .finally(() => db.close())
