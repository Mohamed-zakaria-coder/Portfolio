import React from "react";
import "../../styles/home/other-projects.css";
import { AiFillGithub } from "react-icons/ai";
import { BiLinkExternal } from "react-icons/bi";
import keyboard from "../../Images/keyboard-7913431_1280.jpg";
const OtherProjects = () => {
  return (
    <div className="other-parent" id="other-projects">
      <h2>Other Projects</h2>
      <div className="other-cards-parent">
        <div className="other-card">
          <div>
            <div className="img-parent">
              <img
                src={keyboard}
                alt="keyboard img"
              />
            </div>
            <div className="card-content">
              <h3>Typing Speed</h3>
              <p>
                A typing game built to help users improve their typing speed and accuracy
              </p>
            </div>
            <div className="icons">
              <a
                href="https://github.com/Mohamed-zakaria-coder/typing-speed"
                target="_blank"
                rel="noreferrer"
              >
                <AiFillGithub className="github" />
              </a>
              <a
                href="https://mohamed-zakaria-coder.github.io/typing-speed/"
                target="_blank"
                rel="noreferrer"
              >
                <BiLinkExternal className="folder-icon" />
              </a>
            </div>
          </div>
        </div>
        <div className="other-card question">
          <div>
            {" "}
            <div className="img-parent">
              <img
                src="https://cdn.pixabay.com/photo/2021/10/11/21/49/question-mark-6701933__340.png"
                alt="mobile-img"
              />
            </div>
            <div className="card-content">
              <h3>Quiz App</h3>
              <p>
                A Quiz Application For Testing Your Knowledge And It Give You
                The Final Score
              </p>
            </div>
            <div className="icons">
              <a
                href="https://github.com/Mohamed-zakaria-coder/quiz-application"
                target="_blank"
                rel="noreferrer"
              >
                <AiFillGithub className="github" />
              </a>
              <a
                href="https://mohamed-zakaria-coder.github.io/quiz-application/"
                target="_blank"
                rel="noreferrer"
              >
                <BiLinkExternal className="folder-icon" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OtherProjects;
