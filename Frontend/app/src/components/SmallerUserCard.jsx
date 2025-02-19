import React, { useState } from "react";
import prof1 from "../assets/images/profile1.jpg";
import RatingReview from "./RatingReview";
const SmallerUserCard = () => {
  const [rating, setRating] = useState("4");
  return (
    <div className="small-card">
      <img src={prof1} alt="" />
      <div className="detail-small" style={{ marginLeft: "20px" }}>
        <p>Mlungisi Ncwane</p>
        <p style={{ fontSize: "14px" }} className="make-italic">
          18 Maboa Street, Dobsonville, Soweto
        </p>
        <RatingReview rating="4" setRating={setRating} />
        <p className="description-small">
          Your local plumber and the go-to guy when things get messy!
        </p>
      </div>
    </div>
  );
};

export default SmallerUserCard;
