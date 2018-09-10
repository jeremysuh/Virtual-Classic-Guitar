import React, { Component } from 'react';
import "./ButtonPanel.css";
import Pizzicato from 'pizzicato';
import {Howl, Howler} from 'howler';


import logo from './bark.wav';
import logo2 from './bark.wav';







class Sound {

  constructor() {
    console.log("hello")
  }

  init() {
       console.log("hello")

  }

  return50(){
    return 50;
  }

 

}

    
var sound;
var acousticGuitar;
var thesound;
class ButtonPanel extends Component {




  state = { counter: 1};
  

    constructor(props){
        super(props);
        this.init();

     

    }


    init(){
    thesound = logo;
    acousticGuitar = new Pizzicato.Sound(thesound);
    sound = new Howl({
  src: [logo]
});

    }



    handleClick = () => {


        var s = new Sound();

        this.setState(() => ({
            counter: s.return50()
         }));

               
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
