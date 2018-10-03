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
    {
      this.state.places
      .map(p => <li key={p.id}> {p.name}
        </li>)}
  </ul>
  )
}
}

export default VenuesList
