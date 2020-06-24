import React, { Component } from "react";
import Coin from "./Coin.js";
import "../App.css";

class Board extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      lastRoll: 'koka',
      koka: 0,
      numra: 0,
      value: 0,
    };
  }
  handleClick() {
    let newRoll = Math.floor(Math.random() * 2) ? 'koka' : 'numra';
      this.setState({
        koka: this.state.koka + 1,
        toss: this.props.coin[1],
      });
    } else {
      this.setState({
        numra: this.state.numra + 1,
        toss: this.props.coin[0],
      });
    }
    this.setState({ value: this.state.value + 1 });
  }

  render() {
    const { toss, value, koka, numra } = this.state;
    return (
      <div className="center">
        <Coin toss={toss} />
        <br />
        <button
          type="button"
          className="butoni"
          onClick={() => {
            this.handleClick();
          }}
        >
          Kliko per te hedhur
        </button>
        <br />
        Prej {value} hedhjeve, {koka} jane koka dhe {numra} jane
        numra
      </div>
    );
  }
}
export default Board;
