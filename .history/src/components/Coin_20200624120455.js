import React, { Component } from "react";
import "../App.css";

class Coin extends Component {
  toss = {
    koka:
      "https://www.muenzenwert.de/Images/Coins/euro/26/1650/20_cent_2008_P_big.jpg",
    numra:
      "https://previews.123rf.com/images/volff/volff1601/volff160100135/51176399-old-20-cents-coin-isolated-on-a-white-background-.jpg",
  };
  render() {
    return (
      <div className="media">
        <img className="Coin" src={this.toss[this.props.toss]} alt="coin" />
      </div>
    );
  }
}
export default Coin;
