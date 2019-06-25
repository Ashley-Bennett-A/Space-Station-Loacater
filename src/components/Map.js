import React from "react";
import { Map, GoogleApiWrapper, Marker, InfoWindow } from "google-maps-react";

//  Styling of the map includng size
const mapStyles = {
  width: "90%",
  height: "90%"
};

export class MapContainer extends React.Component {
  state = {
    showingInfoWindow: false, //Hides or the shows the infoWindow
    activeMarker: {}, //Shows the active marker upon click
    selectedPlace: {} //Shows the infoWindow to the selected place upon a marker
  };

  //    When clicked on changes the state to show
  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });

  //    Closes info box
  onClose = props => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  };

  //    Custom icon
  icon = {
    url: "https://www.stickpng.com/assets/images/585f967bcb11b227491c3591.png",
    scaledSize: { width: 32, height: 32 }
  };

  render() {
    return (
      <div className="mapContainer">
        <Map
          google={this.props.google}
          zoom={5}
          style={mapStyles}
          initialCenter={{
            lat: this.props.latitude,
            lng: this.props.longitude
          }}
        >
          <Marker
            onClick={this.onMarkerClick}
            name={"International Space Station is directly above here"}
            icon={this.icon}
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

export default GoogleApiWrapper({
  apiKey: "AIzaSyB7oIAIYUzlDEhJ_bbfagxHFyJVSYYEhRs"
})(MapContainer);
