import * as React from "react";

//
interface IProps {}
const Intro: React.SFC<IProps> = props => {
  return (
    <div style={{ textAlign: "left", marginTop: 64 }}>
      <h1>Welcome</h1>
      <p>
        If you are reading this, you are most likely starting an application
        process at Uniwise. In this assignment you will have the opportunity to
        show your skills as well as challenge your competencies.
      </p>
      <h2>Intro</h2>
      <p>
        Before you get started with the task you will get just basic
        information.
      </p>
      <h3>Course of action</h3>
      <p>
        The task consists of small simple tasks that increase in complexity and
        difficulty as you solve them. It is allowed to use code third party code
        and npm packages. If you find that a given task is too difficult or too
        easy, feel free to skip to the next task. Feel free to leave comments
        with relevant info.
      </p>
      <h3>Technologies</h3>
      <p>
        Here is a comprehensive overview of technologies used sorted by
        relevance. It would be advantageous if you have knowledge of one or more
        of the following:
        <ul>
          <li>ReactJs</li>
          <li>Typescript</li>
        </ul>
      </p>
      <h3>Get started</h3>
      <p>
        When you are ready to solve that tasks you can select a task in the top
        of the screen. The associated code wil be found in the corresponding
        folder inside the src folder.
      </p>
    </div>
  );
};

export default Intro;
