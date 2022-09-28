import * as React from "react";
import TodoTask from "./TodoTask";
import { ChangeEvent, useState } from "react";

// Style
import "./index.scss";

// Components
/*
 * Create the components you need in the components folder.
 * You may find inspiration in task 4
 */

export interface ITask {
  name: string;
  id: number;
}

const Task6: React.FunctionComponent = () => {
  const [task, setTask] = useState<string>("");
  const [taskId, setTaskId] = useState<number>(0);
  const [todoList, setTodoList] = useState<ITask[]>([]);
  const [flag, setFlag] = useState<boolean>(true);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTask(e.target.value);
  };

  const addTask = () => {
    if (task !== "") {
      setTaskId(taskId + 1);
      const newTask = { name: task, id: taskId };
      setTodoList([...todoList, newTask]);
      setTask("");
      setFlag(false);
    }
  };

  const deleteTask = (task: ITask) => {
    const newList = todoList.filter((t) => t.id !== task.id);
    setTodoList(newList);
  };

  const searchResult = todoList
    .filter((val) => {
      return val.name.toLowerCase().includes(task.toLowerCase());
    })
    .map((todo: ITask, key: number) => {
      return <TodoTask key={key} task={todo} deleteTask={deleteTask} />;
    });

  return (
    <>
      <div id="task-6">
        <div className="green-bar"></div>
        <div className="todo-wrapper">
          <div className="todo-header">
            <input
              type="text"
              placeholder={flag ? "Add Task" : "Search or Add a Task"}
              value={task}
              className="todo-input"
              onChange={handleChange}
            />
            <button className="todo-button" onClick={addTask}>
              Add
            </button>
          </div>
          <div className="todo-list">
            {searchResult.length === 0 ? (
              flag ? (
                <p>Nothing in todo list, try adding items to the list</p>
              ) : (
                <p>No result found, try adding item to the list</p>
              )
            ) : (
              searchResult
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Task6;
