import React, { Component } from 'react';
import Map from './Map'
import ListItem from './ListItem'

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

    render() {
        return (
            <ul className='venue-list'>
                {this.props.venues &&
                    this.props.venues.map((venue, id) => (
                        <ListItem key={id} {...venue}/>

                    ))}
            </ul>
        )
    }
}

export default VenuesList
