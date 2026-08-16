import React from "react";
import { BiLinkExternal } from "react-icons/bi";
import { AiFillGithub } from "react-icons/ai";
import { FaStar } from "react-icons/fa";
import { SiReact, SiNextdotjs, SiVite } from "react-icons/si";
import adsMaster from "../../Images/ads-master.png";
import coffeeImage from "../../Images/main-image.png";
import cashierImage from "../../Images/cashier.png";
import "../../styles/home/work.css";

const projects = [
  { title: "Ads Master", image: adsMaster, alt: "Ads Master landing page", description: "Responsive React landing page built with JSX and Tailwind CSS, featuring smooth animations and EmailJS/Firebase contact integration.", tech: ["React", "Tailwind", "GIT"], live: "https://landing-beta-dusky.vercel.app/", icon: SiReact, premium: true },
  { title: "Coffee Landing", image: coffeeImage, alt: "Coffee Landing website", description: "A clean, responsive, and modern landing page template built with Next.js, TypeScript, and Tailwind CSS for coffee shops and cafés.", tech: ["Next", "Tailwind", "Ts"], live: "https://coffee-landing-zeta.vercel.app/", icon: SiNextdotjs, premium: true },
  { title: "Cashier POS", image: cashierImage, alt: "Cashier point of sale dashboard", description: "A responsive point-of-sale application for managing products, orders, sales, and business statistics through an interactive dashboard.", tech: ["React", "Vite", "CSS"], live: "https://mohamed-zakaria-coder.github.io/cashier-vite/", github: "https://github.com/Mohamed-zakaria-coder/cashier-vite", icon: SiVite },
];

const Work = () => (
  <section className="work-parent section-shell" id="work" aria-labelledby="work-title">
    <div className="section-heading"><span className="section-index">02</span><h2 id="work-title">Selected projects</h2><span className="heading-line" /></div>
    <p className="section-intro">A selection of interfaces and applications I&apos;ve designed and built.</p>
    <div className="cards-parent">{projects.map((project) => { const Icon = project.icon; return <article className="card" key={project.title}>
      <div className="img-parent"><img src={project.image} alt={project.alt} /></div>
      <div className="card-body"><div className="project-meta"><span>Featured build</span>{project.premium && <FaStar aria-label="Featured" />}</div><h3 className="content-heading">{project.title}</h3><p className="content-p">{project.description}</p><div className="project-footer"><ul className="techs">{project.tech.map((tech) => <li key={tech}>{tech}</li>)}</ul><div className="icons">{project.github && <a href={project.github} target="_blank" rel="noreferrer" aria-label={`View ${project.title} source code`}><AiFillGithub aria-hidden="true" /></a>}<a href={project.live} target="_blank" rel="noreferrer" aria-label={`Open ${project.title} live demo`}><BiLinkExternal aria-hidden="true" /></a></div></div></div>
    </article>; })}</div>
  </section>
);
export default Work;
