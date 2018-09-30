import React, { Component } from 'react';
import axios from 'axios'
import './App.css';
import { slide as Menu } from 'react-burger-menu'

class Example extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
      menuOpen: false
    }
  }

  closeMenu () {
    this.setState({menuOpen: false})
  }

  handleStateChange (state) {
    this.setState({menuOpen: state.isOpen})
  }
  showSettings (event) {
    event.preventDefault();
  }

  render () {
    return (
      <Menu
        noOverlay
        isOpen={this.state.menuOpen}
        onStateChange={(state) => this.handleStateChange(state)}
      >

      <ol className="venuesList">
      {this.props.venues.map(venue => (
        <li key={venue}>
        {this.props.venueMarker.venue.name}
        </li>
      ))}
      </ol>

      </Menu>
    );
  }
}

export default Menu
