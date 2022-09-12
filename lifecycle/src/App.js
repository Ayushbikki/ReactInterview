//import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter';
import Counter1 from './components/Counter1';

import React, { Component } from 'react'

export default class App extends Component {
  
  state ={
    num:0
  }
  handleClick() {
    this.setState((state) => ({ num: state.num + 1 }));
  }
  render() {
    return (
      <>
      <button onClick={this.handleClick.bind(this)}>Incremrnt</button>
    <Counter1 number={this.state.num}/> 
      </>
     
    )
  }
}
