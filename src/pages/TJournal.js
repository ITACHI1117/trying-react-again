import React from "react";
import Navbar from "../components/TJournal/Navbar";
import TJList from "../components/TJournal/TJList";
import todoData from "../todoData";

function TJournal() {
  return (
    <>
      <Navbar />
      {todoData.map((item) => {
        return <TJList key={item.id} {...item} />;
      })}
    </>
  );
}

export default TJournal;
