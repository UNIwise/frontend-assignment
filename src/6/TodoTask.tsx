import React from "react";
import "./index.scss";
import { ITask } from ".";

interface Props {
  task: ITask;
  deleteTask: (task: ITask) => void;
}

const TodoTask = ({ task, deleteTask }: Props) => {
  return (
    <div className="todo-item">
      <div className="todo-name">{task.name}</div>
      <button className="todo-delete" onClick={() => deleteTask(task)}>
        Delete
      </button>
    </div>
  );
};

export default TodoTask;
