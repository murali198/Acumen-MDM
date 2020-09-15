import React, { Component } from "react";

class MeterDetails extends Component {
  state = {};

  cancel = () => {
    this.props.history.push("/meter");
  };

  save = () => {
    this.props.history.push("/meter");
  };

  render() {
    return (
      <div className="search-view" style={{ padding: "2rem" }}>
        <div className="heading">
          <h4>
            <i className="la la-tachometer-alt"></i>
            Add Meter
          </h4>
        </div>
        <div className="sections">
          <section>
            <div className="section-heading">Meter Details</div>
            <div className="section-fields">
              <label>
                <input type="text" required />
                <div className="label">Meter Serial Number</div>
              </label>
              <label>
                <input type="text" required />
                <div className="label">Meter Type</div>
              </label>
              <label>
                <input type="text" required />
                <div className="label">Device ID</div>
              </label>
              <label>
                <input type="text" required />
                <div className="label">Meter Category</div>
              </label>
              <label>
                <input type="text" required />
                <div className="label">Manufacturer Name</div>
              </label>
              <label>
                <input type="text" required />
                <div className="label">Current Rating</div>
              </label>
              <label>
                <input type="text" required />
                <div className="label">Firmware Version</div>
              </label>
              <label>
                <input type="text" required />
                <div className="label">Manufacture Year</div>
              </label>
              <label>
                <input type="text" required />
                <div className="label">IP Address</div>
              </label>
              <label>
                <input type="text" required />
                <div className="label">Meter Sim No</div>
              </label>
              <label>
                <input type="text" required />
                <div className="label">Installation Type</div>
              </label>
              <label>
                <input type="text" required />
                <div className="label">Installation Sub Type</div>
              </label>
              <label>
                <input type="text" required />
                <div className="label">Connection Status</div>
              </label>
              <label>
                <input type="text" required />
                <div className="label">Voltage Multiplier</div>
              </label>
              <label>
                <input type="text" required />
                <div className="label">Energy Multiplier</div>
              </label>
              <label>
                <input type="text" required />
                <div className="label">Current Multiplier</div>
              </label>
            </div>
          </section>
          <section>
            <div className="section-heading">Organisation Structure</div>
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
              <label>
                <input type="text" required />
                <div className="label">Latitude</div>
              </label>
              <label>
                <input type="text" required />
                <div className="label">Longitude</div>
              </label>
              <label>
                <input type="text" required />
                <div className="label">Meter Type</div>
              </label>
            </div>
          </section>
          <section>
            <div className="section-heading">Meter Connection Info</div>
            <div className="section-fields">
              <label>
                <input type="text" required />
                <div className="label">Meter IP</div>
              </label>
              <label>
                <input type="text" required />
                <div className="label">Meter Port</div>
              </label>
              <label>
                <input type="text" required />
                <div className="label">Authentication Type</div>
              </label>
              <label>
                <input type="text" required />
                <div className="label">Meter Password</div>
              </label>
              <label>
                <input type="text" required />
                <div className="label">System Title</div>
              </label>
              <label>
                <input type="text" required />
                <div className="label">Block Cipher Key</div>
              </label>
              <label>
                <input type="text" required />
                <div className="label">Authentication Key</div>
              </label>
              <label>
                <input type="text" required />
                <div className="label">Referencing Name</div>
              </label>
              <label>
                <input type="text" required />
                <div className="label">Is Wrapper?</div>
              </label>
              <label>
                <input type="text" required />
                <div className="label">IEC</div>
              </label>
              <label>
                <input type="text" required />
                <div className="label">Serial Port</div>
              </label>
              <label>
                <input type="text" required />
                <div className="label">Connection Status</div>
              </label>
            </div>
          </section>
        </div>
        <div className="buttons">
          <button className="btn" onClick={this.cancel}>
            Cancel
            <i className="la la-times-circle"></i>
          </button>
          <button className="btn primary" onClick={this.save}>
            Save
            <i className="la la-save"></i>
          </button>
        </div>
      </div>
    );
  }
}

export default MeterDetails;
