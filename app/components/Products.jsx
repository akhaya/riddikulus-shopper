import React from 'react'
import {Link} from 'react-router'
import {convertPrice} from '../utils'

export default (props) => {
  console.log('=====', props)
  const products = props.products
  return (
    <div className="col-xs-12">
      <h3>Creatures</h3>
      <div className="row">

        {products && products.map(product => {
        return (<div className="col-xs-3" key = {product.id}>
          {/* add onclick handler to single product view */}
          <a className="thumbnail" href="#" onClick={() => clickedAlbum(album.id)}>
            <img src={product.pictureURL} />
            <div className="caption">
              <h5>
                <span>{convertPrice(product.price)}</span>
              </h5>
              <small>INSERT REVIEW</small>
            </div>
          </a>
        </div>)
        })}
      </div>
    </div>
  )
}
