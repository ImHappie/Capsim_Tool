import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";
import { connect } from "react-redux";

class Navbar extends Component {
  render() {

    const userLinks = (
      <ul className="navbar-nav ml-auto">
        <li className="nav-item mr-2">
          <NavLink to="/" className="btn btn-primary">Test</NavLink>
        </li>
        <li className="nav-item mr-2">
          <NavLink to="/history" className="btn btn-primary">Report</NavLink>
        </li>
        <li className="nav-item  mr-2">
          <NavLink to="/add" className="btn btn-primary">Add test problem</NavLink>
        </li>
      </ul>
    );

    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link to='/'><h1 className="navbar-brand">MERN App</h1></Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#myNavBar" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="myNavBar">
            {userLinks}
        </div>
      </nav>
    );
  }
}

export default Navbar;