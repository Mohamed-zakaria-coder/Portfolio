import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { MdGppGood } from "react-icons/md";
import "../../styles/home/contact.css";
export default function Contact() {

  const [sendError, setSendError] = useState(false);
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
            setSendError(false);

            document.querySelector(".successfully-sent").style.display =
              "block";

            setTimeout(function () {
              return (document.querySelector(
                ".successfully-sent"
              ).style.display = "none");
            }, 5000);
            e.target.reset();
          }
        },
        (error) => {
          console.log(error.text);
          setSendError(true);

          setTimeout(() => {
            setSendError(false);
          }, 5000);
        }
      );
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
          maxLength="50"
          required
        />
        <input
          name="email"
          type="email"
          maxLength="90"
          placeholder="Enter Your Email"
          required
        />
        <textarea
          name="message"
          cols="30"
          rows="10"
          placeholder="Enter Your Message"
          minLength="4"
          maxLength="850"
          required
        ></textarea>
        <input type="submit" />
      </form>
      <div className="successfully-sent">
        Your Message Has Been Sent <MdGppGood className="correct" />
      </div>
      {sendError && (
        <div className="send-error">
          Something went wrong. Please try again.
        </div>
      )}
    </div>
  );
}
