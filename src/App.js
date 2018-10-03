import React, { Component } from 'react';
import axios from 'axios'
import './App.css';
import Sidebar from './Sidebar'
import Menu from './Menu'
import Map from './Map'

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

class App extends Component {


  render() {
    return (
      <main>
      { /* <Sidebar /> */ }
      <Menu />
      <Map />
      </main>
    );
  }
}

export default App;
