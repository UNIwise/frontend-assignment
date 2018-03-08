import * as React from "react";
import * as ReactDOM from "react-dom";

// Style
import "./index.css";

// Intro
import Intro from "./Intro";

// Tasks
import Task1 from "./1";
import Task2 from "./2";
import Task3 from "./3";
import Task4 from "./4";
import Task5 from "./5";

// TaskWrapper
const TaskWrapper: React.SFC<{
  title?: string;
  describtion?: () => React.ReactNode;
}> = props => {
  return (
    <div>
      {props.describtion ? props.describtion() : "No Description"}
      <div className="task-container">{props.children}</div>
    </div>
  );
};

// Task Selector
class Root extends React.Component {
  static getInitialTask(name: string, url?: string) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
      results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return "";
    return decodeURIComponent(results[2].replace(/\+/g, " "));
  }

  state = {
    selected: parseInt(Root.getInitialTask("task") || "0", 10)
  };

  replaceQuery(param: string, value: string) {
    // Explicitly save/update a url parameter using HTML5's replaceState().
    const baseUrl = [
      location.protocol,
      "//",
      location.host,
      location.pathname
    ].join("");
    const urlQueryString = document.location.search;
    var newParam = param + "=" + value,
      params = "?" + newParam;

    // If the "search" string exists, then build params from it
    if (urlQueryString) {
      const keyRegex = new RegExp("([?&])" + param + "[^&]*");
      // If param exists already, update it
      if (urlQueryString.match(keyRegex) !== null) {
        params = urlQueryString.replace(keyRegex, "$1" + newParam);
      } else {
        // Otherwise, add it to end of query string
        params = urlQueryString + "&" + newParam;
      }
    }
    window.history.replaceState({}, "", baseUrl + params);
  }

  handleTaskSelect = (index: number) => () => {
    this.replaceQuery("task", index.toString());
    this.setState({
      selected: index
    });
  };

  renderTask() {
    switch (this.state.selected) {
      case 1:
        return (
          <TaskWrapper
            describtion={() => (
              <React.Fragment>
                <h1>Task 1 - Create a list</h1>
                <p className="task-description">
                  This first task is purely about using JSX. Make a ordinary
                  unordered list using 'ul' and li'. The list must{" "}
                  <b>not be static</b>. You have to <b>use the array</b> in
                  state and <b>iterate over</b> it.
                </p>
              </React.Fragment>
            )}
          >
            <Task1 />
          </TaskWrapper>
        );
      case 2:
        return (
          <TaskWrapper
            describtion={() => (
              <React.Fragment>
                <h1>Task 2 - Create a controlled input</h1>
                <p className="task-description">
                  This task is purely about using{" "}
                  <b>React's synthetic event</b>
                  system. Use the existing input and paragraph to display the{" "}
                  <b>the input value</b> in the paragraph. The paragaph must be
                  kept in sync.
                </p>
              </React.Fragment>
            )}
          >
            <Task2 />
          </TaskWrapper>
        );
      case 3:
        return (
          <TaskWrapper
            describtion={() => (
              <React.Fragment>
                <h1>Task 3 - Create a searchable list</h1>
                <p className="task-description">
                  Use the <b>knowledge</b> you used in the{" "}
                  <b>previus 2 tasks</b> to make at searchable list. You must
                  have a <b>input</b> and a <b>list</b>. The list should be{" "}
                  <b>filtered</b> using the value in the input as the user
                  types.
                </p>
              </React.Fragment>
            )}
          >
            <Task3 />
          </TaskWrapper>
        );
      case 4:
        return (
          <TaskWrapper
            describtion={() => (
              <React.Fragment>
                <h1>Task 4 - Use component composition</h1>
                <p className="task-description">
                  Use the <b>knowledge</b> you used in the <b>previus tasks</b>{" "}
                  to make a searchable list. The requirement is the same as with
                  Task 3.
                  <br />
                  <br />
                  Except, this time you must <b>encapsulate</b> the <b>UI</b>{" "}
                  parts into <b>small components</b>. This means the Input and
                  List goes into different small components. In order to
                  communicate between Input and list the parrent
                  component(Task4) must be used by passing props and managing
                  state.
                </p>
              </React.Fragment>
            )}
          >
            <Task4 />
          </TaskWrapper>
        );
      case 5:
        return (
          <TaskWrapper
            describtion={() => (
              <React.Fragment>
                <h1>Task 5 - Freestyle</h1>
                <p className="task-description">
                  This task is about showing off your skills regarding React or
                  Javescript/Typescript in generel. You are allowed to download
                  new npm packages and even hack the whole application if you feel
                  comftable doing so.
                  <br />
                  <br />
                  Do whatever you would like to show off.
                </p>
              </React.Fragment>
            )}
          >
            <Task5 />
          </TaskWrapper>
        );
      default:
        return <Intro />;
    }
  }

  render() {
    return (
      <div>
        <nav className="menu">
          <span className="title">Select Task: </span>

          <button
            className={this.state.selected === 0 ? "selected" : ""}
            onClick={this.handleTaskSelect(0)}
          >
            Intro
          </button>
          <button
            className={this.state.selected === 1 ? "selected" : ""}
            onClick={this.handleTaskSelect(1)}
          >
            Task 1
          </button>
          <button
            className={this.state.selected === 2 ? "selected" : ""}
            onClick={this.handleTaskSelect(2)}
          >
            Task 2
          </button>
          <button
            className={this.state.selected === 3 ? "selected" : ""}
            onClick={this.handleTaskSelect(3)}
          >
            Task 3
          </button>
          <button
            className={this.state.selected === 4 ? "selected" : ""}
            onClick={this.handleTaskSelect(4)}
          >
            Task 4
          </button>
          <button
            className={this.state.selected === 5 ? "selected" : ""}
            onClick={this.handleTaskSelect(5)}
          >
            Task 5
          </button>
        </nav>
        <div className="route-container">{this.renderTask()}</div>
      </div>
    );
  }
}

ReactDOM.render(<Root />, document.getElementById("root") as HTMLElement);
