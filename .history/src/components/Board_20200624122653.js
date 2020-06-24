import React, { Component } from "react";
import Coin from "./Coin.js";
import "../App.css";

class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lastRoll: "koka",
      koka: 0,
      numra: 0,
      value: 0,
    };
  }
  handleClick() {
    let newRoll = Math.floor(Math.random() * 2) ? "koka" : "numra";
    this.setState({
      [newRoll]: this.state[newRoll] + 1,
      value: this.state.value + 1,
      lastRoll: newRoll,
    });
  }
  render() {
    return (
      <div className="center">
        <Coin toss={this.state.lastRoll} />
        <button
          type="button"
          className="butoni"
          onClick={() => this.handleClick()}
        >
          Kliko per te hedhur
        </button>
        Prej {this.state.value} gjuajtjeve, {this.state.koka} jane koka dhe{" "}
        {this.state.numra} jane numra
      </div>
    );
  }
}
export default Board;
