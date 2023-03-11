import React from "react";
import Form from "../components/Joker/Form";
import Meme from "../components/Joker/Meme";
import Navbar from "../components/Joker/Navbar";
import { DataProvider } from "../context/DataContext";

function Joker() {
  // I didnt pass data using props instead i used Context
  return (
    <>
      <DataProvider>
        <Navbar />
        <Form />
        <Meme />
      </DataProvider>
    </>
  );
}

export default Joker;
