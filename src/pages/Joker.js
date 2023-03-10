import React, { useState, useEffect } from "react";
import Form from "../components/Joker/Form";
import Meme from "../components/Joker/Meme";
import Navbar from "../components/Joker/Navbar";
import memeImg from "../assets/images/memeimg.png";

function Joker() {
  // Meme information
  const [meme, setMeme] = useState({
    topText: "",
    buttomText: "",
    randomImage: memeImg,
  });

  // All memes from the Api
  const [allMemes, setAllMemes] = useState([]);

  // Api request
  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((data) => setAllMemes(data.data.memes));
  }, []);

  // Get meme images
  const getMemeImage = () => {
    const randomNumber = Math.floor(Math.random() * allMemes.length);
    const url = allMemes[randomNumber].url;
    setMeme((prevMeme) => ({ ...prevMeme, randomImage: url }));
    console.log(url);
  };

  return (
    <>
      <Navbar />
      <Form getMemeImage={getMemeImage} />
      <Meme memes={allMemes} url={meme.randomImage} />
    </>
  );
}

export default Joker;
