import React from "react";

import CrimeListComponent from "../CrimeListComponent/CrimeListComponent";
import MapComponent from "../mapComponent/mapComponent";

class CrimePage extends React.Component {
  constructor() {
    super();
    this.state = {
      lat: "",
      lng: "",
      data: "",
      address: "",
      disct: "",
      crime: "",
      dataFile: ""
    };
  }
  handleData = dataFile => {
    this.setState({ dataFile });
  };
  handleChangeGeo = (lat, lng, data, address, disct, crime) => {
    this.setState({
      lat: Number(lat),
      lng: Number(lng),
      data,
      address,
      disct,
      crime
    });
  };

  render() {
    let center = {
      lat: this.state.lat,
      lng: this.state.lng,
      data: this.state.data,
      address: this.state.address,
      disct: this.state.disct,
      crime: this.state.crime
    };

    return (
      <div className="container">
        <div className="column-left">
          <CrimeListComponent
            handleChangeGeo={this.handleChangeGeo}
            crimesListFromCSV={this.props}
          />
        </div>
        <div className="column-right">
          <MapComponent center={center} />
        </div>
      </div>
    );
  }
}

export default CrimePage;
