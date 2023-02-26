import React from "react";
import Troll from "../../assets/images/TrollFace.png";

function Navbar() {
  return (
    <div className="Joker">
      <nav>
        <div className="logo">
          <img src={Troll} alt="" />
          <h1>Meme Genrator</h1>
        </div>
        <p>React Cource - Project 3</p>
      </nav>
    </div>
  );
}

export default Navbar;
