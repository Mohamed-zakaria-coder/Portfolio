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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum ipsum quidem mollitia dicta, est explicabo quia. Repudiandae, omnis suscipit corrupti ut unde reiciendis iste nostrum exercitationem. Quia quidem eveniet eaque.
        </p>
      </div>
      <h3>I'm Working With</h3>
      <div className="list-parent">
        <ul >
          <li data-aos="fade-right">Html</li>
          <li data-aos="fade-left">Css</li>
          <li data-aos="fade-right">JavaScript (ES6+)</li>
          <li data-aos="fade-left">React</li>
        </ul>
      </div>
      <img src="" alt="" />
    </div>
  );
};

export default About;
