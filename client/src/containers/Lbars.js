import React, { Component } from "react";
import Axios from "axios";
import GoogleMapReact from "google-map-react";
import MapFlag from "../components/MapFlag/MapFlag";

class Bars extends Component {
  state = {
    bars: []
  };
  static defaultProps = {
    center: {
      lat: 33.7756,
      lng: -84.3963
    },
    zoom: 15
  };
  componentDidMount() {
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    const mapsurl = `https://maps.googleapis.com/maps/api/place/textsearch/json?query=bars+in+Atlanta&key=AIzaSyCxdeV70eNJ_KpZDdphRVKntO23zlCg6KA`;

    Axios.get(proxyurl + mapsurl).then(response => {
      console.log(response);
      this.setState({
        bars: response.data.results
      });
      console.log(this.state.bars);
    });
  }

  render() {
    return (
      <div>
        <div style={{ height: "100vh", width: "75%" }}>
          <GoogleMapReact
            bootstrapURLKeys={{
              key: "AIzaSyCxdeV70eNJ_KpZDdphRVKntO23zlCg6KA"
            }}
            defaultCenter={this.props.center}
            defaultZoom={this.props.zoom}
          >
            {this.state.bars.map((bar, index) => (
              <MapFlag
                key={index}
                lat={bar.geometry.location.lat}
                lng={bar.geometry.location.lng}
                text={bar.name}
              />
            ))}
          </GoogleMapReact>
        </div>
        <h1>Local Bars to Search</h1>
        <div>
          {this.state.bars.map((bar, index) => (
            <div className="row border" key={bar.id}>
              <div className="col-md-8">
                <h1>{bar.name}</h1>
                <h5>{bar.formatted_address}</h5>
              </div>
            </div>
          ))}
          <form>
            <p>Bars </p>
          </form>
        </div>
      </div>
    );
  }
}

export default Bars;
