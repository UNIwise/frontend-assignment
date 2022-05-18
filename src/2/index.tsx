import { FunctionComponent, useState } from "react";

const Task2: FunctionComponent = () => {
  const [value, setValue] = useState("");

  return (
    <div>
      <label>Controlled Input: </label>
      <input />
      <br />
      <br />
      <p>#Show Input value here#</p>
    </div>
  );
};

export default Task2;
