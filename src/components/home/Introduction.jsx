import React from "react";
import { FiLinkedin } from "react-icons/fi";
import { ImCodepen } from "react-icons/im";
import { AiFillGithub } from "react-icons/ai";
import "../../styles/home/introduction.css";
const Introduction = () => {
  return (
    <div className="intro-container">
      <div className="headings-parent">
        <h1 className="intro-heading">Mohamed Zakaria.</h1>
        <h3 className="intro-description">Frontend / MERN Stack Developer</h3>
      </div>
      <p className="intro-p">
        I build responsive, performant web applications with React, Next.js, and modern web technologies.
      </p>
      <div className="intro-icons-parent">
        <a
          href="https://www.linkedin.com/in/mohamed-zakaria-b75750275/"
          target="_blank"
          rel="noreferrer"
        >
          <FiLinkedin className="intro-icon" />
        </a>
        <a
          href="https://github.com/Mohamed-zakaria-coder"
          target="_blank"
          rel="noreferrer"
        >
          <AiFillGithub className="intro-icon" />
        </a>
      </div>
    </div>
  );
};

export default Introduction;
