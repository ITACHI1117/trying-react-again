import React from "react";
import Form from "../components/Joker/Form";
import Meme from "../components/Joker/Meme";
import Navbar from "../components/Joker/Navbar";
import { DataProvider } from "../context/DataContext";

function Joker() {
  // I didn't pass data using props instead i used Context
  // Note to self: not all the data needs to be in the context
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
