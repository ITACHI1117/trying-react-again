import React from "react";
import world from "../../assets/images/world.png";

function Navbar() {
  return (
    <div className="TJ">
      <nav>
        <img src={world} alt="" />
        <p>my travel journal</p>
      </nav>
    </div>
  );
}

export default Navbar;
