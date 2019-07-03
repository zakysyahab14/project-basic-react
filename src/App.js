import React from 'react';
import logo from './spiral.png';
import './App.css';
import mus from './melody.mp3';
import DisplayInformation from "./components/promps-state";

alert ("PLEASE READ THE COMMENT AT TOP THE PICTURE FIRST BEFORE YOU SCROLL DOWN")
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      information: "focus to the middle of this git until 20 sec",
      command: "and imagine you are in the beauty another world"
    }
  }


render() {
  return (
    <div className="App">
          <audio src={mus} autoPlay />

      <header className="App-header">
        <DisplayInformation/>
      <p></p>
      <p> {this.state.information}</p>
      <p></p>
      <p></p>
      <DisplayInformation command = {this.state.command}/>
      <p></p>
      <p>are you ready to start this ?</p>
      <p></p>
      <p></p>
      <p>KEEP SCROLLING UNTIL THE IMAGE FILLS YOU SCREEN</p>
      <p></p><p></p><p></p><p></p><p></p>
        <img src={logo} className="App-logo" alt="logo" />
        <p></p>
        <p>its just a firts imppresion for you</p>
        <p></p>
        <p>want to know more about Hypnotyze??</p>
        <p>click link below</p>
        <a
          className="App-link"
          href="https://www.hypnosisdownloads.com/learn-hypnosis"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Hypnotyze
        </a>
      </header>
    </div>
  );
}}

export default App;
