import React from "react";
import airbnb from "../../assets/images/airbnb.png";

function NavBar() {
  return (
    <div className="airbnbNav">
      <nav>
        <img src={airbnb} alt="" />
      </nav>
    </div>
  );
}

export default NavBar;
