import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { MdGppGood } from "react-icons/md";
import "../../styles/home/contact.css";

export default function Contact() {
  const [status, setStatus] = useState("");
  const form = useRef();
  const sendEmail = (event) => {
    event.preventDefault();
    setStatus("sending");
    emailjs.sendForm("service_aub8aho", "template_nz5iwfd", event.target, "a1Lb46pL_8xghpsqQ").then(() => { setStatus("success"); event.target.reset(); setTimeout(() => setStatus(""), 5000); }, () => { setStatus("error"); setTimeout(() => setStatus(""), 5000); });
  };
  return <section className="contact-parent section-shell" id="contact" aria-labelledby="contact-title"><div className="section-heading"><span className="section-index">04</span><h2 id="contact-title">Let&apos;s connect</h2><span className="heading-line" /></div><div className="contact-grid"><div><p className="section-lead">Have a project in mind or want to talk about an opportunity?</p><p className="contact-copy">Send a message and I&apos;ll get back to you as soon as I can.</p><a className="contact-email" href="mailto:mohamedzakaria.dev@gmail.com">mohamedzakaria.dev@gmail.com ↗</a></div><form ref={form} onSubmit={sendEmail}><label htmlFor="name">Name<input id="name" name="name" type="text" placeholder="Your name" minLength="3" maxLength="50" required /></label><label htmlFor="email">Email<input id="email" name="email" type="email" placeholder="you@example.com" maxLength="90" required /></label><label htmlFor="message">Message<textarea id="message" name="message" rows="5" placeholder="Tell me about your project" minLength="4" maxLength="850" required /></label><button className="button button-primary" type="submit" disabled={status === "sending"}>{status === "sending" ? "Sending…" : "Send message ↗"}</button>{status === "success" && <p className="form-status success" role="status">Message sent <MdGppGood aria-hidden="true" /></p>}{status === "error" && <p className="form-status error" role="alert">Something went wrong. Please try again.</p>}</form></div></section>;
}
