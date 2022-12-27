import React from "react";
import { BsInstagram } from "react-icons/bs";
import { FiLinkedin } from "react-icons/fi";
import { ImCodepen } from "react-icons/im";
import { CgTwitter } from "react-icons/cg";
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
      </p>
      <div className="intro-icons-parent">
        <BsInstagram className="intro-icon" />
        <FiLinkedin className="intro-icon" />
        <ImCodepen className="intro-icon" />
        <CgTwitter className="intro-icon" />
      </div>
    </div>
  );
};

export default Introduction;
