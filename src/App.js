import React from "react";
import "./App.css";
import MapContainer from "./components/Map";

class App extends React.Component {
  state = {
    loading: true,
    longitude: "",
    latitude: "",
    error: false
  };

  componentDidMount() {
    fetch("http://api.open-notify.org/iss-now.json")
      .then(results => {
        return results.json();
      })
      .then(data => {
        if (data.message === "success") {
          console.log(data);
          this.setState({
            loading: false,
            longitude: data.iss_position.longitude,
            latitude: data.iss_position.latitude,
            error: false
          });
        } else {
          this.setState({ error: true });
        }
      });
  }
  render() {
    return (
      <div className="App">
        <h1>Where is the International Space Station over right now</h1>
        <MapContainer
          latitude={this.state.latitude}
          longitude={this.state.latitude}
          loading={this.state.loading}
          error={this.state.error}
        />
      </div>
    );
  }
}

export default App;
