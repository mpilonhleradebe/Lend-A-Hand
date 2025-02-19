import React from "react";
import chevron from "../assets/icons/chevron-right.svg";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
const NavBar = () => {
  const navigate = useNavigate();
  return (
    <div className="navbar">
      <div className="web-name">
        <h1>lend a hand.</h1>
      </div>
      <div className="nav-div">
        <ul className="nav-items">
          <li className="lend-a-box">
            <a href="/desktop">Lend A Hand</a>
          </li>
          <li className="service-nav">
            <a href="/workers">Services</a>
          </li>
          <li className="sign-in">
            <a href="/signup">Sign up</a>
            {/* <img src={chevron} alt="" /> */}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
