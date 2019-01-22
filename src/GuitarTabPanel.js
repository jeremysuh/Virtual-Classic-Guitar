import React, { Component } from 'react';
import "./GuitarTabPanel.css"
import Pizzicato from 'pizzicato';
import {Howl, Howler} from 'howler'


import logo from './highestring.wav';
import logo2 from './bstring.wav';
import logo3 from './gstring.wav';
import logo4 from './dstring.wav';
import logo5 from './astring.wav';
import logo6 from './lowestring.wav';



var listInfo = 2;

    
var sound, sound2, sound3, sound4, sound5, sound6;
var acousticGuitarSound;
var thesound, thesound2;

var freq_one = [1,370/349,392/349,415/349,440/349,466/349,494/349,525/349,554/349,587/349,622/349,659/349,698/349,740/349,784/349];
var freq_two = [1,277/262, 294/262, 311/262, 329/262, 349/262, 370/262, 392/262, 415/262, 440/262, 466/262, 494/262, 525/262, 554/262, 587/262];
var freq_three = [1,220/208, 233/208, 347/208, 262/208, 277/208, 294/208, 311/208, 329/208, 349/208, 370/208, 392/208, 415/208, 440/208, 466/208];
var freq_four = [1,165/156, 175/156, 185/156, 196/156, 208/156, 220/156, 233/156, 247/156, 262/156, 277/156, 294/156, 311/156, 329/156, 349/156];
var freq_five = [1, 123/117, 131/117, 139/117, 147/117, 156/117, 165/117, 175/117, 185/117, 196/117, 208/117, 220/117, 233/117, 247/117, 262/117];
var freq_six = [1, 92/87, 98/87, 104/87, 110/87, 117/87, 123/87, 131/87, 139/87, 147/87, 156/87, 165/87, 175/87, 185/87, 196/87];


//var stringOne, stringTwo, stringThree, stringFour, stringFive, stringSix;

class GuitarTabPanel extends Component {


    constructor(props){
        super(props);
        this.init();

         this.state = {
          stringOne: "1",
          stringTwo: "2",
          stringThree: "3",
          stringFour: "4",
          stringFive: "5",
          stringSix: "6",
          tabIndex: 0,
          play: false,
          clickedOnce: false,
          bpm: 120,
          play_note: false,

        };

    }


    init(){


    thesound = logo;
    acousticGuitarSound = new Pizzicato.Sound(thesound);
    sound = new Howl({
    src: [logo]
    });

    thesound = logo2;
    acousticGuitarSound = new Pizzicato.Sound(thesound);
    sound2 = new Howl({
    src: [logo2]
    });

    thesound = logo3;
    acousticGuitarSound = new Pizzicato.Sound(thesound);
    sound3 = new Howl({
    src: [logo3]
    });

    thesound = logo4;
    acousticGuitarSound = new Pizzicato.Sound(thesound);
    sound4 = new Howl({
    src: [logo4]
    });

    thesound = logo5;
    acousticGuitarSound = new Pizzicato.Sound(thesound);
    sound5 = new Howl({
    src: [logo5]
    });

    thesound = logo6;
    acousticGuitarSound = new Pizzicato.Sound(thesound);
    sound6 = new Howl({
    src: [logo6]
    });

    }

    testfunction(){
        console.log(this.state.stringOne);
        console.log(this.state.stringTwo);
        console.log(this.state.stringThree);
        console.log(this.state.stringFour);
        console.log(this.state.stringFive);
        console.log(this.state.stringSix);


     }

    


    handleClick = () => {



      this.setState({
          stringOne: document.getElementById("one").value,
          stringTwo: document.getElementById("two").value,
          stringThree: document.getElementById("three").value,
          stringFour: document.getElementById("four").value,
          stringFive: document.getElementById("five").value,
          stringSix: document.getElementById("six").value,
          bpm: document.getElementById("tempo_input").value,
          play_note: false
      }, this.testfunction);



       // this.setState(() => ({
         //   counter: s.return50()
        // }));
               
        this.play();

    };

        play_notes = () => {

          if (this.state.play_note == true & this.state.tabIndex > 0){
              

          var note_one = this.state.stringOne[this.state.tabIndex-1];
          var note_two = this.state.stringTwo[this.state.tabIndex-1];
          var note_three = this.state.stringThree[this.state.tabIndex-1];
          var note_four = this.state.stringFour[this.state.tabIndex-1];
          var  note_five = this.state.stringFive[this.state.tabIndex-1];
          var  note_six = this.state.stringSix[this.state.tabIndex-1];

          var rate = 1;
          var volume = 1;
      
          if (note_one >= 0 | note_one <= 15){
            rate = this.determine_rate(1, note_one);
               sound.rate(rate);
               sound.play();
            }else{
            volume = 0;
          }


          if (note_two >= 0 | note_two <= 15){
            rate = this.determine_rate(2, note_two);
            sound2.rate(rate);
            sound2.play();

          }else{
            volume = 0;
          }


        if (note_three >= 0 | note_three <= 15){
            rate = this.determine_rate(3, note_three);
            sound3.rate(rate);
            sound3.play();

          }else{
            volume = 0;
          }


        if (note_four >= 0 | note_four <= 15){
            rate = this.determine_rate(4, note_four);
            sound4.rate(rate);
            sound4.play();

          }else{
            volume = 0;
          }

        if (note_five >= 0 | note_five <= 15){
            rate = this.determine_rate(5, note_five);
            sound5.rate(rate);
            sound5.play();
          }else{
            volume = 0;
          }


              

        if (note_six >= 0 | note_six <= 15){
            rate = this.determine_rate(6, note_six);
            sound6.rate(rate);
            sound6.play();
          }else{
            volume = 0;
          }

                this.setState({
                 play_note: false,
                  });

            }

        }


     determine_rate = (string, fret) => {

        var freq_arr = freq_one;
        var rate = 1;

        switch (freq_arr){

          case 1: freq_arr = freq_one;
            break;
          case 2: freq_arr = freq_two;
            break;
          case 3: freq_arr = freq_three;
            break;
          case 4: freq_arr = freq_four;
            break;
          case 5: freq_arr = freq_five;
            break;
          case 6: freq_arr = freq_six;
            break;
        }
        return freq_arr[fret];
     }


    test = () => {


      this.setState({
          tabIndex: this.state.tabIndex + 1
      });
          }

    play = () => {


            var the_bpm = this.state.bpm;
            

      
        if (!this.state.play){

          if (the_bpm < 0 | the_bpm > 240 | the_bpm == null){
              the_bpm = 120;
            } 

          this.setState({
             bpm: document.getElementById("tempo_input").value

          });


          this.timer = setInterval(() => {


          this.setState((state, props) => ({
           tabIndex: state.tabIndex + 1,
           play_note: true
          }));


          }, 60000/the_bpm);

          if (this.state.clickedOnce == false){
          this.notes = setInterval(this.play_notes);
          this.state.clickedOnce = true;
          }
          }

          this.setState({
          play: true
          });

    }


    stop = () => {

      sound.stop();
      sound2.stop();
      sound3.stop();
      sound4.stop();
      sound5.stop();
      sound6.stop();

      clearInterval(this.timer);
      clearInterval(this.play_notes);

      this.setState({
          play: false,
          play_note: false,
          tabIndex: 0,
          bpm: document.getElementById("tempo_input").value
      });

    }

    componentDidMount() {
      console.log("hello?");

    }

  componentWillUnmount() {

    }

         returnTabOne = () => {
        
        listInfo = 8;
        this.props.callbackFromParent(listInfo);

        };


    testy(){
        console.log("yeet");
    }

      loadTab = () => {

        if (document.getElementById("music_tab_selector").value != 2){
          document.getElementById("one").value = "";
          document.getElementById("two").value = "";
          document.getElementById("three").value = "";
          document.getElementById("four").value = "";
          document.getElementById("five").value = "";
          document.getElementById("six").value = "";
        document.getElementById("tempo_input").value = "120";

          this.setState({
          bpm: 108
          });

          return;
        }

        document.getElementById("one").value = "-2--20--0---2--------0-----------2--20--0--------0------0-------20--0----0--0-----------0-------00--01--12--2-----------------";
        document.getElementById("two").value = "---------3-------0--0---33--25-----------3--34--4---02---3-----------4--4----2--23--30---3---2---------------0--12--23-002----";
        document.getElementById("three").value = "2--2---0-----2--2--0------------2--2---0-----------0---0---2-------2---2---2---2-------1---1-2-----2---2---2---2---2----1-2---";
        document.getElementById("four").value = "--0--------4---4-------2---2---2--0--------4---4---2---2-4--4----------------------4--2---2-2-2-----------0---1---2---2----2--";
        document.getElementById("five").value = "------0---5---5-----------0---0-------0---2---0-------0---5--5----4---3---4---0---2------------0--4---4------------------0--40";
        document.getElementById("six").value = "------------------3---4---------------------------3------------------------------------------------------------------0--------";
        document.getElementById("tempo_input").value = "192";
         this.setState({
          bpm: 192
          });

      }


render() {

    return (

      <div>

      
      <div id="tabs">
             E <input  class="tab_input" id="one"/>
            <br/>
             B  <input class="tab_input" id="two"

             />
             <br/>
             G  <input class="tab_input" id="three"/>
             <br/>
             D  <input class="tab_input" id="four"/> 
             <br/>
             A  <input class="tab_input" id="five"/>
             <br/>
             E  <input class="tab_input" id="six"/>


         </div>

         <br/>

        <span>Sample Tabs:  </span>

      <select id="music_tab_selector">
       <option value="1">-</option>
       <option value="2">Opus 35 No17 In D</option>
 
       </select>


         <span>Tempo (bpm):  </span>
        <input id="tempo_input" defaultValue="108"/>

      <br/>
      <br/>





        <div id="main_buttons">

            <button class = "music_button" onClick={this.handleClick}> Play </button>
            <button class = "music_button" onClick={this.loadTab}> Load tab</button>
            <button class = "music_button" onClick={this.stop}> Stop </button>

             </div>


        </div>


        )

  }

}

export default GuitarTabPanel;
