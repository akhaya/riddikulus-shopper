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
  { name: 'Nundu',
    description: 'Giant mammal native to East Africa, most known for its toxic breath. Considered by some to be th emost dangerous creature alive.',
    colors: ['brown', 'white', 'black'],
    size: 'L',
    pictureURL: 'https://cdnb.artstation.com/p/assets/images/images/004/163/293/large/sam-rowan-boswell-nundu-tail-v001-006-sr.jpg?1480959526',
    inventory: 10,
    magicalAbilities: ['flying'],
    lifespan: 70,
    price: 10000,
    breed_id: 5
  },
  { name: 'Romanian Longhorn',
    description: 'Dragon native to Romania. The Longhorn prefers to gore its prey with its horns before roasting it. The horns of the Longhorn, when powdered, are highly prized as a potion ingredient, and is a Class B Tradeable Material.',
    colors: ['brown', 'green', 'black'],
    size: 'M',
    pictureURL: 'https://img.buzzfeed.com/buzzfeed-static/static/2014-08/14/12/enhanced/webdr04/enhanced-30629-1408032158-13.png',
    inventory: 5,
    magicalAbilities: ['flying'],
    lifespan: 70,
    price: 4000,
    breed_id: 6
  },
  { name: 'Norwegian Ridgeback',
    description: 'The Norwegian Ridgeback is a dragon native to Norway, and its typical habitat is the Northern mountains.It resembles the Hungarian Horntail, except for the black ridges on its back, the browner texture in its scales, and its less hostile attitude. It has venomous fangs, and its food of choice is large mammals, including water mammals, which is unusual for a dragon. Its eggs are black, and young Ridgebacks develop the ability to shoot flame earlier than any other breeds (around one to three months). Female Ridgebacks are generally more ferocious than the males.',
    colors: ['brown', 'green', 'black'],
    size: 'L',
    pictureURL: 'https://farm6.staticflickr.com/5531/12015408204_9432c65c0a_b.jpg',
    inventory: 1,
    magicalAbilities: ['flying', 'fire breathing'],
    lifespan: 70,
    price: 6000,
    breed_id: 5
  },
  { name: 'Hungarian Horntail',
    description: "It has black scales, and is lizard-like in appearance. It also has yellow eyes, with vertical pupils like a cat's, bronze horns and similarly coloured spikes that protrude from its long tail which it will gladly deploy in combat. The dragon's roar is a yowling, screeching scream, and its flame can reach to about fifty feet. While having a very far reaching flame the Horntail's breath can reach extremely high temperatures as it made a stone turn red hot in seconds. Its eggs are cement-coloured and particularly hard-shelled. The Horntail's foods of choice include cattle, sheep, goats, and whenever possible, humans.",
    colors: ['brown', 'green', 'black'],
    size: 'XL',
    pictureURL: 'http://vignette1.wikia.nocookie.net/harrypotter/images/0/08/Dragon_WB_F4_HungarianHorntail_Illust_100615_Land.jpg/revision/latest?cb=20161124005253',
    inventory: 1,
    magicalAbilities: ['flying', 'fire breathing'],
    lifespan: 70,
    price: 6000,
    breed_id: 5
  },
   { name: 'Erumpent',
    description: "Rhinoceros-like in appearance, the Erumpent is a dangerous beast whose horn has explosive properties.",
    colors: ['brown', 'green', 'black'],
    size: 'XL',
    pictureURL: 'http://cdn2.thr.com/sites/default/files/2016/11/fb-vfx-fs-01404-h_2016.jpg',
    inventory: 1,
    magicalAbilities: ['flying', 'fire breathing'],
    lifespan: 70,
    price: 6000,
    breed_id: 6
  },
   { name: 'Graphorn',
    description: "A horned beast with a humped back, sometimes ridden by Mountain trolls, much to the Graphorns' displeasure",
    colors: ['brown', 'green', 'black'],
    size: 'XL',
    pictureURL: 'http://www.oh-so-famous.de/sites/default/files/phantastic-beasts-tierwesen-graphorn-warner.jpg',
    inventory: 1,
    magicalAbilities: ['flying', 'fire breathing'],
    lifespan: 70,
    price: 6000,
    breed_id: 6
  },
  { name: 'Acromantula',
    description: "An Acromantula is a species of giant spider, native to the rainforests of Southeast Asia, particularly Borneo where it inhabits dense jungles. Acromantulas are believed to be a wizard-bred species, designed to guard dwellings or treasure hoards, and were first created before the Ban on Experimental Breeding in 1965. These giant spiders with a taste for human flesh were first spotted in 1794. The fangs contain highly toxic venom, valued at 100 Galleons a pint in 1996 .",
    colors: ['brown', 'green', 'black'],
    size: 'L',
    pictureURL: 'http://vignette2.wikia.nocookie.net/harrypotter/images/d/d2/Ara.jpg/revision/latest?cb=20100611145604',
    inventory: 13,
    magicalAbilities: ['deadly'],
    lifespan: 10,
    price: 5000,
    breed_id: 7
  },
  { name: 'Basilisk',
    description: "http://vignette3.wikia.nocookie.net/villains/images/1/19/TheBasilisk.jpeg/revision/latest?cb=20150104113035",
    colors: ['green'],
    size: 'XL',
    pictureURL: 'http://vignette3.wikia.nocookie.net/villains/images/1/19/TheBasilisk.jpeg/revision/latest?cb=20150104113035',
    inventory: 12,
    magicalAbilities: ['flying', 'fire breathing'],
    lifespan: 900,
    price: 5000,
    breed_id: 8
  },
  { name: 'Three-headed Dog',
    description: "A horned beast with a humped back, sometimes ridden by Mountain trolls, much to the Graphorns' displeasure",
    colors: ['brown', 'green', 'black'],
    size: 'M',
    pictureURL: 'https://thesupernaturalfoxsisters.files.wordpress.com/2015/06/fluffysleeping.jpg',
    inventory: 1,
    magicalAbilities: ['loyal'],
    lifespan: 50,
    price: 6000,
    breed_id: 6
  }

], product => db.model('products').create(product))

const seedBreeds = () => db.Promise.map([
  {name: 'bird'},
  {name: 'Dragon'},
  {name: 'plant'},
  {name: 'bird-horse'},
  {name: 'mammal'},
  {name: 'mole'},
  {name: 'spider'},
  {name: 'serpent'},
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
