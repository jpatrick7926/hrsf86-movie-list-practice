import React from 'react';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id = 'add'>
        <input type = 'text' id = 'movie'/>
        <button onCLick = {() => this.props.addAMovie(document.getElementById('movie').value)}> Submit </button>
      </div>
    )
  }
}

export default AddMovie;
