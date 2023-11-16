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
        <h3 className="intro-description">I build things for the web.</h3>
      </div>
      <p className="intro-p">
        A Front-End Developer, I Enjoy Developing New Things For The Web.
        {/* Welcome to my portfolio! As a web developer, I understand the importance of having a strong online presence. This portfolio showcases some of my best work and highlights my skills and experience in web development. */}
      </p>
      <div className="intro-icons-parent">
      <a
          href="https://www.linkedin.com/in/mohamed-zakaria-b75750275/"
          target="_blank"
          rel="noreferrer"
        >
        <FiLinkedin className="intro-icon" />
        </a>
        {/* <ImCodepen className="intro-icon" /> */}
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
