import React from "react";
import "./App.css";
import MapContainer from "./components/Map";

class App extends React.Component {
  state = {
    loading: true,
    longitude: "",
    latitude: "",
    error: false,
    map: undefined
  };

  componentDidMount() {
    fetch("https://api.wheretheiss.at/v1/satellites/25544")
      .then(results => {
        return results.json();
      })
      .then(data => {
        let map = (
          <div className="mapContainer">
            <MapContainer latitude={data.latitude} longitude={data.longitude} />
          </div>
        );

        this.setState({ map: map });
      });
  }
  render() {
    return (
      <div className="App">
        <h1>
          {" "}
          Where in the world is the International Space Station overhead right
          now?
        </h1>
        {this.state.map}
      </div>
    );
  }
}

export default App;
