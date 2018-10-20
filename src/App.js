import React, { Component } from 'react';
import './App.css';
import Menu from './Menu'
import axios from 'axios'

// TODO: add foursquare usage to README
// TODO: search filter
// TODO: navigation, add tab index o and on click, on keypress listeners to make it open
  // TODO: add to README https://reactjs.org/docs/forms.html
// Reference https://www.fullstackreact.com/articles/how-to-write-a-google-maps-react-component/ https://stackoverflow.com/questions/19436555/foursquare-venue-explore-selecting-multiple-sections
// https://stackoverflow.com/questions/45429484/how-to-implement-google-maps-js-api-in-react-without-an-external-library
// or this tutorial https://github.com/fullstackreact/google-maps-react
// reference here https://stackoverflow.com/questions/48493960/using-google-map-in-react-component
// reference here https://stackoverflow.com/questions/34573792/javascript-function-to-return-object-returns-object-object

class App extends Component {

  state = {
    venues: [],
    markers: [],
    activeMarker: [],
    query: ""
  }

  componentDidMount() {
    this.getVenues()
  }

  clearMarkers = () => {
    this.setState({ markers: [] })
  }

  showVenue = (venue) => {
      this.state.markers.map(marker => {
        if (marker.id === venue.venue.id) {
          this.setState({ activeMarker: marker }); // adds clicked ListItem to activeMarker state.
          window.google.maps.event.trigger(marker, "click")
        }
      });
      console.log(this.state.activeMarker)
    }

    // when text is typed in search field, state updates
    updateQuery = query => {
      query = query.toLowerCase();
      this.setState({query}, ()=> {
        this.loadMap()
        });
    };


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
      near: "Hagnau am Bodensee, Germany",
      v: 20180927 // API version - meaning app is prepared for API changes up to this date
    }

    axios.get(endpoint + new URLSearchParams(parameters))
    .then(response => {
      this.setState({ venues: response.data.response.groups[0].items }), this.loadMap() // venues appear in state, map loads
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


          let infowindow = new window.google.maps.InfoWindow();

          this.state.venues.map(venueMarker => {
            let marker = new window.google.maps.Marker({
              position: {lat: venueMarker.venue.location.lat, lng: venueMarker.venue.location.lng},
              map: map,
              animation: window.google.maps.Animation.DROP,
              title: venueMarker.venue.name,
              id: venueMarker.venue.id
          })

          //check if the title of the current marker contains any part of the query string
          marker.visible = marker.title.toLowerCase().includes(this.state.query);

          marker.addListener('click', function(toggleBounce) {
            if (marker.getAnimation() !== null) {
            marker.setAnimation(null);
          } else {
            marker.setAnimation(window.google.maps.Animation.BOUNCE);
              setTimeout(function(){ marker.setAnimation(null); }, 750);}
              let infoContent = `<div className="infowindow" tabindex="0" aria-role="alert"><p><strong>${venueMarker.venue.name} </strong></p> <p>is located at <strong>${venueMarker.venue.location.formattedAddress}. </strong></p> <p> It is a ${venueMarker.venue.categories[0].name}.</p>`
          infowindow.setContent(infoContent)
          infowindow.open(map, marker);
        })
        this.setState({ markers: [...this.state.markers, marker] }) // via https://medium.com/@thejasonfile/using-the-spread-operator-in-react-setstate-c8a14fc51be1
      });
        }


  render() {
    return (
      <main>
      { /* <Sidebar /> */ }
      <Menu
      venues={this.state.venues.filter(venue => venue.venue.name.toLowerCase().includes(this.state.query.toLowerCase()))}
      markers={this.state.markers.filter(marker => marker.title.toLowerCase().includes(this.state.query.toLowerCase()
      ))}
      showVenue={this.showVenue}
      updateQuery={this.updateQuery}
      />
      <div id="map" role="application" aria-label="Map">
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
