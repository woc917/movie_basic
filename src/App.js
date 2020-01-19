import React, { Component } from 'react'
import './App.css'
import Chicken from './chicken'

export default class App extends Component {

// 라이프 사이클

// 함수선언
// 상태선언

  render() {
    return (
      <div className="App">
        <h1>Hellow World!</h1>
        <Chicken favourite="chicken" />
        <Chicken favourite="beer" />
        <Chicken favourite="chips" />
      </div>
    )
  }
}


