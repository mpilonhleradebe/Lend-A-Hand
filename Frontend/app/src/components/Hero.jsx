import React, { useState, useEffect } from "react";
import logo from "../assets/logo-lend.png";
import search from "../assets/icons/search.svg";
import poster from "../assets/images/service-by-people2.png";
import SmallerUserCard from "./SmallerUserCard";

const Hero = () => {
  const lendExamples = [
    "Sibusiso fixing a broken fence.",
    "Mampho with her weekend gardening.",
    "Thabo installing solar panels.",
    "Naledi baking treats for a family event.",
    "Busi tutoring kids in math after school.",
  ];

  const [changingText, setChangingText] = useState(lendExamples[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setChangingText((prevText) => {
        const currentIndex = lendExamples.indexOf(prevText);
        const nextIndex = (currentIndex + 1) % lendExamples.length; // Loop back to the first example
        return lendExamples[nextIndex];
      });
    }, 3000); // Change every 5000 milliseconds (5 seconds)

    return () => clearInterval(interval);
  }, [lendExamples]);

  return (
    <div className="hero-dev">
      <div className="logo changing search">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <span className="changing-text">
          <p>
            Lend a hand to <br />
            {changingText}
          </p>
        </span>

        <span className="search-bar-div">
          <input type="text" placeholder="Find a handymen..." />
          <span className="search-icon">
            <img src={search} alt="" />
          </span>
        </span>
      </div>

      <div className="small-user-div">
        <SmallerUserCard />
      </div>
    </div>
  );
};

export default Hero;
