import React, { Component } from "react";
import { Link } from "react-router-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";

import HomePage from "./components/homePage/homePage";
import DropFileComponent from "./components/dropFileComponent/dropFileComponent";
import CrimeListComponent from "./components/CrimeListComponent/CrimeListComponent";
import MapComponent from "./components/mapComponent/mapComponent";

import "./App.scss";

class App extends Component {
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
      lat,
      lng,
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
      <div className="App">
        <div>
          {console.log(this.state, "index")}
          <Router>
            <div>
              <Link to="/">Home</Link>

              <Link to="/">
                <button> Apply </button>
              </Link>

              <Route exact path="/" component={HomePage} />
              {/* <Route
                path="/child"
                render={props => (
                  <Child {...props} state={this.state.datafile} />
                )}
              /> */}
            </div>
          </Router>

          <DropFileComponent handleData={this.handleData} />
          <div className="container">
            <div className="column-left">
              <CrimeListComponent
                handleChangeGeo={this.handleChangeGeo}
                crimesListFromCSV={this.state.dataFile}
              />
            </div>
            <div className="column-right">
              <MapComponent center={center} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
