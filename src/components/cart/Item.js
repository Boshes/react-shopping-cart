import React, { Component } from 'react';

class Item extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-xs-2"><img alt="" className="img-responsive" src="http://placehold.it/300x200" />
        </div>
        <div className="col-xs-4">
          <h4 className="product-name"><strong>Product title</strong></h4>
        </div>
        <div className="col-xs-6">
          <div className="col-xs-3 text-right">
            <h6><strong>330 <span className="text-muted">x</span></strong></h6>
          </div>
          <form>
            <div className="col-xs-4">
              <input type="number" className="form-control input-sm" />
            </div>

            <div className="col-xs-2">
              <button type="submit" className="btn btn-info">Update</button>
            </div>

            <div className="col-xs-2">
              <button type="button" className="btn btn-link btn-xs">
                <span className="glyphicon glyphicon-trash"> </span>
              </button>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default Item;