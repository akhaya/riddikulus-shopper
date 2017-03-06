import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router'
import ProductRow from './ProductRow'


//--N.A.: a way to generate tables with slightly different information? 
  //possibly using this.props.children (NOT in the react-router way)
  //have a TableComponent, provide tr, th, etc as this.props.children
export default (props) => {
  return (
      <div className="container-fluid">
        <div className="row">
          <table className="table table-hover">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Breed</th>
                <th>Colors</th>
                <th>Size</th>
                <th>Inventory</th>
                <th>See details</th>
                <th>Delete?</th>
              </tr>
            </thead>
            <tbody>
              {props.products && props.products.map(product =>
                <ProductRow
                  product={product}
                  key={product.id}
                  />
                )}
            </tbody>
          </table>
        </div>
      </div>
  )
}
