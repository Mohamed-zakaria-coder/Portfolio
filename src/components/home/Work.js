import React, { useEffect } from "react";
import { BiLinkExternal } from "react-icons/bi";
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
        <div className="card" data-aos="fade-up">
          <div className="head-body-parent">
            <div className="img-parent">
              <img src={require("../../Images/choong-deng-xiang--WXQm_NTK0U-unsplash.jpg")} alt="" />
            </div>
            <div className="icons">
            <a
              href="https://github.com/Mohamed-zakaria-coder/dashboard"
              
              target="_blank"
              rel="noreferrer"
            >
              <AiFillGithub className="github" />
            </a>
            <a
              href="https://mohamed-zakaria-coder.github.io/dashboard/"
              target="_blank"
              rel="noreferrer"
            >
              <BiLinkExternal className="folder-icon" />
            </a>
          </div>
            <h3 className="content-heading">Dashboard</h3>
            <div className="content-parent">
              <p className="content-p">
                A Multi Page Application Dashboard Made By Html And CSS, It
                Contains 9 Pages
              </p>
            </div>
          </div>

          
          <div className="techs">
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>GIT</li>
          </ul>
          </div>
        </div>
        <div className="card" data-aos="fade-up">
          <div className="head-body-parent">
            <div className="img-parent">
              <img src="https://cdn.pixabay.com/photo/2020/01/20/00/08/pizza-4779230__340.jpg" alt="" />
            </div>
            <div className="icons">
            <a
              href="https://github.com/Mohamed-zakaria-coder/Cashier"
              target="_blank"
              rel="noreferrer"
            >
              <AiFillGithub className="github" />
            </a>
            <a href="https://cashier-services.netlify.app/" target="_blank"
              rel="noreferrer">
            <SiNetlify className = "netlify"/>
            </a>
            <a
              href="https://mohamed-zakaria-coder.github.io/Cashier/"
              target="_blank"
              rel="noreferrer"
            >
              <BiLinkExternal className="folder-icon" />
            </a>
          </div>
            <h3 className="content-heading">Cashier</h3>
            <div className="content-parent">
              <p className="content-p">
                A web-based cashier app. It enables users to store and track
                their sales and give them some statistics and charts about their
                performance
              </p>
            </div>
          </div>

          
          <div className="techs">
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>React</li>
          </ul>
          </div>
        </div>

        <div className="card" data-aos="fade-up">
          <div className="head-body-parent">
            <div className="img-parent">
              <img src="https://images.pexels.com/photos/7319129/pexels-photo-7319129.jpeg?auto=compress&cs=tinysrgb&w=400" alt="product-img" />
            
            </div>
            <div className="icons">
            <a
              href="https://github.com/Mohamed-zakaria-coder/landing-page"
              target="_blank"
              rel="noreferrer"
            >
              <AiFillGithub className="github" />
            </a>
            <a href="https://mohamed-zakaria-coder.github.io/landing-page/" target="_blank"
              rel="noreferrer">
            <BiLinkExternal className="folder-icon" />
            </a>
          </div>
            <h3 className="content-heading">Landing-Page</h3>
            <div className="content-parent">
              <p className="content-p">
                A Store For Selling the Best Hair Products For The Health Of
                Your Hair And It Provides Natural Products
              </p>
            </div>
          </div>

          
          <div className="techs">
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>React</li>
          </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
