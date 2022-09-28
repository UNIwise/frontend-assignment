import { FunctionComponent } from "react";

// Components
import Item from "./Item";

/*
 * The ListProps interface defines the types for the components props.
 *
 * If you would like to proceed without defining types do the following:
 * const Input: FunctionComponent<any> = (props) => {
 *                                ^^^
 *
 * and remove the ListProps interface
 */

interface ListProps {
  items: { itemName: string; id: number }[];
  value: string;
}

const List: FunctionComponent<ListProps> = ({ items, value }) => {
  return (
    <div>
      {items
        .filter((val) => {
          return val.itemName
            .replace(" ", "")
            .toLowerCase()
            .includes(value.replace(" ", "").toLowerCase());
        })
        .map((item) => {
          return <Item name={item.itemName} key={item.id} />;
        })}
    </div>
  );
};

export default List;
