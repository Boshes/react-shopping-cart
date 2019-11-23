import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <NavLink className="navbar-brand" to="/">Shopping cart</NavLink>
          </div>

          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav navbar-right">
              <li><NavLink to="/cart"><i className="glyphicon glyphicon-shopping-cart"></i> My Cart</NavLink></li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar;