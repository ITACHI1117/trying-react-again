import React from "react";
import NavBar from "../components/Airbnb/NavBar";
import Hero from "../components/Airbnb/Hero";
import Cart from "../components/Airbnb/Cart";
import cartImg1 from "../assets/images/cartImg1.png";
import data from "../data";

function Airbnb() {
  console.log(data[0].coverImg);

  const cards = data.map((item) => {
    return (
      <Cart
        key={item.id}
        img={item.coverImg}
        rating={item.stats.rating}
        reviewCount={item.stats.reviewCount}
        location={item.location}
        title={item.title}
        price={item.price}
        openSpots={item.openspots}
      />
    );
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
