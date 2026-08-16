import React from "react";
import { FiLinkedin } from "react-icons/fi";
import { AiFillGithub } from "react-icons/ai";
import "../../styles/home/aside.css";

const Aside = () => <aside className="aside-container" aria-label="Social links"><div className="left-sec"><a href="https://github.com/Mohamed-zakaria-coder" target="_blank" rel="noreferrer" aria-label="GitHub"><AiFillGithub aria-hidden="true" /></a><a href="https://www.linkedin.com/in/mohamed-zakaria-b75750275/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><FiLinkedin aria-hidden="true" /></a></div><div className="right-sec"><a href="#contact">Mz.dev</a></div></aside>;
export default Aside;
