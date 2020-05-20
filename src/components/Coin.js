import React, { Component } from "react";
import "../App.css";

class Coin extends Component {
  render() {
    return (
      <div className="media">
        <img className="Coin" src={this.props.toss} alt="coin" />
      </div>
    );
  }
}
export default Coin;
