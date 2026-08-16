import React from "react";
import "../../styles/home/about.css";

const skills = ["HTML", "CSS", "JavaScript (ES6+)", "React", "Next.js", "TypeScript", "Tailwind CSS", "Bootstrap", "Git", "GitHub"];

const About = () => (
  <section className="about-container section-shell" id="about" aria-labelledby="about-title">
    <div className="section-heading"><span className="section-index">01</span><h2 id="about-title">About me</h2><span className="heading-line" /></div>
    <div className="about-grid">
      <div className="about-copy">
        <p className="section-lead">I&apos;m a web developer focused on creating digital experiences that feel clear, useful, and easy to use.</p>
        <p>Hello, I&apos;m Mohamed Zakaria. I have experience building websites and web applications, and I&apos;m passionate about responsive interfaces that deliver a great user experience. I&apos;m always expanding my skill set and learning new technologies.</p>
      </div>
      <div className="skills-panel"><p className="panel-label">My toolkit</p><ul>{skills.map((skill) => <li key={skill}>{skill}</li>)}</ul></div>
    </div>
  </section>
);

export default About;
