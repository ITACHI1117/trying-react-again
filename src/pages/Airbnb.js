import React from "react";
import NavBar from "../components/Airbnb/NavBar";
import Hero from "../components/Airbnb/Hero";
import Cart from "../components/Airbnb/Cart";
import data from "../data";

function Airbnb() {
  const cards = data.map((item) => {
    return <Cart key={item.id} {...item} />;
  });
  return (
    <>
      <NavBar />
      <Hero />
      <div className="cartItems">{cards}</div>
    </>
  );
}

export default Airbnb;
