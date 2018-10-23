import React from 'react';

const ListItem = ({venue, showVenue}) => {
  return (
    <li
      tabIndex="0"
      aria-labelledby= {venue.venue.name}
      className='bm-item'
      onClick={() => {
        showVenue(venue);
      }}
      onKeyPress={() => {
        showVenue(venue);
      }}
    >
      {venue.venue.name}
    </li>
  )
}
export default ListItem;
