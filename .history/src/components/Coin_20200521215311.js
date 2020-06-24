import React, { Component } from "react";
import "../App.css";

class Coin extends Component {
  toss = {
    koka: "https://i.colnect.net/f/3362/572/20-Euro-Cent-Bratislava-Castle.jpg",
    numra:
      "https://www.fleur-de-coin.com/images/eurocoins/euroimages/Austria20cents.jpg",
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
