import React, { Component } from 'react';
// import Map from './Map';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';

export class MapContainer extends React.Component {
  render() {

    {/* Set the size for the map */}
    const style = {
      height: "100vh",
      width: "100vw"
    }

    if (!this.props.loaded) {
      return <div>Loading...</div>
    }

    return (
      <div style={style}>
      {/* Map component rendered with jsx */}
      <Map
      google={this.props.google}
      style={style}
          initialCenter={{
            lat: 47.6753,
            lng: 9.3185
          }}
          zoom={15}
          onClick={this.onMapClicked}
        />
      </div>
    )
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyA_f2pEa5Dk54Q0uWavdCQcSkJSZDvLx8g"
})(MapContainer)
