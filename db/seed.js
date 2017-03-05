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
    price: 100,
    breed_id: 3
  },
  { name: 'Niffler',
    description: 'Long-snouted, burrowing creatures native to Britain with a penchant for anything shiny.',
    colors: ['brown', 'white', 'black'],
    size: 'S',
    pictureURL: 'https://images.pottermore.com/bxd3o8b291gf/3x8xkyxFqU0w6WaMAuUmsK/69b6776507fba83b3f90a4c59475440c/FB-TRL2-niffler_alt.jpg?w=550&h=550&fit=thumb&f=center&q=85',
    inventory: 100,
    magicalAbilities: ['flying'],
    lifespan: 70,
    price: 100,
    breed_id: 4
  },
  { name: 'Niffler',
    description: 'Long-snouted, burrowing creatures native to Britain with a penchant for anything shiny.',
    colors: ['brown', 'white', 'black'],
    size: 'S',
    pictureURL: 'https://images.pottermore.com/bxd3o8b291gf/3x8xkyxFqU0w6WaMAuUmsK/69b6776507fba83b3f90a4c59475440c/FB-TRL2-niffler_alt.jpg?w=550&h=550&fit=thumb&f=center&q=85',
    inventory: 100,
    magicalAbilities: ['flying'],
    lifespan: 70,
    price: 100,
    breed_id: 4
  },
  { name: 'Hippogriffs',
    description: 'Half horse, half eagle creatures, immensely proud and extremely dangerous.',
    colors: ['brown', 'white', 'black', 'silver'],
    size: 'L',
    pictureURL: 'https://images.pottermore.com/bxd3o8b291gf/4QbMOZOaww8YAMWaoOuAys/d3368834aa24b460d375f10774c55fea/Buckbeak_WB_F3_ConceptOfHarryRidingFlyingBuckbeak_Illust_100615_Land.jpg?w=550&h=550&fit=thumb&f=center&q=85',
    inventory: 50,
    magicalAbilities: ['flying'],
    lifespan: 70,
    price: 100,
    breed_id: 3
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
  }

], product => db.model('products').create(product))

const seedBreeds = () => db.Promise.map([
  {name: 'bird'},
  {name: 'plant'},
  {name: 'bird-horse'},
  {name: 'mole'}
], breed => db.model('breeds').create(breed))

db.didSync
  .then(() => db.sync({force: true}))
  .then(seedUsers)
  .then((users) => console.log(`Seeded ${users.length} users OK`))
  .then(seedBreeds)
  .then((breeds) => console.log(`Seeded ${breeds.length} breeds OK`))
  .then(seedProducts)
  .then((products) => console.log(`Seeded ${products.length} products OK`))
  .catch(error => console.error(error))
  .finally(() => db.close())
