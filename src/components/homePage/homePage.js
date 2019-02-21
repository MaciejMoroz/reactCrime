import React from "react";
import CsvParse from "@vtex/react-csv-parse";
import "./homePage.scss";

class HomePage extends React.Component {
  state = {
    dataFile: ""
  };

  handleData = inputFile => {
    this.setState({
      dataFile: inputFile,
      fileStatus: true
    });
  };
  componentDidUpdate(prevProps, prevState) {
    if (this.state.dataFile !== prevState.dataFile) {
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
        <div className="dropZone">
          <CsvParse
            className="cos"
            keys={keys}
            onDataUploaded={this.handleData}
            onError={this.handleError}
            render={onChange => <input type="file" onChange={onChange} />}
          />
        </div>
      </div>
    );
  }
}
export default HomePage;
