import React, { Component } from 'react';
import "./GuitarTabPanel.css"






class GuitarTabPanel extends Component {

render() {
    
    return (

      <div>

      
      <div id="tabs">
             E <input  class="tab_input"/>
            <br/>
             B  <input class="tab_input"/>
             <br/>
             G  <input class="tab_input"/>
             <br/>
             D  <input class="tab_input"/> 
             <br/>
             A  <input class="tab_input"/>
             <br/>
             E  <input class="tab_input"/>


         </div>

         <br/>

        <span>Sample Tabs:  </span>

      <select id="music_tab_selector">
       <option value="1">Recuerdos</option>
       <option value="2">Asturias</option>
       <option value="3">Romance</option>
       <option value="4">Bourrée 996</option>
       </select>


         <span>Tempo (bpm):  </span>
        <input id="tempo_input"/>

         <span>Guitar Tuning:  </span>

      <select>
       <option value="1">EADGBE</option>
       <option value="2">DADGBE</option>
       <option value="3">DADGAD</option>
       <option value="4">DADFAD</option>
       </select>





        </div>


        )

  }

}

export default GuitarTabPanel;
