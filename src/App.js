import React, { Component } from 'react';
import './App.css';
import Menu from './Menu'
import axios from 'axios'

// TODO: add foursquare usage to README
// TODO: search filter
// TODO: navigation, add tab index o and on click, on keypress listeners to make it open

// Reference https://www.fullstackreact.com/articles/how-to-write-a-google-maps-react-component/ https://stackoverflow.com/questions/19436555/foursquare-venue-explore-selecting-multiple-sections
// https://stackoverflow.com/questions/45429484/how-to-implement-google-maps-js-api-in-react-without-an-external-library
// or this tutorial https://github.com/fullstackreact/google-maps-react
// reference here https://stackoverflow.com/questions/48493960/using-google-map-in-react-component
// reference here https://stackoverflow.com/questions/34573792/javascript-function-to-return-object-returns-object-object

class App extends Component {

  state = {
    venues: [],
    markers: [],
  }

  componentDidMount() {
    this.getVenues()
  }

  clearMarkers = () => {
    this.setState({ markers: [] })
  }

  showVenue = (venue) => {
    let markers = this.state.markers.filter(m => m.id === venue.id)[0];
    // this.clearMarkers() // Clears the markers array, but they're not attached.  Why?
    if (this.state.markers === this.state.venues) {
      console.log(`You clicked ${venue.name} ${venue.id} ${this.props.ListItem}`) // Prints these things, but undefined for ListItem?
    } else {
      console.log(`nope ${this} ${this.state.venues[0]}`) // Why does this print [object Object]
    }
      // TODO: How to get ${venueMarker.venue.id}?
      // TODO: how to change marker visibility or open infoWindow? infowindow.open(map,marker) where/how? https://github.com/fullstackreact/google-maps-react/issues/108
      // window.google.maps.event.trigger(marker, animation) ??
    }


  loadMap = () => {
    loadScript("https://maps.googleapis.com/maps/api/js?key=AIzaSyA_f2pEa5Dk54Q0uWavdCQcSkJSZDvLx8g&libraries=places&callback=initMap")
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
      this.setState({ venues: response.data.response.groups[0].items, markers: response.data.response.groups[0].items }, this.loadMap()) // venues appear in state, map loads
      console.log(response.data.response.groups[0].items) // displays list generated in the above API call
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

        let input = document.getElementById('pac-input');
        let searchBox = new window.google.maps.places.SearchBox(input);
        map.controls[window.google.maps.ControlPosition.TOP_LEFT].push(input);

        // Bias the SearchBox results towards current map's viewport.
        map.addListener('bounds_changed', function() {
          searchBox.setBounds(map.getBounds());
        });

        let markers = [];
        // Listen for the event fired when the user selects a prediction and retrieve
        // more details for that place.
        searchBox.addListener('places_changed', function() {
          let places = searchBox.getPlaces();

          if (places.length == 0) {
            return;
          }

          // Clear out the old markers.
          markers.forEach(function(marker) {
            marker.setMap(null);
          });
          markers = [];

          // For each place, get the icon, name and location.
          let bounds = new window.google.maps.LatLngBounds();
          places.forEach(function(place) {
            if (!place.geometry) {
              console.log("Returned place contains no geometry");
              return;
            }
            let icon = {
              url: place.icon,
              size: new window.google.maps.Size(71, 71),
              origin: new window.google.maps.Point(0, 0),
              anchor: new window.google.maps.Point(17, 34),
              scaledSize: new window.google.maps.Size(25, 25)
            };

            // Create a marker for each place.
            markers.push(new window.google.maps.Marker({
              map: map,
              icon: icon,
              title: place.name,
              position: place.geometry.location
            }));

            if (place.geometry.viewport) {
              // Only geocodes have viewport.
              bounds.union(place.geometry.viewport);
            } else {
              bounds.extend(place.geometry.location);
            }
          });
          map.fitBounds(bounds);
        });

          let infowindow = new window.google.maps.InfoWindow();

          this.state.venues.map(venueMarker => {
            let marker = new window.google.maps.Marker({
              position: {lat: venueMarker.venue.location.lat, lng: venueMarker.venue.location.lng},
              map: map,
              animation: window.google.maps.Animation.DROP,
              title: venueMarker.venue.name,
              id: venueMarker.venue.id
          })
          markers.push(marker)

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
      <main>
      { /* <Sidebar /> */ }
      <Menu
      venues={this.state.venues}
      markers={this.state.markers}
      marker={this.props.marker}
      showVenue={this.showVenue} />
      <div className="search">
       <input id="pac-input" className="controls" type="text" placeholder="Search Box" />
       </div>
      <div id="map">
      </div>
      </main>
    );
  }
}

export default App;

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
