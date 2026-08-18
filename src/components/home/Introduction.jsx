import React from "react";
import { FiLinkedin, FiArrowUpRight } from "react-icons/fi";
import { AiFillGithub } from "react-icons/ai";
import { motion } from "framer-motion";
import "../../styles/home/introduction.css";

const rise = { hidden: { opacity: 0, y: 22 }, show: { opacity: 1, y: 0 } };

export default function Introduction() {
  return (
    <section className="intro-container" aria-labelledby="intro-title">
      <motion.p className="eyebrow" variants={rise} initial="hidden" animate="show" transition={{ delay: 0.2 }}>Available for thoughtful frontend work</motion.p>
      <motion.div className="headings-parent" initial="hidden" animate="show" variants={rise} transition={{ delay: 0.35 }}>
        <h1 id="intro-title">Mohamed Zakaria<span>.</span></h1>
        <h2>Frontend / MERN Stack Developer</h2>
      </motion.div>
      <motion.p className="intro-p" variants={rise} initial="hidden" animate="show" transition={{ delay: 0.52 }}>I build responsive, performant web applications with React, Next.js, and modern web technologies.</motion.p>
      <motion.div className="intro-actions" initial="hidden" animate="show" variants={rise} transition={{ delay: 0.68 }}>
        <a className="primary-cta" href="#work">Explore my work <FiArrowUpRight /></a>
        <div className="intro-icons-parent" aria-label="Social links">
          <a href="https://www.linkedin.com/in/mohamed-zakaria-b75750275/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><FiLinkedin /></a>
          <a href="https://github.com/Mohamed-zakaria-coder" target="_blank" rel="noreferrer" aria-label="GitHub"><AiFillGithub /></a>
        </div>
      </motion.div>
      <div className="hero-scroll-hint" aria-hidden="true"><span /> Scroll to explore</div>
    </section>
  );
}
