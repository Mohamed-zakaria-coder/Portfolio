import React, { useEffect, useState } from "react";
import { BsListNested } from "react-icons/bs";
import { TbLetterM } from "react-icons/tb";
import { motion } from "framer-motion";
import "../../styles/navbar.css";
const Navbar = () => {
  const [hState, sethState] = useState("top");
  let ol =
    document.querySelector(".navbar-elements ol") &&
    document.querySelector(".navbar-elements ol");
  let lis =
    document.querySelectorAll(".navbar-elements ol li") &&
    document.querySelectorAll(".navbar-elements ol li");
  window.onresize = function () {
    if (ol && window.innerWidth > 738) {
      ol.style.display = "flex";
    } else if (ol && window.innerWidth < 738) {
      ol.style.display = "none";
    }
  };

  function showLinks() {
    if (ol && ol.style.display !== "block" && window.innerWidth < 738) {
      return (ol.style.display = "block");
    } else if (ol && ol.style.display !== "none" && window.innerWidth < 738) {
      return (ol.style.display = "none");
    }
  }
  if (window.innerWidth < 738) {
    lis.forEach((li) => {
      li.addEventListener("click", function () {
        li.classList.add("clicked");
        if (li.classList.contains("clicked")) {
          return (ol.style.display = "none");
        }
        lis.forEach((li) => li.classList.remove("clicked"));
      });
    });
  }
  useEffect(() => {
    sethState("up"); //  => solved null ol problem
    var lastVal = 0;

    window.onscroll = function () {
      let y = window.scrollY;
      if (window.innerWidth < 738) {
      }
      if (y > lastVal) {
        sethState("down");
      }
      if (y < lastVal) {
        sethState("up");
      }
      if (y === 0) {
        sethState("top");
      }
      if (
        ol &&
        window.innerWidth < 738 &&
        ol.parentElement.parentElement.parentElement.classList.contains("down")
      ) {
        ol.style.display = "none";
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
            <a href="#about">
              <li> About</li>
            </a>
            <a href="#work">
              <li>Projects </li>
            </a>
            <a href="#contact">
              <li>Contact</li>
            </a>
            <a href="#other-projects">
              <li>Other Projects</li>
            </a>
          </ol>
          <a
            href="https://docs.google.com/document/d/1Tflv3V45Y2Qh-iBjI84gM-97kG6AkkTX7qaOmE6HlJk/edit?usp=sharing"
            target="_blank"
            rel="noreferrer"
          >
            <button>Resume</button>
          </a>
          <BsListNested className="list-icon" onClick={showLinks} />
        </div>
      </div>
    </motion.div>
  );
};

export default Navbar;
