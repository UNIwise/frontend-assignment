import { FunctionComponent, useState } from "react";

const Task3: FunctionComponent = () => {
  const [inputValue, setInputValue] = useState("");
  const [items, setItems] = useState([]);

  return (
    <div>
      <label>Search Input: </label>
      <input />
      <br />
      <br />
      #List goes here#
    </div>
  );
};

export default Task3;