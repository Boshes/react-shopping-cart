import React, { Component } from 'react';

class Product extends Component {
  render() {
    return (
      <div className="col-md-3">
        <figure className="card card-product">
          <div className="img-wrap">
            <img className="img-responsive" alt="" src="http://placehold.it/300x200" />
          </div>
          <figcaption className="info-wrap">
            <h4 className="title">Product title</h4>
            <p className="desc">Product description</p>
          </figcaption>
          <div className="bottom-wrap">
            <a href="/#" className="btn btn-sm btn-primary float-right">Add to cart</a>
            <div className="price-wrap h5">
              <span className="price-new">$1280</span>
            </div>
          </div>
        </figure>
      </div>
    )
  }
}

export default Product;