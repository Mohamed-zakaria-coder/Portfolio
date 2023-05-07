import React from "react";
import { FiLinkedin } from "react-icons/fi";
import { ImCodepen } from "react-icons/im";
import { AiFillGithub } from "react-icons/ai";

import "../../styles/home/aside.css";

const Aside = () => {
  return (
    <div className="aside-container">
      <div className="left-sec">
        <a
          href="https://github.com/Mohamed-zakaria-coder"
          target="_blank"
          rel="noreferrer"
        >
          <AiFillGithub className="icon" />
        </a>
        <a
          href="https://www.linkedin.com/in/mohamed-zakaria-b75750275/"
          target="_blank"
          rel="noreferrer"
        >
          <FiLinkedin className="icon" />
        </a>
        {/* <ImCodepen className="icon" /> */}
      </div>
      <div className="right-sec">
        <a href="#">www.Mz.com</a>
      </div>
    </div>
  );
};

export default Aside;
