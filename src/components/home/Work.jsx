import React from "react";
import { BiLinkExternal } from "react-icons/bi";
import { AiFillGithub } from "react-icons/ai";
import { FaStar } from "react-icons/fa";
import { motion } from "framer-motion";
import coffeeImage from "../../Images/main-image.png";
import adsMaster from "../../Images/ads-master.png";
import cashierImage from "../../Images/cashier.png";
import "../../styles/home/work.css";

const projects = [
  { title: "Ads Master", image: adsMaster, href: "https://landing-beta-dusky.vercel.app/", description: "Responsive React landing page built with JSX and Tailwind CSS, featuring smooth animations (Framer Motion/AOS) and EmailJS/Firebase contact integration", tech: ["React", "Tailwind", "GIT"], featured: true },
  { title: "Coffee Landing", image: coffeeImage, href: "https://coffee-landing-zeta.vercel.app/", description: "A clean, responsive, and modern landing page template built with Next.js, TypeScript, and Tailwind CSS. Perfect for coffee shops and cafés.", tech: ["Next", "Tailwind", "Ts"], featured: true },
  { title: "Cashier POS", image: cashierImage, href: "https://mohamed-zakaria-coder.github.io/cashier-vite/", github: "https://github.com/Mohamed-zakaria-coder/cashier-vite", description: "A responsive point-of-sale application for managing products, orders, sales, and business statistics through an interactive dashboard.", tech: ["React", "Vite", "CSS"] },
];

export default function Work() {
  return <section className="work-parent" id="work" aria-labelledby="work-title">
    <div className="section-heading-row"><p className="eyebrow">Selected builds</p><h2 id="work-title">Projects</h2></div>
    <div className="cards-parent">
      {projects.map((project, index) => <motion.article className="card" key={project.title} initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ delay: index * 0.12, duration: 0.65 }}>
        <a className="img-parent" href={project.href} target="_blank" rel="noreferrer" aria-label={`Open ${project.title} live demo`}><img src={project.image} alt={`${project.title} project preview`} /><span className="image-overlay">View project <BiLinkExternal /></span></a>
        <div className="project-meta"><div className="icons">{project.featured && <FaStar className="premium" aria-label="Featured project" />}{project.github && <a href={project.github} target="_blank" rel="noreferrer" aria-label={`View ${project.title} source code`}><AiFillGithub /></a>}<a href={project.href} target="_blank" rel="noreferrer" aria-label={`Open ${project.title} live demo`}><BiLinkExternal /></a></div><h3>{project.title}</h3><p>{project.description}</p><ul className="techs">{project.tech.map((tech) => <li key={tech}>{tech}</li>)}</ul></div>
      </motion.article>)}
    </div>
  </section>;
}
