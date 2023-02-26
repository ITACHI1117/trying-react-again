import React from "react";
import locator from "../../assets/images/locator.png";

function TJList(props) {
  console.log(props);
  return (
    <div className="TJList">
      <div className="TJContainer">
        <img className="TJContainerImg" src={props.img} alt="" />
        <div className="TJItems">
          <div className="TJLocation">
            <img className="TJLocationImg" src={locator} alt="" />
            <p>{props.location}</p>
            <a href={props.googleMaps}>View on Google Maps</a>
          </div>
          <h1>{props.locationName}</h1>
          <h5>{props.date}</h5>
          <p className="TJItemsP">{props.description}</p>
        </div>
      </div>
    </div>
  );
}

export default TJList;
