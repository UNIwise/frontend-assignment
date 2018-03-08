import * as React from "react";

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
const Input: React.SFC<IProps> = props => {
  return (
    <div>
      <label>Search Input: </label>
      <input />
    </div>
  );
};

export default Input;
