import React, { Component } from "react";
import MeterSearch from "./meterSearch";
import MeterList from "./meterList";

class Meter extends Component {
  state = {};

  addMeter = () => {
    this.props.history.push("/meter/add");
  };

  render() {
    return (
      <div>
        <div className="search-list-view">
          <div className="heading">
            <h4>
              <i className="la la-tachometer-alt"></i>
              Meter
            </h4>
            <button className="btn primary" onClick={this.addMeter}>
              Add Meter
              <i className="la la-plus-circle"></i>
            </button>
          </div>
          <MeterSearch />
          <MeterList />
        </div>
      </div>
    );
  }
}

export default Meter;
