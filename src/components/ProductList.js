import React, { Component } from 'react'
import Product from './Product'
import { connect } from 'react-redux'
import { addToCart } from '../store/actions/cartActions'

class ProductList extends Component {
  addToCart = (product) => {
    this.props.addToCart(product)
  }

  inCart = (product) => {
    return this.props.cart.length > 0 && this.props.cart.filter(item => item.product.id === product.id).length > 0
  }

  render() {
    return (
      <div className="container">
        <h2>Product List</h2>
        <br/>
        <div className="row">
          {
            this.props.products.map(product =>
              <Product
                product={product}
                key={product.id}
                addToCart={this.addToCart}
                inCart={this.inCart(product)}
              />
            )
          }
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
      products: state.product.products,
      cart: state.cart.cart
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (product) => {
      dispatch(addToCart(product))
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(ProductList)