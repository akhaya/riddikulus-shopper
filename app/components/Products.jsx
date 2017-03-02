import React from 'react'
import {Link} from 'react-router'

export default (props) => {
  // console.log('=====', props)
  const products = props.products

  // LOOK INTO LODASH METHODS. WHEN WE MAP THROUGH PRODUCT.BREED, MAY HAVE MULTIPLE BUT ONLY WANT TO LIST THE UNIQUE BREEDS.

  console.log(products)

  return (

    <div className="container-fluid">
      <div className="row">

        <div className="col-xs-2">
          <h2> Breeds </h2>
              {products && products.map((product, id) => {
                    return (
                    <div>
                      <label className="form-check-label">
                        <input key={id} className="form-check-input" type="checkbox" value="" />{product.breed.name}
                      </label>
                    </div>)
                })}
          <h2> Filters </h2>
          <h3> Magical Abilities </h3>
          <h3> size </h3>
          <h3> lifespan </h3>
          <h3> Price </h3>
        </div>

        <div className="col-xs-10">
          <h3>Creatures</h3>
          <div className="row">

            {products && products.map(product => {
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
