import React, {useEffect} from "react";
import "../../styles/home/about.css";
import "aos/dist/aos.css";
import AOS from 'aos';

const About = () => {

    useEffect(() => {
      AOS.init({
        duration : 1000
      });
    }, []);
  return (
    <div className="about-container" id="about" >
      <h2 className="about-heading">About Me</h2>
      <div>
        <p>
      My Name Is Mohamed Zakaria, I'm Twenty-Four Years old, I graduated from commerce university in June 2020
        </p>
      </div>
      <h3>I'm Working With</h3>
      <div className="list-parent">
        <ul >
          <li data-aos="fade-right">HTML</li>
          <li data-aos="fade-left">CSS</li>
          <li data-aos="fade-right">JavaScript (ES6+)</li>
          <li data-aos="fade-left">React</li>
          <li data-aos="fade-right">Bootstrap</li>
          <li data-aos="fade-left">Git</li>
          <li data-aos="fade-right">Github</li>
          <li data-aos="fade-left">Netlify</li>
        </ul>
      </div>
    </div>
  );
};

export default About;
