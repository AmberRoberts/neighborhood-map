import React, { Component } from 'react';
import VenueItem from './VenueItem'
class VenuesList extends React.Component {

render () {
  return (
    <ol className="sidebar">
    <VenueItem />
    </ol>
  )
}
}

export default VenuesList
