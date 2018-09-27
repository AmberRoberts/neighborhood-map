import React, { Component } from 'react';
import './App.css';
import MapContainer from './MapContainer'
import Map from './Map'
import { GoogleApiWrapper } from 'google-maps-react'
// Currently Referencing: https://www.fullstackreact.com/articles/how-to-write-a-google-maps-react-component/

// or this tutorial https://github.com/fullstackreact/google-maps-react
// reference here https://stackoverflow.com/questions/48493960/using-google-map-in-react-component

class App extends Component {
  render() {
    return (
      <main>
      <div id="map">
      <MapContainer />
      </div>
      </main>
    );
  }
}

export default App;
