import React, { Component } from "react";
import { Link } from "react-router-dom";
import SideNav from "./sideNav.js";

class Navbar extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <SideNav />
        <header id="header">
          <ul class="header-left">
            <li>
              <Link to="/">AcumenMDM</Link>
            </li>
          </ul>
          <ul class="header-right">
            <li>
              <div class="hamburger"></div>
            </li>
          </ul>
        </header>
      </React.Fragment>
    );
  }
}

export default Navbar;
