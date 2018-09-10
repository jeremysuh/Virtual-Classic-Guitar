import React, { Component } from 'react';
import logo from './logo.svg';
import note from './note.png';

import './App.css';
import guitar from './guitar.png';



import GuitarTabPanel from "./GuitarTabPanel";
import ButtonPanel from "./ButtonPanel";



class App extends Component {


  render() {


    return (
      <div className="App">
        <header className="App-header">
          <img src={note} id="note" alt="note" />
          <h1 className="App-title">Virtual Classical Guitar</h1>
        </header>
          <br/>
        <GuitarTabPanel/> 
        <br/>
        <ButtonPanel name = "Tuner"> </ButtonPanel>
                <br/>
        <img src={guitar}  id="guitar_image" alt="guitar" />

      </div>
    );
  }
}

export default App;
