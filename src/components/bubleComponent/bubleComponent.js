import React from "react";
import "./bubuleComponent.scss";

const BubleComponent = props => {
  return (
    <div className="bubble">
      <div className="bubleContent">
        <p>Data: {props.center.data} </p>
        <p>Address: {props.center.address}</p>
        <p>Discric: {props.center.disct}</p>
        <p>Crime: {props.center.crime}</p>
      </div>
    </div>
  );
};

export default BubleComponent;
