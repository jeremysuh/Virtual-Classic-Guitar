import React, { Component } from 'react';
import "./GuitarTabPanel.css"






class GuitarTabPanel extends Component {

render() {
    
    return (

      <div>



      <h3 id="music_tab_heading"> Music Tabs: </h3>
      <h3 class="spacing"> nil </h3>
      <h3 id="guitar_tuning_heading"> Guitar Tuning: </h3>


     
       <div id="music_tab_selector">

      <select class="select-style">
       <option value="1">Volvo Etude 5</option>
       <option value="2">Volvo Fer Sor</option>
       <option value="3">Volvo</option>
       <option value="4">Volvo</option>

       </select>

      </div>

      <h3 class="spacing"> nil </h3>


       <div id="guitar_tuning_selector" class="select-style">

      <select>
       <option value="1">EADGBE</option>
       <option value="2">DADGBE</option>
       <option value="3">DADGAD</option>
       <option value="4">DADFAD</option>


       </select>

      </div>

            <h6 class="spacing"> nil </h6>
    
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

        </div>


        )

  }

}

export default GuitarTabPanel;
