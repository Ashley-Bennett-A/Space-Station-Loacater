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
    fetch("http://api.open-notify.org/iss-now.json")
      .then(results => {
        return results.json();
      })
      .then(data => {
        let map = (
          <div className="mapContainer">
            <MapContainer
              latitude={data.iss_position.latitude}
              longitude={data.iss_position.longitude}
            />
          </div>
        );

        this.setState({ map: map });

        // if (data.message === "success") {
        //   console.log(data);
        //   this.setState({
        //     loading: false,
        //     longitude: data.iss_position.longitude,
        //     latitude: data.iss_position.latitude,
        //     error: false
        //   });
        // } else {
        //   this.setState({
        //     error: true
        //   });
        // }
      });
  }
  render() {
    return (
      <div className="App">
        <h1> Where is the International Space Station over right now?</h1>
        {this.state.map}
      </div>
    );
  }
}

export default App;
