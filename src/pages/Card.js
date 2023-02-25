import React from "react";
import About from "../components/cards/About";
import Header from "../components/cards/Header";
import Intrests from "../components/cards/Intrests";
import PhotoHeader from "../components/cards/PhotoHead";
import Footer from "../components/cards/Footer";

function Card() {
  return (
    <div className="centerItems">
      <div className="card">
        <PhotoHeader />
        <Header />
        <About />
        <Intrests />
        <Footer />
      </div>
    </div>
  );
}

export default Card;
