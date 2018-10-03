import React, { Component } from 'react';
import Map from './Map'

class VenuesList extends React.Component {
//
// state = {
//   places: []
// }
//
// componentWillMount() {
//   this.props.venues.map
//   .then(places => {
//   this.setState({ places });
// })
// }

render () {
  return (
    <ul className="bm-item-list">
    <li className="bm-item">
    Doggies Say Bark
    </li>
    {this.props.venues && this.props.venues.map((venue, id) => (
      <li key={venue.id}
      {...venue}
      className="bm-item">
      {this.props.name}
      </li>
    ))}
  </ul>
  )
}
}

export default VenuesList
