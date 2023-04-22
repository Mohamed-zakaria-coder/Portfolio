import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { MdGppGood } from "react-icons/md";
import "../../styles/home/contact.css";
export default function Contact() {
  let form = useRef();
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_aub8aho",
        "template_nz5iwfd",
        e.target,
        "a1Lb46pL_8xghpsqQ"
      )
      .then(
        (result) => {
          if (result.text === "OK") {
            console.log("Its Working");

            document.querySelector(".successfully-sent").style.display =
              "block";
            setTimeout(function () {
              return (document.querySelector(
                ".successfully-sent"
              ).style.display = "none");
            }, 5000);
          }
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }
  return (
    <div className="contact-parent" id="contact">
      <h2>Contact</h2>
      <form action="" ref={form} onSubmit={sendEmail}>
        <input
          name="name"
          type="text"
          placeholder="Enter Your Name"
          minLength="3"
          maxLength="25"
          required
        />
        <input
          name="email"
          type="email"
          placeholder="Enter Your Email"
          required
        />
        <textarea
          name="message"
          cols="30"
          rows="10"
          placeholder="Enter Your Message"
          minLength="4"
          maxLength="100"
          required
        ></textarea>
        <input type="submit" />
      </form>
      <div className="successfully-sent">
        Your Message Has Been Sent <MdGppGood className="correct" />
      </div>
    </div>
  );
}
