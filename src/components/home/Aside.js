import React from "react";
import { BsInstagram } from "react-icons/bs";
import { FiLinkedin } from "react-icons/fi";
import { ImCodepen } from "react-icons/im";
import { CgTwitter } from "react-icons/cg";
import "../../styles/home/aside.css";

const Aside = () => {
  return (
    <div className="aside-container">
      <div className="left-sec">
        <BsInstagram className="icon" />
        <FiLinkedin className="icon" />
        <ImCodepen className="icon" />
        <CgTwitter className="icon" />
      </div>
      <div className="right-sec">
        <a href="#">www.Mz.com</a>
      </div>
    </div>
  );
};

export default Aside;
