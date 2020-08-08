import React, { Component } from "react";

class Display extends Component {
  state = {
    display: "",
  };
  handleChange(e) {
    this.props.onDisplayChange(e.target.value);
  }
  render() {
    const display = this.props.display;
    return (
      <div>
        <input
          value={display}
          onChange={(e) => {
            this.handleChange(e);
          }}
          className="display"
        />
      </div>
    );
  }
}
export default Display;
