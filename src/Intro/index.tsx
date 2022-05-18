/*
  You don't need to change anything in here.
*/

import { FunctionComponent } from "react";

const Intro: FunctionComponent = () => {
  return (
    <div style={{ textAlign: "left"}}>
      <h1>Welcome</h1>
      <p>
        If you are reading this, you are most likely starting an application
        process at Uniwise. In this assignment you will have the opportunity to
        show your skills as well as challenge your competencies.
      </p>
      <h2>Intro</h2>
      <p>
        Before you get started with the task read the following information.
      </p>
      <h3>Course of action</h3>
      <p>
        The task consists of small simple tasks that increase in complexity and
        difficulty as you solve them. It is allowed to use code from third party
        libraries and npm packages. If you find that a given task is too
        difficult or too easy, feel free to skip to the next task. Also feel
        free to leave comments with relevant info and to elaborate as much as
        you like on a given task. The goal is for you to both show your current
        skills and to show your capabilities in solving problems that are new to
        you.
      </p>
      <h3>Technologies</h3>
      <p>
        This test is based on ReactJS with Typescript. It would be advantageous
        if you have or gain knowledge of those before the test. Also SCSS is
        used for styling.
      </p>
      <ul>
        <li>
          <a href="https://reactjs.org/">ReactJs</a> - The framework
        </li>
        <li>
          <a href="https://www.typescriptlang.org/">Typescript</a> - Typed
          javascript
        </li>
        <li>
          <a href="https://sass-lang.com/">
            SCSS - CSS with superpowers
          </a>
        </li>
      </ul>
      <h3>Get started</h3>
      <p>
        When you are ready to start you can select a task in the top of the
        screen. The associated code wil be found in the corresponding folder
        inside the src folder.
      </p>
    </div>
  );
};

export default Intro;
