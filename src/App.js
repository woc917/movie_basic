import React, { Component } from 'react'
import './App.css'
import Axios from 'axios' // 네트워크 라이브러리
import Movie from './Movie'


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
            <Movie 
              id={movie.id}
              title={movie.title}
              year={movie.year}
              summary={movie.summary}
              poster={movie.medium_cover_image}
            />
          ))
        )}
        
      </div>
    )
  }
}


