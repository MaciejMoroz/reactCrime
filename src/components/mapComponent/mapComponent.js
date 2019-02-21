import React from "react";
import GoogleMapReact from "google-map-react";
import BubleComponent from "../bubleComponent/bubleComponent";

class MapComponent extends React.Component {
  state = {
    zoom: 17
  };

  render() {
    let defaultCenter = { lat: 38.55042047, lng: -121.3914158 };
    return (
      <div>
        <div style={{ height: "80vh", width: "100%" }}>
          <GoogleMapReact
            bootstrapURLKeys={{
              key: "AIzaSyDTWG2ZcYSzyvDfxN34c8WqM9XcH5VsH1Y"
            }}
            center={
              this.props.center.lat !== "" ? this.props.center : defaultCenter
            }
            defaultZoom={this.state.zoom}
          >
            <BubleComponent
              lat={this.props.center.lat}
              lng={this.props.center.lng}
              center={this.props.center}
            />
          </GoogleMapReact>
        </div>
      </div>
    );
  }
}

export default MapComponent;
