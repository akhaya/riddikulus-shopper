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

  let quantity = [];
  for(var i = 0; i < animal.inventory; i++){
    quantity.push(i);
  }

  return(
    <div className="container-fluid">
      <div className="row">
        <div className="col-sm-6">
          <img src={animal.pictureURL} />
        </div>
        <div className="col-sm-4">
          <div>
            <h1> Name: {animal.name} </h1>
            <h1> Price: </h1>
            <h4>  {animal.price}  </h4>
            <h1> Profile:</h1>
            <h4> {animal.description} </h4>
            <h4> Colors </h4>
            <select>
              {
                animal.colors.map((color, id) => {
                  return <option key={id} value={color}> {color}</option>
                })
              }
            </select>
            <h4> Quantity </h4>
            {
              <select>
                {
                  quantity.map(num => {
                    return <option key={num} value={num}> {num}</option>
                  })
                }
              </select>
            }
            <div>
              <button type="button" class="btn btn-default" aria-label="Left Align">
                <div className="glyphicon glyphicon-shopping-cart
  " aria-hidden="true"></div>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className='row'>
        <div className="col-sm-8">
          <h1> Reviews </h1>
            <div className="panel panel-default">
              <div className="panel-body">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </div>
            </div>
          </div>
        <div className="col-sm-4">
          <h1> User Photos </h1>
            <div className="col-sm-5">
              <img className='thumbnailImg' src={animal.pictureURL} />
            </div>
            <div className="col-sm-5">
              <img className='thumbnailImg' src={animal.pictureURL} />
            </div>
            <div className="col-sm-5">
              <img className='thumbnailImg' src={animal.pictureURL} />
            </div>
            <div className="col-sm-5">
              <img className='thumbnailImg' src={animal.pictureURL} />
            </div>
        </div>
      </div>
    </div>

  )
}
