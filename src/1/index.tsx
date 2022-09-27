import { FunctionComponent, useState } from "react";

export const items = [
  { id: 1, itemName: "Item 1" },
  { id: 2, itemName: "Item 2" },
  { id: 3, itemName: "Item 3" },
  { id: 4, itemName: "Item 4" },
  { id: 5, itemName: "Item 5" },
];
const Task1: FunctionComponent = () => {
  return (
    <div>
      #List goes here#
      <div>
        <ul>
          {items.map((item) => (
            <li key={item.id}>{item.itemName}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Task1;
