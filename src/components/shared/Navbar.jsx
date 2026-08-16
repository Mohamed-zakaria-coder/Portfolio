import React, { useEffect, useState } from "react";
import { TbLetterM } from "react-icons/tb";
import { HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi";
import "../../styles/navbar.css";

const links = [
  ["About", "#about"],
  ["Projects", "#work"],
  ["Other projects", "#other-projects"],
  ["Contact", "#contact"],
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
      <div className="navbar-content">
        <a className="brand-mark" href="/Portfolio/" aria-label="Mohamed Zakaria home">
          <TbLetterM aria-hidden="true" />
        </a>
        <button className="menu-toggle" type="button" aria-expanded={menuOpen} aria-controls="primary-navigation" onClick={() => setMenuOpen((open) => !open)}>
          <span className="sr-only">{menuOpen ? "Close navigation" : "Open navigation"}</span>
          {menuOpen ? <HiOutlineX aria-hidden="true" /> : <HiOutlineMenuAlt3 aria-hidden="true" />}
        </button>
        <nav id="primary-navigation" className={`navbar-elements ${menuOpen ? "is-open" : ""}`} aria-label="Primary navigation">
          <ol>
            {links.map(([label, href], index) => (
              <li key={href}>
                <a href={href} onClick={() => setMenuOpen(false)}><span>{String(index + 1).padStart(2, "0")}</span>{label}</a>
              </li>
            ))}
          </ol>
          <a className="resume-link" href="https://docs.google.com/document/d/1Tflv3V45Y2Qh-iBjI84gM-97kG6AkkTX7qaOmE6HlJk/edit?usp=sharing" target="_blank" rel="noreferrer">Resume <span aria-hidden="true">↗</span></a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
