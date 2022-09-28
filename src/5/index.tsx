import { ChangeEvent, FunctionComponent, useState } from "react";

// Components
import Input from "./components/Input";
import List from "./components/List";

const items = [
  { id: 1, itemName: "Item 1" },
  { id: 2, itemName: "Item 2" },
  { id: 3, itemName: "Item 3" },
  { id: 4, itemName: "Item 4" },
  { id: 5, itemName: "Item 5" },
];

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
