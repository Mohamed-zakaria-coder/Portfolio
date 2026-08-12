import React, { useEffect } from "react";
import { BiLinkExternal } from "react-icons/bi";
import { SiNetlify, SiVercel } from "react-icons/si";
import { AiFillGithub } from "react-icons/ai";
import coffeeImage from "../../Images/main-image.png";
import adsMaster from "../../Images/ads-master.png";
import cashierImage from "../../Images/cashier.png";
import { FaStar } from "react-icons/fa";

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
              <img src={adsMaster} alt="" />
            </div>
            <div className="icons">
              {/* <a
                href="https://landing-beta-dusky.vercel.app/"
                target="_blank"
                rel="noreferrer"
              > */}
              <FaStar className="premium" />
              {/* </a> */}
              <a
                href="https://landing-beta-dusky.vercel.app/"
                target="_blank"
                rel="noreferrer"
              >
                <BiLinkExternal className="folder-icon" />
              </a>
            </div>
            <h3 className="content-heading">Ads Master</h3>
            <div className="content-parent">
              <p className="content-p">
                Responsive React landing page built with JSX and Tailwind CSS,
                featuring smooth animations (Framer Motion/AOS) and
                EmailJS/Firebase contact integration
              </p>
            </div>
          </div>

          <div className="techs">
            <ul>
              <li>React</li>
              <li>Tailwind</li>
              <li>GIT</li>
            </ul>
          </div>
        </div>
        <div className="card" data-aos="fade-up">
          <div className="head-body-parent">
            <div className="img-parent">
              <img src={coffeeImage} alt="coffee site" />
            </div>
            <div className="icons">
              <FaStar className="premium" />

              <a
                href="https://coffee-landing-zeta.vercel.app/"
                target="_blank"
                rel="noreferrer"
                aria-label="Open live demo"
              >
                <BiLinkExternal className="folder-icon" />
              </a>
            </div>

            <h3 className="content-heading">Coffee Landing</h3>
            <div className="content-parent">
              <p className="content-p">
                A clean, responsive, and modern landing page template built with
                Next.js, TypeScript, and Tailwind CSS. Perfect for coffee shops
                and cafés.
              </p>
            </div>
          </div>

          <div className="techs">
            <ul>
              <li>Next</li>
              <li>Tailwind</li>
              <li>Ts</li>
            </ul>
          </div>
        </div>

        <div className="card" data-aos="fade-up">
          <div className="head-body-parent">
            <div className="img-parent">
              <img src={cashierImage} alt="cashier-vite" />
            </div>

            <div className="icons">
              <a
                href="https://github.com/Mohamed-zakaria-coder/cashier-vite"
                target="_blank"
                rel="noreferrer"
                aria-label="View Cashier source code on GitHub"
              >
                <AiFillGithub className="github" />
              </a>

              <a
                href="https://mohamed-zakaria-coder.github.io/cashier-vite/"
                target="_blank"
                rel="noreferrer"
                aria-label="Open Cashier live demo"
              >
                <BiLinkExternal className="folder-icon" />
              </a>
            </div>

            <h3 className="content-heading">Cashier POS</h3>

            <div className="content-parent">
              <p className="content-p">
                A responsive point-of-sale application for managing products,
                orders, sales, and business statistics through an interactive
                dashboard.
              </p>
            </div>
          </div>

          <div className="techs">
            <ul>
              <li>React</li>
              <li>Vite</li>
              <li>CSS</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
