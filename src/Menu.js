import React, { Component } from 'react';
import axios from 'axios'
import './App.css';
import { slide as Menu } from 'react-burger-menu'
import VenuesList from './VenuesList'
// import SearchForm from './SearchForm'

class Example extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
      menuOpen: true
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
  // TODO: add to README https://reactjs.org/docs/forms.html
state = {
  menu: []
}

populateMenu = () => {

}

  render () {
    return (
      <Menu
        noOverlay
        isOpen={this.state.menuOpen}
        onStateChange={(state) => this.handleStateChange(state)}
      >
      <input
      type="text"
      placeholder="Plan Your Hagnau Getaway!"
      />
      <VenuesList />
      </Menu>

    );
  }
}

export default Example