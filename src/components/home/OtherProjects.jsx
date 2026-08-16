import React from "react";
import { AiFillGithub } from "react-icons/ai";
import { BiLinkExternal } from "react-icons/bi";
import keyboard from "../../Images/keyboard-7913431_1280.jpg";
import "../../styles/home/other-projects.css";

const projects = [
  { title: "Typing Speed", image: keyboard, alt: "Keyboard for typing speed project", description: "A typing game designed to help users improve their typing speed and accuracy.", github: "https://github.com/Mohamed-zakaria-coder/typing-speed", live: "https://mohamed-zakaria-coder.github.io/typing-speed/" },
  { title: "Quiz App", image: "https://cdn.pixabay.com/photo/2021/10/11/21/49/question-mark-6701933__340.png", alt: "Question mark illustration", description: "A quiz application that lets users test their knowledge and receive a final score.", github: "https://github.com/Mohamed-zakaria-coder/quiz-application", live: "https://mohamed-zakaria-coder.github.io/quiz-application/" },
];

const OtherProjects = () => <section className="other-parent section-shell" id="other-projects" aria-labelledby="other-title"><div className="section-heading"><span className="section-index">03</span><h2 id="other-title">Other projects</h2><span className="heading-line" /></div><div className="other-cards-parent">{projects.map((project) => <article className="other-card" key={project.title}><img src={project.image} alt={project.alt} /><div className="card-content"><p className="panel-label">Side project</p><h3>{project.title}</h3><p>{project.description}</p><div className="icons"><a href={project.github} target="_blank" rel="noreferrer" aria-label={`View ${project.title} source code`}><AiFillGithub aria-hidden="true" /></a><a href={project.live} target="_blank" rel="noreferrer" aria-label={`Open ${project.title} live demo`}><BiLinkExternal aria-hidden="true" /></a></div></div></article>)}</div></section>;
export default OtherProjects;
