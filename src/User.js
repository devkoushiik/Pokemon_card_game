import React, { Component } from "react";

export default class User extends Component {
  state = {
    number: [Math.floor(Math.random() * 3) + 1],
    luck: ["lucky", "unlucky"],
  };

  render() {
    const num = this.state.number[0];
    let msg;

    if (num === 3) {
      msg = (
        <div>
          <h2>You Win !</h2>
          <img width="200" src="https://media.giphy.com/media/R6gvnAxj2ISzJdbA63/giphy.gif" />
        </div>
      );
    } else {
      msg = (
        <div>
          <p>{this.state.luck[1]}</p>
          <h4>You loose ! </h4>
        </div>
      );
    }
    return (
      <div>
        <h1>Your number is : {this.state.number}</h1>
        {msg}
      </div>
    );
  }
}
