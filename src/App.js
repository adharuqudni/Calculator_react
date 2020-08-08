import React, { Component } from "react";
import Clock from "react-live-clock";
import moment from "moment";
import "./App.css";
import Calc from "./component/Calc";

class App extends Component {
  state = {
    time: moment().format("h"),
    ampm: moment().format("a"),
    day: "pagi",
  };
  handleChangeDay = () => {
    if (
      (this.state.time >= 1 || this.state.time <= 10) &&
      this.state.ampm === "am"
    ) {
      this.setState({ day: "pagi" });
    } else if (
      this.state.time >= 11 ||
      (this.state.time <= 12 && this.state.ampm === "am") ||
      this.state.time >= 0 ||
      (this.state.time <= 2 && this.state.ampm === "pm")
    ) {
      this.setState({ day: "siang" });
    } else if (
      (this.state.time >= 3 || this.state.time <= 5) &&
      this.state.ampm === "pm"
    ) {
      this.setState({ day: "sore" });
    } else {
      this.setState({ day: "malam" });
    }
  };
  render() {
    return (
      <div className={`App ${this.state.day}`}>
        <Calc />
        <Clock
          className="widget"
          format="hh:mm:ss a"
          timezone={"Asia/Jakarta"}
        />
        <p>{this.state.day}</p>
      </div>
    );
  }
}
export default App;
