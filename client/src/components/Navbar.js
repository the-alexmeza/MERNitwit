import React, { Component } from "react";
import { Link } from "react-router-dom";

import logo from "../logo.svg"; // TODO: get new logo

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="/">
          <img src={logo} width="60" height="60" alt="logo" />
        </a>
        <Link to="/" className="navbar-brand">
          MERNi-Twit
        </Link>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link to="/post" className="nav-link">
                Post
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;
