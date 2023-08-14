import React from "react";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import InstagramIcon from "@mui/icons-material/Instagram";
import './Footer.css'

const Footer = () => {
  return (
    <div className="footer">
      <div className="socialMedia">
        <FacebookRoundedIcon />
        <InstagramIcon />
        <p>&copy; 2023 phoking.com</p>
      </div>
    </div>
  );
};

export default Footer;
