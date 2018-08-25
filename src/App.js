import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


import GuitarTabPanel from "./GuitarTabPanel";
import ButtonPanel from "./ButtonPanel";



class App extends Component {


  render() {


    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Virtual Classical Guitar</h1>
        </header>
          <br/>
        <GuitarTabPanel/> 
        <br/>
        <ButtonPanel name = "Tuner"> </ButtonPanel>
      </div>
    );
  }
}

export default App;
