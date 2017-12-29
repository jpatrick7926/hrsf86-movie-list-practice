import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="searchBar">
        <input type="form" id="searchMovies"/>
        <button onClick={() => this.props.searchHandle(document.getElementById("searchMovies").value)}>Search</button>
      </div>
    )
  }
}

export default Search;
