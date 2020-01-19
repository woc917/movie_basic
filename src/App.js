import React, { Component } from 'react'
import './App.css'


export default class App extends Component {

// 라이프 사이클

// 상태선언
state = {
  count: 0
};

// 함수선언
add = () => {
  this.setState(current => ({count: current.count + 1}));
}

minus = () => {
  this.setState(current => ({count: current.count - 1 }));
}

  render() {
    return (
      <div className="App">
        <h1>The number is: {this.state.count}</h1>
        <button onClick={this.add}>Add</button>
        <button onClick={this.minus}>Minus</button>
        
      </div>
    )
  }
}


