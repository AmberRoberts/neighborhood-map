// reference https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
import React from 'react';

const ListItem = ({venue, showVenue}) => {
  return (
    <li
      className='bm-item'
      onClick={() => {
        showVenue(venue);
      }}
    >
      {venue.venue.name}
    </li>
  )
}
export default ListItem;
