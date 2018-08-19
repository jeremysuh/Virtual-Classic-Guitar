import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';





class App extends Component {


  render() {

  	function TabInputField(props){
  		return (

  		<div>
             <input  class="tab_input"/>
           	<br/>
           	 <input class="tab_input"/>
           	 <br/>
           	 <input class="tab_input"/>
           	 <br/>
           	 <input class="tab_input"/>
           	 <br/>
           	 <input class="tab_input"/>
           	 <br/>
           	 <input class="tab_input"/>

         </div>

  			)
  	}

	function GuitarButton(props){
  		return (
  			<div>
  			<button> This is a {props.name} button</button>
  			 <button> This is another {props.name} button</button>
  			 </div>
  			);
	}

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Virtual Classical Guitar</h1>
        </header>
          <br/>
        <TabInputField defaultInput = "Please input tabs here..."> </TabInputField> 
        <GuitarButton name = "Tuner"> </GuitarButton>
      </div>
    );
  }
}

export default App;
