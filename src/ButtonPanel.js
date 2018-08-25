import React, { Component } from 'react';
import "./ButtonPanel.css"






class ButtonPanel extends Component {


    constructor(props){
        super(props);
    }

render() {
    
        return (
            <div id="main_buttons">
            <button class = "music_button"> Play </button>
            <button class = "music_button"> Pause </button>
            <button class = "music_button"> Stop </button>

             </div>

             
            );

  }

}

export default ButtonPanel;
