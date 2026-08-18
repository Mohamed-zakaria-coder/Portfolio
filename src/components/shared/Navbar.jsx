import React, { useEffect, useState } from "react";
import { BsListNested } from "react-icons/bs";
import { TbLetterM } from "react-icons/tb";
import { motion, AnimatePresence } from "framer-motion";
import "../../styles/navbar.css";

const links = [
  ["About", "#about"],
  ["Projects", "#work"],
  ["Other Projects", "#other-projects"],
  ["Contact", "#contact"],
];

export default function Navbar({ scrollPosition = 0 }) {
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [active, setActive] = useState("#about");

  useEffect(() => {
    const onScroll = () => setHidden(window.scrollY > scrollPosition && window.scrollY > 96);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [scrollPosition]);

  useEffect(() => {
    const sections = links.map(([, id]) => document.querySelector(id)).filter(Boolean);
    const observer = new IntersectionObserver((entries) => {
      const visible = entries.find((entry) => entry.isIntersecting);
      if (visible) setActive(`#${visible.target.id}`);
    }, { rootMargin: "-25% 0px -60%" });
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <motion.header className={`site-nav ${hidden ? "is-hidden" : ""}`} initial={{ y: -30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.65 }}>
      <div className="navbar-content">
        <a className="brand-mark" href="/Portfolio/" aria-label="Mohamed Zakaria home"><TbLetterM className="m-icon" /></a>
        <button className="menu-toggle" type="button" aria-label={open ? "Close navigation" : "Open navigation"} aria-expanded={open} onClick={() => setOpen((value) => !value)}><BsListNested /></button>
        <nav className={`navbar-elements ${open ? "is-open" : ""}`} aria-label="Primary navigation">
          <ol>
            {links.map(([label, href], index) => <li key={href}><a className={active === href ? "active" : ""} href={href} onClick={() => setOpen(false)}><span>0{index + 1}.</span>{label}</a></li>)}
          </ol>
          <a className="resume-button" href="https://docs.google.com/document/d/1Tflv3V45Y2Qh-iBjI84gM-97kG6AkkTX7qaOmE6HlJk/edit?usp=sharing" target="_blank" rel="noreferrer">Resume</a>
        </nav>
      </div>
    </motion.header>
  );
}
