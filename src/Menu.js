import React, { Component } from 'react';
import './App.css';
import { slide as Menu } from 'react-burger-menu'
import ListItem from './ListItem'
// import SearchForm from './SearchForm'

class Example extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
      menuOpen: true,
      menu: [],
      itemsList: [],
      searchResults: []
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

// filterVenues = query => {
//   {this.props.markers && this.props.markers.forEach(marker => {
// // t/f statement to check query against markers:
// marker.name.toLowerCase().includes(query.toLowerCase()) == true ? marker.setVisible(true) : marker.setVisible(false)
// console.log(marker) // Why won't this log anything?
// })}
// };


// Other option w/ venues instead of markers
// updateQuery = query => {
//   this.setState({ query });
//   const marker = this.props.marker
//   // console.log(query)
//   {this.venues && this.venues.forEach(venue => { // TODO: error here?
// // write t/f statement to check:
// venue.venue.name.toLowerCase().includes(this.state.query.toLowerCase()) === true ? marker.setVisible(true) : marker.setVisible(false)
// })}
// console.log(this.marker) // Returns undefined
// };

  render () {

    const { query } = this.state;

    return (
      <Menu
        width={ 280 }
        id={ "sidebar" }
        role="complementary"
        aria-labelledby="locations sidebar"
        noOverlay
        isOpen={this.state.menuOpen}
        onStateChange={(state) => this.handleStateChange(state)}
      >

      {/* Search Field*/}

      <div className="search-input-wrapper">

      <input
      type="text"
      placeholder="Filter locations by name"
      aria-role="search"
      onChange={e => this.props.updateQuery(e.target.value)}
      />
      <p className="results" tabindex="0">Your search contains {this.props.venues.length} venues.</p>

      </div>

      <ol className='bm-item-list' aria-labelledby="locations">
          {this.props.venues &&
              this.props.venues.map((venue, idx) => {
                return (
                  <ListItem
                  key={idx}
                  venue={venue}
                  showVenue={this.props.showVenue}
                   /> )
              })}
      </ol>
      </Menu>

    );
  }
}

export default Example


// venueFilter = () => {
//   if (this.state.query) {
//     console.log(this.state.query)
//     const venues = this.props.venues.filter(venue =>
//     venue.venue.name.toLowerCase().includes(this.state.query.toLowerCase())
//   );
//   return venues;
//   }
//   return this.props.venues;
// };
//
// handleChange = e => {
//   this.setState({ query: e.target.value });
//   const markers = this.props.venues.map(venue => {
//   const isMatched = venue.venue.name.toLowerCase().includes(e.target.value.toLowerCase());
//   const marker = this.props.markers.find(marker => marker.id === venue.venue.id);
//   if (isMatched) {
//     marker.isVisible = true;
//   }  else {
//     marker.isVisible = false;
//   }
//   return marker;
// });
// this.props.updateSuperState({ markers })
// }
