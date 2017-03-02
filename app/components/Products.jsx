import React from 'react'
import {Link} from 'react-router'

export default (props) => {
  const products = props.products
  return (
    <div className="col-xs-12">
      <h3>Creatures</h3>
      <div className="row">

        {products && products.map(product => {
        return (<div className="col-xs-3" key = {product.id}>
          <Link className="thumbnail" to={`/products/${product.id}`}>
            <img src={product.pictureURL} />
            <div className="caption">
              <h5>
                <span>{product.price} Galleons</span>
              </h5>
              <small>INSERT REVIEW</small>
            </div>
          </Link>
        </div>)
        })}
      </div>
    </div>
  )
}
