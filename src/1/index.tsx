import { FunctionComponent, useState } from "react";

const Task1: FunctionComponent = () => {
  const [items, setItems] = useState([
    "Item 1",
    "Item 2",
    "Item 3",
    "Item 4",
    "Item 5",
  ]);

  return <div>#List goes here#</div>;
};

export default Task1;
