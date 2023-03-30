import React, {useEffect} from "react";
import { FiFolder } from "react-icons/fi";
import { SiHeroku } from "react-icons/si";
import { SiNetlify } from "react-icons/si";
import "../../styles/home/work.css";
import "aos/dist/aos.css";
import AOS from 'aos';
const Work = () => {
  useEffect(() => {
    AOS.init({
      duration : 1000
    });
  }, []);
  return (
    <div className="work-parent" id="work"   >
      <h1 className="work-heading">Projects</h1>
      <div className="cards-parent">
        <a href="https://mohamed-zakaria-coder.github.io/Makeup-Project/" target="_blank" rel="noreferrer">
          <div className="card" data-aos="fade-up">
            <div className="head-parent">
              <FiFolder className="folder-icon" />
              <div>
                <a href="https://makeup-project-2.herokuapp.com/" target="_blank" rel="noreferrer">
                  <SiHeroku className="heroku" />
                </a>
                <a href="https://main--whimsical-wisp-0d8690.netlify.app/" target="_blank" rel="noreferrer">
                  <SiNetlify className="netlify" />
                </a>
              </div>
            </div>
              <h3 className="content-heading">Makeup Store</h3>
            <div className="content-parent">
              <p className="content-p">
                Online catalog for makeup. It consumes an online API that
                provide details about makeup categories and products.
                FramerMotion was used for adding some simple animations in
              </p>
            </div>
            <footer>
              <ul >
                <li>Css</li>
                <li>React</li>
                <li>Github</li>
              </ul>
            </footer>
          </div>
        </a>
        <a href="https://mohamed-zakaria-coder.github.io/Cashier/" target="_blank" rel="noreferrer">
          <div className="card"  data-aos="fade-up">
            <div className="head-parent">
              <FiFolder className="folder-icon" />
              <div>
                <a href="https://new-app-1200.herokuapp.com/" target="_blank" rel="noreferrer">
                  <SiHeroku className="heroku" />
                </a>
                <a href="https://sunny-frangollo-ff5b96.netlify.app/" target="_blank" rel="noreferrer">
                  <SiNetlify className="netlify" />
                </a>
              </div>
            </div>
            <div className="content-parent">
              <h3 className="content-heading">Pizza Store</h3>
              <p className="content-p">
                A web based cashier app. It enables users to store and track
                their sales and give them some statistics and charts about their
                performance such as total earnings, month earnings, top sold
                products, and most profitable products. Local storage was used
                to handle data.
              </p>
            </div>
            <footer>
              <ul>
                <li>Css</li>
                <li>React</li>
                <li>Github</li>
              </ul>
            </footer>
          </div>
          </a>
          <a href="https://mohamed-zakaria-coder.github.io/landing-page/" target="_blank" rel="noreferrer">
          <div className="card" data-aos="fade-up">
            <div className="head-parent">
              <FiFolder className="folder-icon" />
              <div>
                <a href="https://landing-page5.herokuapp.com/" target="_blank" rel="noreferrer">
                  <SiHeroku className="heroku" />
                </a>
                <a href="https://634d4da02fd43224d47ff848--beautiful-meerkat-7c34a1.netlify.app/" target="_blank" rel="noreferrer">
                  <SiNetlify className="netlify" />
                </a>
              </div>
            </div>
            <div className="content-parent">
              <h3 className="content-heading">Landing Page</h3>
              <p className="content-p">
                A Store For Selling Best Hair Products For The Health Of Your Hair And It Provides A Natural Products
              </p>
            </div>
            <footer>
              <ul>
                <li>Css</li>
                <li>React</li>
                <li>Github</li>
              </ul>
            </footer>
          </div>
          </a>
      </div>
    </div>
  );
};

export default Work;
