import React, { Component } from "react";
import { Link } from "react-router-dom";

class SideNav extends Component {
  state = {};
  render() {
    return (
      <nav>
        <ul>
          <li>
            <Link to="/">AcumenMDM</Link>
          </li>
          <li>
            <Link>
              <i class="la la-user"></i>
              <div class="label">Welcome User!</div>
            </Link>
          </li>
          <li>
            <Link>
              <i class="la la-home"></i>
              <div class="label">Home</div>
            </Link>
          </li>
          <li>
            <Link>
              <i class="la la-tachometer-alt"></i>
              <div class="label">Meter</div>
            </Link>
          </li>
          <li>
            <Link>
              <i class="la la-user-lock"></i>
              <div class="label">Page Access</div>
            </Link>
          </li>
          <li>
            <Link>
              <i class="la la-user-astronaut"></i>
              <div class="label">Customer Service</div>
            </Link>
          </li>
          <li>
            <Link>
              <i class="la la-palette"></i>
              <div class="label">Change Theme</div>
            </Link>
          </li>
          <li>
            <Link>
              <i class="la la-power-off"></i>
              <div class="label">Signout</div>
            </Link>
          </li>
        </ul>
      </nav>
    );
  }
}

export default SideNav;
