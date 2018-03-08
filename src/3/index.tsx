import * as React from "react";

//
class Task3 extends React.Component {
  state = {
    inputValue: "",
    data: [""]
  };
  render() {
    return (
      <div>
        <label>Search Input: </label>
        <input />
        <br />
        <br />
        #List goes here#
      </div>
    );
  }
}

export default Task3;
