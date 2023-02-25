import React from "react";
import cartImg1 from "../../assets/images/cartImg1.png";
import star from "../../assets/images/star.png";

function Cart(props) {
  //   let badgeText;
  //   const changeText = () => {
  //     if (props.openSpots === 0) {
  //       badgeText == "SOLD OUT";
  //     } else if (props.location === "Online") {
  //       badgeText == "ONLINE";
  //     }
  //     changeText();
  //   };
  return (
    <div className="oneCart">
      {props.openSpots === 0 && <div className="cardBadge">SOLD OUT</div>}
      <img src={props.img} alt="" />
      <div className="stars">
        <img src={star} alt="" />
        <p>{props.rating}</p>
        <p>
          ({props.reviewCount}).{props.country}
        </p>
      </div>
      <div className="lesson">
        <p>{props.title}</p>
      </div>
      <div className="Price">
        <p>From ${props.price} / person</p>
      </div>
    </div>
  );
}

export default Cart;
