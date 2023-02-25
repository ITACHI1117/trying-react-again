import React from "react";
import Twitter from "../../assets/images/Twitter.png";
import Fb from "../../assets/images/fb.png";
import IG from "../../assets/images/IG.png";
import Linkedin from "../../assets/images/Linkedin.png";
import GitHub from "../../assets/images/GitHub.png";

function Footer() {
  return (
    <div className="wrapFooter">
      <div className="footer">
        <img src={Twitter} alt="" />
        <img src={Fb} alt="" />
        <img src={IG} alt="" />
        <img src={Linkedin} alt="" />
        <img src={GitHub} alt="" />
      </div>
    </div>
  );
}

export default Footer;
