import React, { Component } from "react";

class SearchForm extends React.Component  {
// TODO: add to README https://www.youtube.com/watch?v=YRiMo2EjVds

// state for query in search field, set an array to hold search results
  state = {
    query: "",
    searchResults: []
  };

  // when text is typed in search field, state updates
  // updateQuery = query => {
  //   this.setState({ query });
  //   console.log(query);
  //   this.searchResults(query);
  // };

render() {
  return (

    <input
    type="text"
    placeholder="Plan Your Hagnau Getaway!"
    />

)
}
}

export default SearchForm
