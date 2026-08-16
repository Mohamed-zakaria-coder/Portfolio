import React from "react";
import { FiArrowUpRight, FiGithub, FiLinkedin } from "react-icons/fi";
import "../../styles/home/introduction.css";

const Introduction = () => (
  <section className="intro-container" aria-labelledby="intro-title">
    <div className="hero-eyebrow"><span className="eyebrow-dot" /> Available for frontend opportunities</div>
    <div className="headings-parent">
      <p className="intro-kicker">Hello, I&apos;m</p>
      <h1 id="intro-title" className="intro-heading">Mohamed Zakaria<span>.</span></h1>
      <h2 className="intro-description">Frontend / MERN Stack Developer</h2>
    </div>
    <p className="intro-p">I build responsive, performant web applications with React, Next.js, and modern web technologies.</p>
    <div className="hero-actions">
      <a className="button button-primary" href="#work">Explore my work <FiArrowUpRight aria-hidden="true" /></a>
      <a className="button button-quiet" href="#contact">Let&apos;s talk</a>
    </div>
    <div className="intro-icons-parent" aria-label="Social links">
      <a href="https://www.linkedin.com/in/mohamed-zakaria-b75750275/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><FiLinkedin aria-hidden="true" /></a>
      <a href="https://github.com/Mohamed-zakaria-coder" target="_blank" rel="noreferrer" aria-label="GitHub"><FiGithub aria-hidden="true" /></a>
    </div>
    <div className="hero-note"><span>01</span><span>Scroll to see selected work</span></div>
  </section>
);

export default Introduction;
