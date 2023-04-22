import React, { useEffect } from "react";
import { FiFolder } from "react-icons/fi";
import { SiNetlify } from "react-icons/si";
import { AiFillGithub } from "react-icons/ai";

import "../../styles/home/work.css";
import "aos/dist/aos.css";
import AOS from "aos";
const Work = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <div className="work-parent" id="work">
      <h2 className="work-heading">Projects</h2>
      <div className="cards-parent">
        {/* <a href="https://mohamed-zakaria-coder.github.io/Makeup-Project/" target="_blank" rel="noreferrer">
        </a> */}
        <div className="card" data-aos="fade-up">
          <div className="head-body-parent">
            <div className="head-parent">
              <FiFolder className="folder-icon" />
              <div>
                <a
                  href="https://mohamed-zakaria-coder.github.io/dashboard/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <AiFillGithub className="github" />
                </a>
                {/* <a
                  href=""
                  target="_blank"
                  rel="noreferrer"
                >
                  <SiNetlify className="netlify" />
                </a> */}
              </div>
            </div>
            <h3 className="content-heading">Dashboard</h3>
            <div className="content-parent">
              <p className="content-p">
                A Multi Page Application Dashboard Made By Html And CSS, It
                Contains 9 Pages
              </p>
            </div>
          </div>
          <footer>
            <ul>
              <li>Css</li>
              <li>React</li>
              {/* <li>Github</li> */}
            </ul>
          </footer>
        </div>
        {/* <a href="https://mohamed-zakaria-coder.github.io/Cashier/" target="_blank" rel="noreferrer">
          </a> */}
        <div className="card" data-aos="fade-up">
          <div className="head-body-parent">
            <div className="head-parent">
              <FiFolder className="folder-icon" />
              <div>
                <a
                  href="https://mohamed-zakaria-coder.github.io/Cashier/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <AiFillGithub className="github" />
                </a>
                <a
                  href="https://sunny-frangollo-ff5b96.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <SiNetlify className="netlify" />
                </a>
              </div>
            </div>
            <div className="content-parent">
              <h3 className="content-heading">Cashier</h3>
              <p className="content-p">
                A web based cashier app. It enables users to store and track
                their sales and give them some statistics and charts about their
                performance such as total earnings.
                {/* , month earnings, top sold
                products, and most profitable products. Local storage was used
                to handle data. */}
              </p>
            </div>
          </div>
          <footer>
            <ul>
              <li>Css</li>
              <li>React</li>
              {/* <li>Github</li> */}
            </ul>
          </footer>
        </div>
        {/* <a href="https://mohamed-zakaria-coder.github.io/landing-page/" target="_blank" rel="noreferrer">
          </a> */}
        <div className="card" data-aos="fade-up">
          <div className="head-body-parent">
            <div className="head-parent">
              <FiFolder className="folder-icon" />
              <div>
                <a
                  href="https://mohamed-zakaria-coder.github.io/landing-page/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <AiFillGithub className="github" />
                </a>
                {/* <a
                  href="https://634d4da02fd43224d47ff848--beautiful-meerkat-7c34a1.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <SiNetlify className="netlify" />
                </a> */}
              </div>
            </div>
            <div className="content-parent">
              <h3 className="content-heading">Landing Page</h3>
              <p className="content-p">
                A Store For Selling Best Hair Products For The Health Of Your
                Hair And It Provides A Natural Products
              </p>
            </div>
          </div>
          <footer>
            <ul>
              <li>Css</li>
              <li>React</li>
              {/* <li>Github</li> */}
            </ul>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default Work;
