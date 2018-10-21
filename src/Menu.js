import React, { Component } from 'react';
import './App.css';
import { slide as Menu } from 'react-burger-menu'
import ListItem from './ListItem'

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
