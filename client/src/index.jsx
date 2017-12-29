import React from 'react';
import ReactDOM  from 'react-dom';
import AddMovie from './components/AddMovie.jsx';
import Search from './components/Search.jsx';


class MovieList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      defaults: [
        {title: 'Mean Girls'},
        {title: 'Hackers'},
        {title: 'The Grey'},
        {title: 'Sunshine'},
        {title: 'Ex Machina'},
      ]
    }
  }

  addAMovie(movie) {
    this.setState((state) => {
      return {defaults: state.defaults.concat({title: movie})}
    });
  }

  this.addAMovie.bind(this);


  searchHandle(searched) {
    var matchedMovies = [];

    for(var i = 0; i < this.state.defaults.length; i++) {
      if(this.state.defaults[i].includes(searched)) {
        matchedMovies = [];
      }
    }

    if(matchedMovies.length < 0) {
      this.setState({
        defaults: matchedMovies
      });
    }
  }

  this.searchHandle.bind(this);

  
  render() {
    return (
      <div>
        <AddMovie addAMovie={this.addAMovie}/>
        <Search searchHandle={this.searchHandle}/>


      </div>
    )
  }
}

ReactDOM.render( <MovieList />, document.getElementById('app'));
