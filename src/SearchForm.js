import React, { Component } from "react";

class SearchForm extends React.Component  {
// TODO: add to README https://www.youtube.com/watch?v=YRiMo2EjVds

// state for query in search field, set an array to hold search results
  state = {
    query: "",
    searchResults: []
  };

  // when text is typed in search field, state updates
  updateQuery = query => {
    this.setState({ query });
    console.log(query);
    this.props.markers.forEach(marker => { // TODO: error here?
// write t/f statement to check:
marker.name.toLowerCase().includes(query.toLowerCase()) == true ? marker.setVisible(true) : marker.setVisible(false);
console.log(marker)
})
  };


render() {

const { query } = this.state;

  return (

    <div className="searchField">

    <div className="search-input-wrapper">

    <input
    type="text"
    placeholder="Plan a Hagnau Getaway!"
    value={query}
    onChange={e => this.updateQuery(e.target.value)}
    />
    </div>

    <div className="search-results">
      <ol className="locations">

      {this.state.searchResults.map(searchResults => {
        this.props.markers.map(marker => (
          marker.id === searchResults.id ? window.google.maps.event.trigger(marker, "click") : console.log("wompwomp")
        ));
        console.log({searchResults})

        return (
          <li key={searchResults.id}>
          <this.props.ListItem
          marker={searchResults}
          />
          </li>
        )
      })}
      </ol>
      </div>
</div>
)
}
}

export default SearchForm
