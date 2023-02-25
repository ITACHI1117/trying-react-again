import React from "react";
import gridImg from "../../assets/images/gridImg.png";
function Hero() {
  return (
    <div>
      <div className="heroImgs">
        <img className="gridImg" src={gridImg} alt="" />
      </div>
      <div className="heroTexts">
        <h1>Online Experiences</h1>
        <p>
          Join unique interactive activities led by one-of-a-kind hosts—all
          without leaving home.
        </p>
      </div>
    </div>
  );
}

export default Hero;
