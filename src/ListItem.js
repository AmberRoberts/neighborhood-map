import React, { Component } from 'react';

class ListItem extends Component {


// reference https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
    // showVenue = (venue) => {
      // let marker = this.props.markers.find(marker => marker.id === this.props.venue.id)
      // if (this.props.marker.id === this.props.venue.id) {
    //     marker.setAnimation(window.google.maps.Animation.BOUNCE);
    //       setTimeout(function(){ marker.setAnimation(null); }, 750);}
    //     // this.props.infowindow.open(this.props.map, this.props.marker)
    // console.log(this.props.venue.id)
  // } else {
    // console.log(this.props.marker)
  // }
// }


/*    showVenue = (venue) => {
      if (ListItem.id === this.props.venue.id) {
      let selected = this.props.markers.find(marker => this.props.marker.id === this.props.venue.id)
      window.google.maps.event.trigger(selected, 'click')
  } else {
        console.log(venue)
  }
} */

  /*   showVenue = (venue) => {
      const { infowindow, venueMarker, map } = this.props;
      this.props.state.sidebar.map(marker => {
        infowindow.setContent(`<p><strong>${venueMarker.venue.name} </strong></p> <p>is located at <strong>${venueMarker.venue.location.formattedAddress}. </strong></p> <p> It is a ${venueMarker.venue.categories[0].name}.</p>`)
        infowindow.open(map, marker);
      })
      console.log(venue) */

      /* showVenue = (venue) => {
          this.props.setState({ this.state.markers: venue })
        } else {
          console.log(`You clicked ${venue.name} ${venue.id} ${ListItem.id}`)
      } */



    render() {
        return (
            <li
            className='bm-item'
            onClick={() => this.props.showVenue(this.props.venue, this.props.marker)}>
                {this.props.venue.name}
            </li>
        )
    }
}

export default ListItem
