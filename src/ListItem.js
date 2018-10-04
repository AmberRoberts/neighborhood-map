import React, { Component } from 'react';

class ListItem extends Component {

    itemClick = (venue) => {
        console.log(venue)
    }

    render() {
        return (
            <li
            className='bm-item'
            onClick={() => this.itemClick(this.props.venue)}>
                {this.props.venue.name}
            </li>
        )
    }
}

export default ListItem
