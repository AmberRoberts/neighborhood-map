import React, { Component } from 'react';
import './App.css';
import MapContainer from './MapContainer'
import Map from './Map'
import { GoogleApiWrapper } from 'google-maps-react'
// Currently Referencing: https://www.fullstackreact.com/articles/how-to-write-a-google-maps-react-component/

// load api script: https://stackoverflow.com/questions/41709765/how-to-load-the-google-maps-api-script-in-my-react-app-only-when-it-is-require
// or this one https://github.com/leozdgao/react-async-script-loader
// or this tutorial https://github.com/fullstackreact/google-maps-react
// reference here https://stackoverflow.com/questions/48493960/using-google-map-in-react-component
// https://www.fullstackreact.com/articles/how-to-write-a-google-maps-react-component/
// DO THIS ONE https://www.klaasnotfound.com/2016/11/06/making-google-maps-work-with-react/

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
