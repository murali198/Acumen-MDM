import React, { Component } from "react";

class MeterSearch extends Component {
  state = {};
  render() {
    return (
      <div className="search-view">
        <div className="heading">
          <h4>Meter Search</h4>
          <label>
            <input type="text" required />
            <div className="label">Saved Filter</div>
          </label>
        </div>
        <div className="sections">
          <section>
            <div className="section-heading">Network Hierarchy / Address</div>
            <div className="section-fields">
              <label>
                <input type="text" required />
                <div className="label">Circle</div>
              </label>
              <label>
                <input type="text" required />
                <div className="label">Division</div>
              </label>
              <label>
                <input type="text" required />
                <div className="label">Sub Division</div>
              </label>
              <label>
                <input type="text" required />
                <div className="label">Section</div>
              </label>
              <label>
                <input type="text" required />
                <div className="label">Town</div>
              </label>
              <label>
                <input type="text" required />
                <div className="label">SS Name</div>
              </label>
              <label>
                <input type="text" required />
                <div className="label">Feeder Name</div>
              </label>
              <label>
                <input type="text" required />
                <div className="label">DT Name</div>
              </label>
            </div>
          </section>
          <section>
            <div className="section-heading">Meter Manufacturer</div>
            <div className="section-fields">
              <label>
                <input type="text" required />
                <div className="label">Manufacturer Name</div>
              </label>
              <label>
                <input type="text" required />
                <div className="label">Meter Type</div>
              </label>
              <label>
                <input type="text" required />
                <div className="label">Manufacture Year</div>
              </label>
              <label>
                <input type="text" required />
                <div className="label">Meter Category</div>
              </label>
              <label>
                <input type="text" required />
                <div className="label">Firmware Version</div>
              </label>
            </div>
          </section>
          <section>
            <div className="section-heading">Communication Status</div>
            <div className="section-fields">
              <label>
                <input type="text" required />
                <div className="label">Communicated</div>
              </label>
              <label>
                <input type="text" required />
                <div className="label">From Date</div>
              </label>
              <label>
                <input type="text" required />
                <div className="label">To Date</div>
              </label>
              <label>
                <input type="text" required />
                <div className="label">Meter Group</div>
              </label>
              <label>
                <input type="text" required />
                <div className="label">Meter Serial Number</div>
              </label>
            </div>
          </section>
        </div>
        <div className="buttons">
          <button className="btn">
            Save Filter
            <i className="la la-save"></i>
          </button>
          <button className="btn primary">
            Search
            <i className="la la-search"></i>
          </button>
        </div>
      </div>
    );
  }
}

export default MeterSearch;
