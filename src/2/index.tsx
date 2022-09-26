import { ChangeEvent, FunctionComponent, useState } from "react";

const Task2: FunctionComponent = () => {
  const [value, setValue] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <div>
      <label>Controlled Input: </label>
      <input onChange={handleChange} value={value} />
      <br />
      <br />
      <p>{value}</p>
    </div>
  );
};

export default Task2;
