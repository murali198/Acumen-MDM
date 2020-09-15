import React, { Component } from "react";

class MeterList extends Component {
  state = {
    meterList: [
      {
        meterSerialNumber: "19459773",
        locationName: "VELLALAR SS",
        locationCode: "21110432",
        sourceType: "DT",
        divisionName: "TONDIARPET",
        circleName: "CHENNAI NORTH EDC",
        firstcommDateTime: "22-Mar-2020 5:00 PM",
        lastcommDateTime: "22-Mar-2020 5:10 PM",
      },
      {
        meterSerialNumber: "19459777",
        locationName: "BOYS HOSTEL SS",
        locationCode: "216202042",
        sourceType: "DT",
        divisionName: "PONNERI",
        circleName: "CHENNAI NORTH EDC",
        firstcommDateTime: "22-Mar-2020 2:00 PM",
        lastcommDateTime: "22-Mar-2020 2:16 PM",
      },
      {
        meterSerialNumber: "19459780",
        locationName: "PADMAVATHY NAGAR",
        locationCode: "21111131",
        sourceType: "DT",
        divisionName: "TONDIARPET",
        circleName: "CHENNAI NORTH EDC",
        firstcommDateTime: "22-Mar-2020 12:00 PM",
        lastcommDateTime: "22-Mar-2020 12:20 PM",
      },
    ],
  };
  render() {
    return (
      <div className="table">
        <div className="thead">
          <div className="row">
            <div className="col-2">Meter No</div>
            <div className="col-2">Location</div>
            <div className="col-2">Division</div>
            <div className="col-2">Circle</div>
            <div className="col-2">Last Communicated</div>
            <div className="col-2">Actions</div>
          </div>
        </div>
        <div className="tbody">
          {this.state.meterList.map((item) => (
            <div key={item.meterSerialNumber} className="row">
              <div className="col-2">{item.meterSerialNumber}</div>
              <div className="col-2">{item.locationName}</div>
              <div className="col-2">{item.divisionName}</div>
              <div className="col-2">{item.circleName}</div>
              <div className="col-2">{item.lastcommDateTime}</div>
              <div className="col-2">
                <i className="la la-eye"></i>
                <i className="la la-edit"></i>
                <i className="la la-trash"></i>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default MeterList;
