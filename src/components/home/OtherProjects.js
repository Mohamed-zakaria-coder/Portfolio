import React from "react";
import "../../styles/home/other-projects.css";
import { AiFillGithub } from "react-icons/ai";
import { BiLinkExternal } from "react-icons/bi";

const OtherProjects = () => {
  return (
    <div className="other-parent" id="other-projects">
      <h2>Other Projects</h2>
      <div className="other-cards-parent">
        <div className="other-card">
          <div>
          <div className="img-parent">
            <img
              src="https://images.pexels.com/photos/47261/pexels-photo-47261.jpeg?auto=compress&cs=tinysrgb&w=400"
              alt="mobile-img"
            />
          </div>
          <div className="card-content">
            <h3>Mobile Store</h3>
            <p>
              A Store For Selling Mobiles With Different Products To Choose The Products You Want
            </p>
            </div>
            <div className="icons">
              <a
                href="https://mohamed-zakaria-coder.github.io/mobile-store/"
                target="_blank"
                rel="noreferrer"
              >
                <AiFillGithub className="github" />
              </a>
              <BiLinkExternal className="folder-icon" />
            </div>
          </div>
        </div>
        <div className="other-card question">
          <div>          <div className="img-parent">
            <img
              src="https://cdn.pixabay.com/photo/2021/10/11/21/49/question-mark-6701933__340.png"
              alt="mobile-img"
            />
          </div> 
          <div className="card-content">
            <h3>Quiz App</h3>
            <p>
              A Quiz Application For Testing Your Knowledge And It Give You The Final Score
            </p>
            </div>
            <div className="icons">
              <a
                href="https://mohamed-zakaria-coder.github.io/quiz-application/"

                target="_blank"
                rel="noreferrer"
              >
                <AiFillGithub className="github" />
              </a>
              <BiLinkExternal className="folder-icon" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OtherProjects;
