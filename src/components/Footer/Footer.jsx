import React from "react";
import "./Footer.css";
import insta from "../../assets/instagram.png";
import github from "../../assets/github.png";
import linkdin from "../../assets/linkedin.png";
import Logo from "../../assets/logo.png";

const Footer = () => {
  return (
    <div className="Footer-container">
      <hr />
      <div className="footer">
        <div className="social">
            <img src={github} alt=""/>
            <img src={insta} alt="" />
            <img src={linkdin} alt="" />
        </div>
        <div className="logo-f">
            <img src={Logo} alt=""/>
        </div>
      </div>
      <div className='blur blur-f-1'></div>
      <div className='blur blur-f-2'></div>
    </div>
  );
};

export default Footer;
