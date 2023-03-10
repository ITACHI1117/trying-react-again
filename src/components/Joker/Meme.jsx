import React from "react";
import memeImg from "../../assets/images/memeimg.png";

function Meme({ url }) {
  return (
    <div className="Meme">
      <img className="memeImg" src={url ? url : memeImg} alt="" />
    </div>
  );
}

export default Meme;
