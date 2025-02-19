import React from "react";
import {
  FaBeer,
  FaLocationArrow,
  FaMoneyBill,
  FaStar,
  FaToolbox,
  FaUser,
} from "react-icons/fa";
import { workerData } from "../utils/data";
import { Link } from "react-router-dom";

const btn = document.getElementById("id");
function alertUser() {
  window.alert("You have hired a skilled worker");
}

const WorkerCard = (props) => {
  return (
    <>
      <div className="worker-container">
        <div className="worker-item">
          <img src={props.image} alt="" height={100} width={100} />
          <div className="details">
            <p>
              {" "}
              <FaUser style={{ color: "gray" }} /> {props.username}
            </p>

            <p>
              {" "}
              <FaToolbox
                style={{ color: "gray", position: "relative", top: "1px" }}
              />{" "}
              {props.skill}
            </p>
            <p>
              {" "}
              <FaMoneyBill style={{ color: "gray" }} /> {props.rate}
            </p>
            <p>
              <FaStar style={{ color: "gray" }} />
              {props.rating}
            </p>
            <p>
              {" "}
              <FaLocationArrow style={{ color: "gray" }} /> {props.location}
            </p>
          </div>
          <div className="worker-btn">
            <Link to={"/booking"}>
              <button id="hire">Hire</button>
            </Link>
          </div>
        </div>
        <div className="line">
          <div className="text">
            <p>Overview</p>
          </div>
        </div>

        <div className="textbox">
          {props.about.split("\n").map((line, index) => (
            <p key={index} className="worker-about">
              {line}
            </p> // Each line in a new <p>
          ))}
        </div>
      </div>
    </>
  );
};

export default WorkerCard;
