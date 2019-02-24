import React from "react";
import "./homePage.scss";

class InputDrop extends React.Component {
  inputRef = React.createRef();

  onInputRefClick = () => {
    this.inputRef.current.click();
  };

  onInputRefDrop = e => {
    // this.inputRef.current. // drop event ??
  };
  render() {
    return (
      <div>
        <div
          draggable="true"
          className="dropZone"
          onClick={this.onInputRefClick}
          onDrop={this.onInputRefDrop}
        >
          <p hidden={this.props.isUploaded === false ? false : true}>
            {/* Drop File here or  */}
            Click to select file
          </p>
          <p hidden={this.props.isUploaded === false ? true : false}>
            fille uploaded
          </p>
          <input
            type="file"
            accept=".csv"
            hidden
            onDrop={this.props.onChange}
            onChange={this.props.onChange}
            ref={this.inputRef}
          />
        </div>
      </div>
    );
  }
}

export default InputDrop;
