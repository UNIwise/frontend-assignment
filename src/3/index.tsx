import { ChangeEvent, FunctionComponent, useState } from "react";
import { items } from "../1";

const Task3: FunctionComponent = () => {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const selectedItems = items
    .filter((val) => {
      return val.itemName
        .replace(" ", "")
        .toLowerCase()
        .includes(inputValue.replace(" ", "").toLowerCase());
    })
    .map((item) => {
      return <div key={item.id}>{item.itemName}</div>;
    });

  return (
    <>
      <label>Search Input: </label>
      <input value={inputValue} onChange={handleChange} />
      <br />
      <br />
      <div>{selectedItems}</div>
    </>
  );
};

export default Task3;
