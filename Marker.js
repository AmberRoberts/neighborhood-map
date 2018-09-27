import React, { Component } from "react";
import Map from './Map'
import {GoogleApiWrapper} from 'google-maps-react';


// https://github.com/fullstackreact/google-maps-react#marker

export class Marker extends React.Component {

  componentDidUpdate(prevProps) {
      // component updated
      if ((this.props.map !== prevProps.map) ||
      (this.props.position !== prevProps.position)) {
        // The relevant props have changed
        this.renderMarker();
    }
    }

    renderMarker() {
      let {
        map, google, position, mapCenter
      } = this.props;

      let pos = position || mapCenter;
      position = new google.maps.LatLng(pos.lat, pos.lng);
      const pref = {
        map: map,
        position: position
      };
      this.marker = new google.maps.Marker(pref);
    }

  render() {
      return null;
    }
  }
