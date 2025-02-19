import React from "react";

const PopularSkill = (props) => {
  const { skill, minutes, image } = props; // Destructuring props

  return (
    <div className="popular-skills">
      <img src={image} alt="" />
      <h2>{skill}</h2>
      <p>Estimated arrival: {minutes} minutes</p>
    </div>
  );
};

export default PopularSkill;
