import React, { Component } from 'react'
import './App.css'


export default class App extends Component {

  state = {
    isLoading: true,
    movies: []
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ isLoading:false });
    }, 6000);
  }

  render() {

    const { isLoading } = this.state 

    return (
      <div className="App">

        {isLoading ? "Loading..." : "We are ready"}
        
      </div>
    )
  }
}


