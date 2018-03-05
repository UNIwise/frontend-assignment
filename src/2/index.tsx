import * as React from "react";

//
class Task2 extends React.Component {
  state = {
    value: ''
  };
  render() {
    return (
      <div>
        <label>Controlled Input: </label>
        <input />
        <br />
        <br />
        <p>#Show Input value here#</p>
      </div>
    );
  }
}

export default Task2;
