import React, { Component } from 'react';
import axios from 'axios'
import './App.css';
import { slide as Menu } from 'react-burger-menu'
import ListItem from './ListItem'
import SearchForm from './SearchForm'

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
  menu: [],
  itemsList: []
}

  render () {
    return (
      <Menu
        noOverlay
        isOpen={this.state.menuOpen}
        onStateChange={(state) => this.handleStateChange(state)}
      >
      <SearchForm />

      <ul className='bm-item-list'>
          {this.props.venues &&
              this.props.venues.map((venue, id) => (
                  <ListItem key={id} {...venue}/>
              ))}
      </ul>
      </Menu>

    );
  }
}

export default Example
