import React, { Component } from "react";
import Coin from "./Coin.js";
import "../App.css";

class Board extends Component {
  static defaultProps = {
    coin: [
      "https://i.colnect.net/f/3362/572/20-Euro-Cent-Bratislava-Castle.jpg",
      "https://www.fleur-de-coin.com/images/eurocoins/euroimages/Austria20cents.jpg",
    ],
  };
  constructor(props) {
    super(props);
    this.state = {
      toss: this.props.coin[0],
      value: 0,
      //count: 0,
    };
    this.handleClick = this.handleClick.bind(this);
    this.buttonClicked = this.buttonClicked.bind(this);
    //this.sideCounter = this.sideCounter(this);
  }
  handleClick() {
    let random = Math.floor(Math.random() * 2);
    let newRoll = random ? true : false;
    if (newRoll) {
      this.setState({
        toss: this.props.coin[1],
      });
      console.log("Koka");
    } else {
      this.setState({
        toss: this.props.coin[0],
      });
      console.log("Numri");
    }
  }

  // sideCounter() {
  //   this.setState({ count: });
  // }

  buttonClicked() {
    this.setState({ value: this.state.value + 1 });
    console.log("counter");
  }

  render() {
    return (
      <div className="center">
        <Coin toss={this.state.toss} />
        <br />
        <button
          type="button"
          className="butoni"
          onClick={() => {
            this.handleClick();
            this.buttonClicked();
            //this.sideCounter();
          }}
        >
          Click to toss
        </button>
        Out of {this.state.value} flips,
      </div>
    );
  }
}
export default Board;
