import React, { Component } from 'react';
import axios from 'axios'
import './App.css';
import Sidebar from './Sidebar'
import Menu from './Menu'

// TODO: add foursquare usage to README
// TODO: add marker info, make info box?
// TODO: sidebar CSS
// TODO: add stuff to sidebar
// TODO: search filter
// TODO: add wikipedia info on the town, or flickr images when you click on "info"
// TODO: navigation, add tab index o and on click, on keypress listeners to make it open
// TODO: service worker https://youtu.be/LvQe7xrUh7I?t=3543

// Reference https://www.fullstackreact.com/articles/how-to-write-a-google-maps-react-component/ https://stackoverflow.com/questions/19436555/foursquare-venue-explore-selecting-multiple-sections
// https://stackoverflow.com/questions/45429484/how-to-implement-google-maps-js-api-in-react-without-an-external-library
// or this tutorial https://github.com/fullstackreact/google-maps-react
// reference here https://stackoverflow.com/questions/48493960/using-google-map-in-react-component

class Map extends React.Component {

  state = {
    venues: []
  }


  componentDidMount() {
    this.getVenues()
  }

  loadMap = () => {
    loadScript("https://maps.googleapis.com/maps/api/js?key=AIzaSyA_f2pEa5Dk54Q0uWavdCQcSkJSZDvLx8g&callback=initMap")
    window.initMap = this.initMap
  }
/* via tutorial on creating a foursquare API call by Elharony Published on YouTube, Aug 17, 2018, as well as via foursquare documentation */

  getVenues = () => {
    const endpoint = "https://api.foursquare.com/v2/venues/explore?"
    const parameters = {
      client_id: "VEJCMS5O4IFLMWFHQNX5XNJL5TEGZSQ5LZGMJYJZ23CFBGKV",
      client_secret: "Q1CYMWTSVHPNBDMNBQAZ1EXTCROV31TMGQZ3MTGZWVUPPCSX",
      categoryID: "4deefb944765f83613cdba6e, 4bf58dd8d48988d181941735, 4d4b7105d754a06374d81259, 4bf58dd8d48988d1fa931735, 4bf58dd8d48988d117941735, 4d4b7105d754a06377d81259, 56aa371be4b08b9a8d5734c3, 4f4530164b9074f6e4fb00ff, 4bf58dd8d48988d12d951735",
      intent: "browse",
      near: "Hagnau am Bodensee",
      v: 20180927 // API version - meaning app is prepared for API changes up to this date
    }

    axios.get(endpoint + new URLSearchParams(parameters))
    .then(response => {
      this.setState({ venues: response.data.response.groups[0].items }, this.loadMap()) // venues appear in state, map loads
      console.log(response.data.response.groups[0].items) // creates an array of objects as generated in the above API call
    })
    .catch(error => {
      console.log("Whoops, something went wrong" + error)
    })
  }

  initMap = () => {
          let map = new window.google.maps.Map(document.getElementById('map'), {
            center: {lat: 47.6753, lng: 9.3185},
            zoom: 15,
            mapTypeId: "hybrid",
          });

          let infowindow = new window.google.maps.InfoWindow();

          this.state.venues.map(venueMarker => {
            let marker = new window.google.maps.Marker({
              position: {lat: venueMarker.venue.location.lat, lng: venueMarker.venue.location.lng},
              map: map,
              animation: window.google.maps.Animation.DROP,
              title: venueMarker.venue.name
          })

          marker.addListener('click', function() {
            if (marker.getAnimation() !== null) {
            marker.setAnimation(null);
          } else {
            marker.setAnimation(window.google.maps.Animation.BOUNCE);
              setTimeout(function(){ marker.setAnimation(null); }, 750);}
          infowindow.setContent(`<p><strong>${venueMarker.venue.name} </strong></p> <p>is located at <strong>${venueMarker.venue.location.formattedAddress}. </strong></p> <p> It is a ${venueMarker.venue.categories[0].name}.</p>`)
          infowindow.open(map, marker);
        })
      });
        }



  render() {
    return (
      <div id="map">
      </div>
    );
  }
}


function loadScript(url) {
  let index = window.document.getElementsByTagName("script")[0]

  /* create a script tag as required by the API, using VanillaJS to generate this from documentation:
  <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap"
  async defer></script> */

  let script = window.document.createElement("script")
  script.src = url
  script.async = true
  script.defer = true
  /* Select the first script tag, insert the script before the parent node to keep it at the beginning of the scripts. */
  index.parentNode.insertBefore(script, index)
}

export default Map;
