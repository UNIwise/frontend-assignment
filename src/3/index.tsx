import { ChangeEvent, FunctionComponent, useState } from "react";

const items = [
  { id: 1, itemName: "Item 1" },
  { id: 2, itemName: "Item 2" },
  { id: 3, itemName: "Item 3" },
  { id: 4, itemName: "Item 4" },
  { id: 5, itemName: "Item 5" },
];

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
