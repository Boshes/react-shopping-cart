import React, { Component } from 'react';
import Item from './Item';

class Cart extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12 col-xs-12">
            <div className="panel panel-info">
              <div className="panel-heading">
                <div className="panel-title">
                  <div className="row">
                    <div className="col-xs-6">
                      <h5><span className="glyphicon glyphicon-shopping-cart"></span> My Shopping Cart</h5>
                    </div>
                  </div>
                </div>
              </div>

              <div className="panel-body">
                <Item />
                <Item />
              </div>
              <div className="panel-footer">
                <div className="row text-center">
                  <div className="col-xs-11">
                    <h4 className="text-right">Total <strong>$5400.8</strong></h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Cart;