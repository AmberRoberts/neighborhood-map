import React, { Component } from "react";
import ReactDOM from 'react-dom'


export class Map extends React.Component {

  constructor(props) {
      super(props);

      const {lat, lng} = this.props.initialCenter;
      this.state = {
        currentLocation: {
          lat: lat,
          lng: lng
        }
      }
    }
/* Check to see if the component has changed, and update component if so */

  componentDidMount() {
      this.loadMap();
    }

    loadMap() {
      if (this.props && this.props.google) {
        // google is available
        const {google} = this.props;
        const maps = google.maps;

        const mapRef = this.refs.map;
        const node = ReactDOM.findDOMNode(mapRef);

        let {initialCenter, zoom} = this.props;
        const {lat, lng} = this.state.currentLocation;
        const center = new maps.LatLng(lat, lng);
        const mapConfig = Object.assign({}, {
          center: center,
          zoom: zoom
        })
        this.map = new maps.Map(node, mapConfig);
      }
  }

  render() {
    return (
      <div ref='map'>
        Loading map...
      </div>
    )
  }
}
