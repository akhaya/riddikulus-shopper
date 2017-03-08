import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router'
import ProductRow from './ProductRow'
import AdminTable from './AdminTable'

export default (props) => {
  const headers = ['ID', 'Name', 'Breed', 'Colors', 'Size', 'Inventory', 'See Details', 'Delete' ]
  return (
      <div className="container-fluid">
        <AdminTable headers={headers}>
          {props.products.list && props.products.list.map(product =>
            <ProductRow
              product={product}
              key={product.id}
              />
            )}
        </AdminTable>
      </div>
  )
}
