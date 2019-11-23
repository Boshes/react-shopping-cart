import React, { Component } from 'react'
import Product from './Product'
import { connect } from 'react-redux'

class ProductList extends Component {
  render() {
    return (
      <div className="container">
        <h2>Product List</h2>
        <br/>
        <div className="row">
          <Product />
          <Product />
          <Product />
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
      products: state.product.products
  }
}


export default connect(mapStateToProps)(ProductList)