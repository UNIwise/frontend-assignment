import * as React from "react";

// Components
import Item from "./Item";

/*
     * The IProps interface defines the props in order to typescript to typecheck for errors.
     * 
     * If you would like to proceed without defining types do the following: 
     * const Input: React.SFC<any> = (props) => {
     *                        ^^^
     * 
     * and remove the IProps interface
*/

//
interface IProps {}
const List: React.SFC<IProps> = props => {
  return <div>#List goes here#</div>;
};

export default List;
