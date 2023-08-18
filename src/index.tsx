/*
  You don't need to change anything in here.
*/

import { FunctionComponent } from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import {
  BrowserRouter,
  Routes,
  Route,
  useParams,
  Navigate,
} from "react-router-dom";
import Intro from "./Intro";
import { NavLink } from "react-router-dom";

import Task1 from "./1";
import Task2 from "./2";
import Task3 from "./3";

const Menu: FunctionComponent = () => {
  return (
    <nav className="menu">
      <NavLink to="/">Intro</NavLink>

      <NavLink to="/task/1">Task 1</NavLink>

      <NavLink to="/task/2">Task 2</NavLink>

      <NavLink to="/task/3">Task 3</NavLink>
    </nav>
  );
};

interface ContainerProps {
  children: React.ReactNode;
}

const Container: FunctionComponent<ContainerProps> = (props) => {
  return (
    <>
      <Menu />
      <main>{props.children}</main>
    </>
  );
};

interface TaskContainerProps {
  children: React.ReactNode;
}

const TaskContainer: FunctionComponent<TaskContainerProps> = (props) => {
  return <div className="task-container">{props.children}</div>;
};

const Task: FunctionComponent = () => {
  let { id } = useParams<{ id: string }>();

  switch (id) {
      case "1":
        return (
          <>
            <h1>Task 1 - Use styles</h1>
            <p className="task-description">
              This task is mainly about <b>styling</b> in ReactJS in order to
              create a <b>beautiful UI</b>. Use Sass to style the form with
              interaction feedback such as hover, focus and so on. The goal is to
              make the form as aesthetically pleasing as possible.
            </p>
  
            <TaskContainer>
              <Task1 />
            </TaskContainer>
          </>
        );
      case "2":
      return (
        <>
          <h1>Task 2 - Use component composition</h1>
          <p className="task-description">
            In this task, use your <b>React knowledge</b> to
            make a searchable list.
            <br />
            <br />
            You must <b>encapsulate</b> the <b>UI</b> parts
            into <b>small components</b>. This means the Input and List goes
            into different small components. In order to communicate between the
            input and the list, the parent component must be used by
            passing props and managing state.
          </p>

          <TaskContainer>
            <Task2 />
          </TaskContainer>
        </>
      );
    case "3":
      return (
        <>
          <h1>Task 3 - Create a Todo List and/or Freestyle</h1>
          <p className="task-description">
            This task is mainly about <b>combining different concepts</b> from
            ReactJS in order to create a <b>small and simple application</b>.
            <br />
            <br />
            You can either choose to create a tiny application your self or
            follow the description below to create a todo app:
          </p>
          <ul className="task-description">
            Create todos Mark them as done See a list of done todos and a list
            of pending todos. Search for todos Delete todos
          </ul>
          <p className="task-description">
            Feel free to use Sass to style the applications and to install
            third-party packages if needed.
          </p>
          <p className="task-description">
            This task is also a great oppertunity for you to show your TypeScript knowledge.
          </p>

          <TaskContainer>
            <Task3 />
          </TaskContainer>
        </>
      );
    default:
      return <Navigate to="/" />;
  }
};

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <BrowserRouter>
    <Routes>
      <Route
        path=""
        element={
          <Container>
            <Intro />
          </Container>
        }
      />
      <Route
        path="task/:id"
        element={
          <Container>
            <Task />
          </Container>
        }
      />

      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  </BrowserRouter>
);
