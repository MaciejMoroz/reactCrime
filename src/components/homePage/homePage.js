import React from "react";
import CsvParse from "@vtex/react-csv-parse";
import "./homePage.scss";
import InputDrop from "./input.js";

class HomePage extends React.Component {
  state = {
    dataFile: "",
    fileStatus: false
  };

  handleData = inputFile => {
    this.setState({
      dataFile: inputFile,
      fileStatus: true
    });
  };
  componentDidUpdate(prevProps, prevState) {
    if (
      this.state.dataFile !== prevState.dataFile &&
      this.state.dataFile !== prevProps
    ) {
      this.props.onUserUploadFile(this.state.dataFile);
    }
  }

  render() {
    const keys = [
      "cdatetime",
      "address",
      "district",
      "beat",
      "grid",
      "crimedescr",
      "ucr_ncic_code",
      "lat",
      "lng"
    ];

    return (
      <div className="homePage">
        <CsvParse
          keys={keys}
          onDataUploaded={this.handleData}
          onError={this.handleError}
          render={onChange => (
            <InputDrop
              onChange={onChange}
              onDrop={onChange}
              isUploaded={this.state.fileStatus}
            />
          )}
        />
      </div>
    );
  }
}
export default HomePage;
