import React from "react";
import { TbLetterM } from "react-icons/tb";
import "../../styles/footer.css";

const Footer = () => <footer className="footer"><a className="footer-brand" href="/Portfolio/" aria-label="Back to home"><TbLetterM aria-hidden="true" /></a><p>Designed &amp; built by <strong>Mohamed Zakaria</strong></p><p>© {new Date().getFullYear()}</p></footer>;
export default Footer;
