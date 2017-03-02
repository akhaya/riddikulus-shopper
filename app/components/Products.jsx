import React from 'react'
import {Link} from 'react-router'

export default (props) => {
  const products = props.products

  if (!products) {
    return null
  }
  const magicalAbilities = products.reduce((accumulator, current) => {
    return accumulator.concat(current.magicalAbilities)
  }, [])

  const sizes = ['XS', 'S', 'M', 'L', 'XL']

  // LOOK INTO LODASH METHODS. WHEN WE MAP THROUGH PRODUCT.BREED, MAY HAVE MULTIPLE BUT ONLY WANT TO LIST THE UNIQUE BREEDS.

  // LIFESPAN AND PRICE SLIDERS DON'T SHOW THE NUMBER VALUE YET
  return (

    <div className="container-fluid">
      <div className="row">

        <div className="col-xs-2">
          <h2> Breeds </h2>
              {products.map((product, id) => {
                    return (
                    <div key={id}>
                      <label className="form-check-label">
                        <input className="form-check-input" type="checkbox" value="" />{product.breed.name}
                      </label>
                    </div>)
                })}
          <h2> Filters </h2>
          <h3> Magical Abilities </h3>
              {magicalAbilities.map((magicalAbility, id) => {
                    return (
                    <div key={id}>
                      <label className="form-check-label">
                        <input className="form-check-input" type="checkbox" value="" />{magicalAbility}
                      </label>
                    </div>)
                })}
          <h3> Size </h3>
              {sizes.map((size, id) => {
                    return (
                    <div key={id}>
                      <label className="form-check-label">
                        <input className="form-check-input" type="checkbox" value="" />{size}
                      </label>
                    </div>)
                })}
          <h3> Lifespan </h3>
            <input type="range" min="0" max="100" />
          <h3> Price </h3>
            <input type="range" min="0" max="5000" />
        </div>

        <div className="col-xs-10">
          <h3>Creatures</h3>
          <div className="row">

            {products.map(product => {
            return (<div className="col-xs-3" key = {product.id}>
              {/* add onclick handler to single product view */}
              <a className="thumbnail" href="#" onClick={() => clickedAlbum(album.id)}>
                <img src={product.pictureURL} />
                <div className="caption">
                  <h5>
                    <span>{product.price} Galleons</span>
                  </h5>
                  <small>INSERT REVIEW</small>
                </div>
              </a>
            </div>)
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
