import React, { Component } from 'react'
import './App.css'
import Axios from 'axios'


export default class App extends Component {

  state = {
    isLoading: true,
    movies: []
  }

  getMovies = async () => {
    
    const {
      data: {
        data: { movies }
      }
    } = await Axios.get("https://yts-proxy.now.sh/list_movies.json");

    this.setState({ movies, isLoading: false });
    
  }

  componentDidMount() {
    this.getMovies();
  }

  render() {

    const { isLoading, movies } = this.state 

    return (
      <div className="App">

        {isLoading ? (
          "Loading..."
        ): (
          movies.map(movie => (
            <h1>{movie.title}</h1>
          ))
        )}
        
      </div>
    )
  }
}


