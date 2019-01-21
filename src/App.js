import React, { Component } from 'react';
import logo from './logo.svg';
import note from './note.png';

import './App.css';
import guitar from './guitar.png';

import Pizzicato from 'pizzicato';
import {Howl, Howler} from 'howler'



import GuitarTabPanel from "./GuitarTabPanel";
import ButtonPanel from "./ButtonPanel";



class App extends Component {


    mycallback = (datafromchild) => {

            // this.setState(() => ({
         	//   counter: s.return50()
        	// }));
        	// this

        }

  render() {


    return (
      <div className="App">
        <header className="App-header">
          <img src={note} id="note" alt="note" />
          <h1 className="App-title">Virtual Classical Guitar</h1>
        </header>
          <br/>
        <GuitarTabPanel callbackFromParent={this.myCallback}/> 
        <img src={guitar}  id="guitar_image" alt="guitar" />

      </div>
    );
  }
}

export default App;
