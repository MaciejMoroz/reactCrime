import React from "react";
import CsvParse from "@vtex/react-csv-parse";
import "./homePage.scss";

class HomePage extends React.Component {
  state = {
    dataFile: ""
  };

  handleData = dataFile => {
    this.setState({ dataFile });
  };

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
            keys={keys}
            onDataUploaded={() =>
              this.props.handleUploadData(this.state.dataFile)
            }
            onError={this.handleError}
            render={onChange => <input type="file" onChange={onChange} />}
          />

          {console.log(this.state)}
        </div>
      </div>
    );
  }
}
export default HomePage;
