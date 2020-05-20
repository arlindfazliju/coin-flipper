import React, { Component } from "react";
import Board from "./components/Board";

export class App extends Component {
  render() {
    return (
      <div>
        <div className="App">Let's flip a coin</div>
        <Board />
      </div>
    );
  }
}

export default App;
