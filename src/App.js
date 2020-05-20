import React, { Component } from "react";
import Board from "./components/Board";

export class App extends Component {
  render() {
    return (
      <div>
        <div className="App">Rrotulloje monedhen!</div>
        <Board />
      </div>
    );
  }
}

export default App;
