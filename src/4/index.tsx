// Style
import { FunctionComponent, useState } from "react";
import "./index.scss";

const Task5: FunctionComponent = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = () => {
    // If you want to do something with form submit

    alert(`Email: ${email} \nPassword: ${password}`);
  };

  return (
    <div id="task-5">
      <div className="green-bar"></div>
      <div className="form-wrapper">
        <form onSubmit={onSubmit} className="form-form">
          <label>Email</label>
          <input
            className="form-input"
            name="email"
            onChange={(event) => setEmail(event.currentTarget.value)}
            value={email}
          />
          <label>Password</label>
          <input
            className="form-input"
            name="password"
            onChange={(event) => setPassword(event.currentTarget.value)}
            value={password}
          />
          <button className="form-button">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Task5;
