import React, { Component } from 'react';
import VenuesList from './VenuesList'

 class Sidebar extends React.Component {
  render() {

    return (
      <div className="nav">
      <VenuesList />
      </div>
    )
  }
}

export default Sidebar
