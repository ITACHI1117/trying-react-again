import React from "react";
import mail from "../../assets/images/mailIcon.png";
function Header() {
  return (
    <div className="HeaderCenter">
      <h1>Laura Smith</h1>
      <h3>Frontend Developer</h3>
      <p>laurasmith.website</p>
      <button className="rowButton" type="">
        <div className="mailLogo">
          <img src={mail} alt="" />
        </div>
        Email
      </button>
    </div>
  );
}

export default Header;
