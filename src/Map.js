import React, { Component } from "react";
import ReactDOM from 'react-dom'


export class Map extends React.Component {

  constructor(props) {
      super(props);

      const {lat, lng} = this.props.initialCenter;
      this.state = {
        currentLocation: {
          lat: 47.6753,
          lng: 9.3185
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
        const mapConfig = {
          center: center,
          zoom: zoom
        };
        this.map = new maps.Map(node, mapConfig);

        let centerChangedTimeout;
              this.map.addListener('dragend', (evt) => {
                if (centerChangedTimeout) {
                  clearTimeout(centerChangedTimeout);
                  centerChangedTimeout = null;
                }
                centerChangedTimeout = setTimeout(() => {
                  this.props.onMove(this.map);
                }, 0);
              })
      }
  }

/* Create markers, map over and run appropriate functions, receive appropriate props and info from Map component */
  renderChildren() {
    const {children} = this.props;

    if (!children) return;

    return React.Children.map(children, c => {
      return React.cloneElement(c, {
        map: this.map,
        google: this.props.google,
        mapCenter: this.state.currentLocation
      });
    })
  }

  render() {
    return (
      <div ref='map'>
        Loading map...
        {this.renderChildren()}
      </div>
    )
  }
}
