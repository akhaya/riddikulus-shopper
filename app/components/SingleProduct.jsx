import React from 'react'

export default (props) => {

  let animal = {
    name: 'Thunderbird',
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

  return(



    <div className="container-fluid">
      <div className="row">
        <div className="col-sm-8">
          <img src={animal.pictureURL} />
        </div>
        <div className="col-sm-4">
          <div>
            <h1>`</h1>
            <h1> Price </h1>
            <h1> Profile </h1>
          </div>
        </div>
      </div>
    </div>

  )
}
