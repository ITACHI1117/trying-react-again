import React, { useEffect } from "react";
import star from "../../assets/images/star.png";
import { useState } from "react";

function Cart(props) {
  const [badgeText, setBadgeText] = useState("");

  useEffect(() => {
    if (props.openspots === 0) {
      setBadgeText("SOLD OUT");
    } else if (props.location === "Online") {
      setBadgeText("ONLINE");
    }
  }, [props.location, props.openspots]);

  return (
    <div className="oneCart">
      {badgeText && <div className="cardBadge">{badgeText}</div>}
      <img src={props.coverImg} alt="" />
      <div className="stars">
        <img src={star} alt="" />
        <p>{props.stats.rating}</p>
        <p>
          ({props.stats.reviewCount}).{props.country}
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
