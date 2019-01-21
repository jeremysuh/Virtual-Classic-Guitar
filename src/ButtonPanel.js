import React, { Component } from 'react';
import "./ButtonPanel.css";
import Pizzicato from 'pizzicato';
import {Howl, Howler} from 'howler';


import logo from './beep.mp3';
import logo2 from './note.mp3';





    
var sound, sound2;
var acousticGuitarSound;
var thesound, thesound2;

var stringOne, stringTwo, stringThree, stringFour, stringFive, stringSix;
class ButtonPanel extends Component {




  state = { counter: 1};
  

    constructor(props){
        super(props);
        this.init();

     

    }


    init(){


    thesound = logo2;
    acousticGuitarSound = new Pizzicato.Sound(thesound);
    sound = new Howl({
    src: [logo2]
    });

    thesound = logo;
    acousticGuitarSound = new Pizzicato.Sound(thesound);
    sound2 = new Howl({
    src: [logo]
    });

    }



    handleClick = () => {



       // this.setState(() => ({
         //   counter: s.return50()
        // }));

               
        sound2.play();
        sound.play();

    };

    componentDidMount() {


    }

  componentWillUnmount() {

    }


  



render() {


    
        return (
            <div id="main_buttons">

            <button class = "music_button" onClick={this.handleClick}> Play </button>
            <button class = "music_button"> Pause </button>
            <button class = "music_button"> Stop </button>

             </div>

             
            );

  }

}

export default ButtonPanel;
