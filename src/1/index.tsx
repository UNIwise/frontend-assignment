// Style
import { FunctionComponent, useState } from "react";
import "./index.scss";

const Task1: FunctionComponent = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = () => {
    // If you want to do something with form submit

    alert(`Email: ${email} \nPassword: ${password}`);
  };

  return (
    <div id="task-1">
      <form onSubmit={onSubmit}>
        <label>Email</label>
        <input
          name="email"
          onChange={(event) => setEmail(event.currentTarget.value)}
          value={email}
        />
        <label>Password</label>
        <input
          name="password"
          onChange={(event) => setPassword(event.currentTarget.value)}
          value={password}
        />
        <button>Login</button>
      </form>
    </div>
  );
};

export default Task1;
