import { ChangeEvent, FunctionComponent, useState } from "react";
import { items } from "../1";

// Components
import Input from "./components/Input";
import List from "./components/List";

const Task4: FunctionComponent = () => {
  const [inputValue, setInputValue] = useState<string>("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <div>
      <label>Search Input: </label>
      <Input value={inputValue} handleChange={handleChange} />
      <br />
      <List items={items} value={inputValue} />
    </div>
  );
};

export default Task4;
