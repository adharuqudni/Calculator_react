import React, { Component } from "react";
import Display from "./Display";
let answer = 0;
let operan;

function add(x, y) {
  return x + y;
}
function min(x, y) {
  return x - y;
}
function mult(x, y) {
  return x * y;
}
function divide(x, y) {
  return x / y;
}
class Ops extends Component {
  state = {
    display: "0",
  };
  handleDisplayChange = (display) => {
    this.setState({ display });
  };

  handleClearClick = () => {
    this.setState({ display: "0" });
    this.setState({ answer: 0 });
    answer = 0;
  };
  handleAddClick = () => {
    if (answer === 0) {
      answer = parseFloat(this.state.display);
    }
    this.setState({ display: "" });
    operan = 1;
  };
  handleMinClick = () => {
    if (answer === 0) {
      answer = parseFloat(this.state.display);
    }
    this.setState({ display: "" });
    operan = 2;
  };
  handleMultClick = () => {
    if (answer === 0) {
      answer = parseFloat(this.state.display);
    }
    this.setState({ display: "" });
    operan = 3;
  };
  handleDivClick = () => {
    if (answer === 0) {
      answer = parseFloat(this.state.display);
    }
    this.setState({ display: "" });
    operan = 4;
  };

  handleAnswerClick = () => {
    let kedua = parseFloat(this.state.display);
    if (operan === 1) {
      answer = add(answer, kedua);
    } else if (operan === 2) {
      answer = min(answer, kedua);
    } else if (operan === 3) {
      answer = mult(answer, kedua);
    } else if (operan === 4) {
      answer = divide(answer, kedua);
    }
    this.setState({ display: answer });
  };
  render() {
    const display = this.state.display;
    return (
      <div className="Ops">
        <Display onDisplayChange={this.handleDisplayChange} display={display} />
        <button className="Btn" onClick={this.handleClearClick}>
          Clear
        </button>
        <button className="Btn answer" onClick={this.handleAnswerClick}>
          =
        </button>
        <button className="Btn " onClick={this.handleAddClick}>
          +
        </button>
        <button className="Btn " onClick={this.handleMinClick}>
          -
        </button>
        <button className="Btn " onClick={this.handleMultClick}>
          *
        </button>
        <button className="Btn " onClick={this.handleDivClick}>
          /
        </button>
      </div>
    );
  }
}
export default Ops;
