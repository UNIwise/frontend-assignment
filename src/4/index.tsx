// Style
import { FunctionComponent, useState } from "react";
import classes from "./index.module.scss";

const Task5: FunctionComponent = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = () => {
    // If you want to do something with form submit

    alert(`Email: ${email} \nPassword: ${password}`);
  };
  const isDisabled = !email || !password ? true : false;
  return (
    <div id={classes.task5}>
      <div className={classes.greenBar}></div>
      <div className={classes.formWrapper}>
        <form onSubmit={onSubmit} className={classes.form}>
          <label>Email</label>
          <input
            className={classes.formInput}
            name="email"
            onChange={(event) => setEmail(event.currentTarget.value)}
            value={email}
          />
          <label>Password</label>
          <input
            className={classes.formInput}
            name="password"
            onChange={(event) => setPassword(event.currentTarget.value)}
            value={password}
          />
          <button disabled={isDisabled} className={classes.formButton}>
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Task5;
