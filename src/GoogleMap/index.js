import React, { Component } from "react";
import { Map, GoogleApiWrapper, InfoWindow, Marker } from "google-maps-react";

export class GoogleMap extends Component {
  state = {
    showingInfoWindow: false, //Hides or the shows the infoWindow
    activeMarker: {}, //Shows the active marker upon click
    selectedPlace: {} //Shows the infoWindow to the selected place upon a marker
  };

  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });

  onClose = props => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  };

  render() {
    return (
      <div className="google-map">
        <Map
          google={this.props.google}
          zoom={17}
          style={mapStyles}
          initialCenter={{
            lat: 40.012053,
            lng: -82.859554
          }}
        >
          <Marker
            onClick={this.onMarkerClick}
            name={"Gamma Eta Chapter Home"}
          />
          <InfoWindow
            marker={this.state.activeMarker}
            visible={this.state.showingInfoWindow}
            onClose={this.onClose}
          >
            <div>
              <h4>{this.state.selectedPlace.name}</h4>
            </div>
          </InfoWindow>
        </Map>
      </div>
    );
  }
}

const mapStyles = {
  width: 500,
  height: 500
};

export default GoogleApiWrapper({
  apiKey: "AIzaSyBaRLcO3PsawsQ5aBPJHauIc6_sarXpQDg"
})(GoogleMap);
