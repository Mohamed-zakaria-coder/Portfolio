import React from "react";
import "../../styles/footer.css";
import { TbLetterM } from "react-icons/tb";

const Footer = () => {
  return (
    <div className="footer">
        <div className="m-logo-footer">
          <a href="/Portfolio/">
            <TbLetterM className="m-icon-footer" />
          </a>
        </div>
        <div>
            <h3>By:M.z</h3>
        </div>
        <div>
            Copy Rights &copy; 2022
        </div>
    </div>
  );
};

export default Footer;
