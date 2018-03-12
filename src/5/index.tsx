import * as React from "react";
// Style
/*
* Styles goes inside this Less file
*/
import "./index.less";

//
class Task5 extends React.Component {
  state = {
    email: "",
    password: ""
  };

  handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      [e.currentTarget.name]: e.currentTarget.value
    });
  };

  render() {
    return (
      <form>
        <label>Email</label>
        <input
          name="email"
          onChange={this.handleInputChange}
          value={this.state.email}
        />
        <label>Password</label>
        <input
          name="password"
          onChange={this.handleInputChange}
          value={this.state.password}
        />
        <button>Login</button>
      </form>
    );
  }
}

export default Task5;
