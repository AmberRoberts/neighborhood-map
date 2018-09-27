import React, { Component } from 'react';
import './App.css';
// import MapContainer from './MapContainer'
// import Map from './Map'
// import { GoogleApiWrapper } from 'google-maps-react'
// Currently Referencing: https://www.fullstackreact.com/articles/how-to-write-a-google-maps-react-component/

// or this tutorial https://github.com/fullstackreact/google-maps-react
// reference here https://stackoverflow.com/questions/48493960/using-google-map-in-react-component

class App extends Component {

  componentDidMount() {
    this.loadMap()
  }

  loadMap = () => {
    loadScript("https://maps.googleapis.com/maps/api/js?key=AIzaSyA_f2pEa5Dk54Q0uWavdCQcSkJSZDvLx8g&callback=initMap")
    window.initMap = this.initMap
  }

  initMap = () => {
          let map = new window.google.maps.Map(document.getElementById('map'), {
            center: {lat: 47.6753, lng: 9.3185},
            zoom: 12
          });
        }


  render() {
    return (
      <main>
      <div id="map">
      { /* <MapContainer /> */ }
      </div>
      </main>
    );
  }
}


function loadScript(url) {
  let index = window.document.getElementsByTagName("script")[0]

  /* create a script tag like the API requires, using VanillaJS
  <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap"
  async defer></script> */

  let script = window.document.createElement("script")
  script.src = url
  script.async = true
  script.defer = true
  /* Select the first script tag, insert the script before the parent node to keep it at the beginning of the scripts. */
  index.parentNode.insertBefore(script, index)
}

export default App;
