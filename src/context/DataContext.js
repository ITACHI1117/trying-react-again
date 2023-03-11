import { createContext, useState, useEffect } from "react";
import memeImg from "../assets/images/memeimg.png";

const DataContext = createContext({});

export const DataProvider = ({ children }) => {
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
  };

  const url = meme.randomImage;

  return (
    <DataContext.Provider value={{ url, getMemeImage }}>
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
