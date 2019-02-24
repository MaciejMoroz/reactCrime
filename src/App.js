import React, { Component } from "react";
import { Link } from "react-router-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";

import HomePage from "./components/homePage/homePage";
import CrimePage from "./components/crimePage/crimePage";

import "./App.scss";

class App extends Component {
  constructor() {
    super();

    this.stete = {
      isActive: true,
      dataFile: ""
    };
  }
  onUserUploadFile = uploadFile => {
    this.setState({
      dataFile: uploadFile,
      isActive: false
    });
  };

  render() {
    return (
      <div className="App">
        <div className="nav">
          <Router>
            <div>
              <Link to="/">
                <button className="btn">Back</button>
              </Link>

              <Link to="/crimePage">
                <button
                  disabled={this.state === null ? true : false}
                  className="btn"
                >
                  Apply
                </button>
              </Link>

              <Route
                exact
                path="/"
                render={props => (
                  <HomePage onUserUploadFile={this.onUserUploadFile} />
                )}
              />

              <Route
                path="/crimePage"
                render={() => <CrimePage state={this.state.dataFile} />}
              />
            </div>
          </Router>
        </div>
      </div>
    );
  }
}

export default App;
