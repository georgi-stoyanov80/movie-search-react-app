import React, { Component } from 'react';
import Header from './components/Header';
import MovieSearch from './components/MovieSearch';
import MovieList from './components/MovieList';
import MovieInfo from './components/MovieInfo';
import { Route, Switch, withRouter } from "react-router-dom";

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  apiKey = 'ef2bb6c94175465f3015e8e71a9b457c';

  state = {
    movies: [],
    inputValue: ''
  }

  getMovieData = async e => {
    e.preventDefault();

    let { inputValue } = this.state;
    this.props.history.push('/');

    if (inputValue.length > 0) {
      let res = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${this.apiKey}&language=en-US&query=${inputValue}&page=1&include_adult=false`);
      let data = await res.json();
      this.setState({ movies: data.results });
    }
  }
  
  getInputValue = e => {
    this.setState({ inputValue: e.target.value});
  }

  render() {
    return (
      <React.Fragment>
        <Header />
        <div className="container">
          <MovieSearch 
            getInputValue={this.getInputValue} 
            getMovieData={this.getMovieData} 
          />
          <Switch>
            <Route path="/movieInfo/:id" component={MovieInfo} />
            <MovieList movies={this.state.movies} />
          </Switch>
        </div>
      </React.Fragment>
    )
  }
}

export default withRouter(App);
