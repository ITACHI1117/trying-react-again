import React from "react";
import { useContext } from "react";
import DataContext from "../../context/DataContext";

function Meme() {
  const { url } = useContext(DataContext);
  console.log(url);
  return (
    <div className="Meme">
      <img className="memeImg" src={url} alt="" />
    </div>
  );
}

export default Meme;
