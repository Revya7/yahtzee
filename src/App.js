import React, { Component } from "react";
import Game from "./Game";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className='App'>
        <span class="by-span">
          By <a target="_blank" href="https://www.linkedin.com/in/mahdi-elfakih-aa9503198/">Mahdi AlFakih</a>
          <span class="text-white"> | </span>
          <a target="_blank" href="https://github.com/Revya7/yahtzee">Github</a>
        </span>
        <Game />
      </div>
    );
  }
}

export default App;
