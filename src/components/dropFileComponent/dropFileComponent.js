import React from "react";
import CsvParse from "@vtex/react-csv-parse";

import "./dropFileComponent.scss";

class DropFileComponent extends React.Component {
  //   handleData = data => {
  //     this.setState({ data });
  //   };
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
      <div className="dropFileCompomet">
        <div className="contnent">
          <CsvParse
            keys={keys}
            onDataUploaded={this.props.handleData}
            onError={this.handleError}
            render={onChange => <input type="file" onChange={onChange} />}
          />
          <p>drop File here</p>
        </div>
      </div>
    );
  }
}
export default DropFileComponent;
