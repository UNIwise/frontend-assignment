import * as React from "react";

//
interface IProps {}
const Intro: React.SFC<IProps> = props => {
  return (
    <div style={{ textAlign: "left", marginTop: 64 }}>
      <h1>Welcome</h1>
      <p>
        If you are reading this, you are most likely starting an application process at
        Uniwise. In this intro task you will have the opportunity to show your
        skills as well as be challenged on your competencies.
      </p>
      <h2>Intro</h2>
      <p>
        Before you get started with the task you will get just basic
        information.
      </p>
      <h3>Course of action</h3>
      <p>
        The task consists of small simple tasks that increase in complexity and
        difficulty as you solve the sub-tasks. It is allowed to use code third
        party code and npm packages. If you find that a given subdivision is too
        difficult or too easy, feel free to skip to the next subdivision. Please
        enter a comment in the code with relevant comments.
      </p>
      <h3>Technologies</h3>
      <p>
        Here is a comprehensive overview of technologies used sorted by
        relevance. It would be advantageous if you have knowledge of one or more
        of the following:
        <ul>
          <li>ReactJs</li>
          <li>Typescript</li>
          <li>Mobx</li>
        </ul>
      </p>
      <h3>Get started</h3>
      <p>
        To get started with the intro task, clone or download this repository.
        It is a prerequisite that you have NodeJS installed on the machine where
        the code should be run.
        <br />
        <br />
        Once you have NodeJs installed and download this repository you are
        ready to get started. Each subdivision has a corresponding folder
        located in the src folder.
      </p>
    </div>
  );
};

export default Intro;
