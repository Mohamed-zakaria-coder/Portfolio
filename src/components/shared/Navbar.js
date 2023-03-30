import React, { useEffect, useState } from "react";
import { BsListNested } from "react-icons/bs";
import { TbLetterM } from "react-icons/tb";
import { motion } from "framer-motion";
import "../../styles/navbar.css";
const Navbar = () => {
  const [hState, sethState] = useState("top");

  useEffect(() => {
    var lastVal = 0;
    window.onscroll = function () {
      let y = window.scrollY;
      if (y > lastVal) {
        sethState("down");
      }
      if (y < lastVal) {
        sethState("up");
      }
      if (y === 0) {
        sethState("top");
      }
      lastVal = y;
    };
  }, []);
  //

  return (
    <motion.div
      className={hState === "top" ? "top" : hState === "up" ? "up" : "down"}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="navbar-content">
        <div className="img-logo-parent">
          <a href="http://localhost:3000/">
            <TbLetterM className="m-icon" />
          </a>
        </div>
        <div className="navbar-elements">
          <ol>
            <li>
              {" "}
              <a href="#about">About </a>
            </li>

            <li>Experience</li>
            <a href="#work">
              <li>Work</li>
            </a>
            <li>Contact</li>
            <a
              href="https://docs.google.com/document/d/1Tflv3V45Y2Qh-iBjI84gM-97kG6AkkTX7qaOmE6HlJk/edit?usp=sharing"
              target="_blank" rel="noreferrer"
            >
              <button>Resume</button>
            </a>
          </ol>
        </div>
        <BsListNested className="list-icon" />
      </div>
    </motion.div>
  );
};

export default Navbar;
