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
    <ul>
    <li className="bm-item">
    Doggies Say Bark
    </li>
    {this.props.venues && this.props.venues.map((place, id) => (
      <li key={place.id}>
      {this.place.name}
      </li>
    ))}
  </ul>
  )
}
}

export default VenuesList
