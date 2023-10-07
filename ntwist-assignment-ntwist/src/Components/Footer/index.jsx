import React from "react";
import "./Footer.css";
import logo from "../../assets/footer-logo.png";
import { AiOutlineTwitter } from "react-icons/ai";
import { IoLogoLinkedin } from "react-icons/io";

const footerItem = [
  "Home",
  "About Us",
  "Contact Us",
  "Privacy Policy",
  "Sitemap",
];

const Footer = () => {
  return (
    <div className="footer">
      <div className="footerInner">
        <img src={logo} alt="footer" className="footer-img" />
        <div className="footermenu">
          {footerItem.map((item) => {
            return <div>{item}</div>;
          })}
        </div>
        <div style={{ color: "rgb(111, 127, 146)" }}>
          9650 20 Ave NW, Edmonton, AB, T6N 1G1, Canada
        </div>
        <div className="social-icon">
          <AiOutlineTwitter />
          <IoLogoLinkedin />
        </div>
        <div style={{ color: "rgb(111, 127, 146)" }}>© 2022. Ntwist Inc.</div>
      </div>
    </div>
  );
};

export default Footer;
