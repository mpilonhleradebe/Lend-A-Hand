import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router";

const Booking = () => {
  const [taskDescription, setTaskDetails] = useState("");
  const [taskScope, setTaskScope] = useState("");
  const [address, setAddress] = useState("");
  const [dateAndTime, setDateAndTime] = useState("");
  const [additionalNotes, setAdditionalNotes] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const value = e.target.value;
    const bookingData = {
      taskDescription: taskDescription,
      taskScope: taskScope,
      address: address,
      dateAndTime: dateAndTime,
      additionalNotes: additionalNotes,
    };

    //  axios.post('http://localhost:3000/booking', Booking).then((res)=>{console.log('success')})

    try {
      const response = await axios.post(
        "http://localhost:3000/booking",
        bookingData
      );
      console.log("Success:", response.data);
      // Navigate to confirmation page after successful submission
      navigate("/confirmation");
    } catch (error) {
      console.error("Error submitting booking:", error);
    }
  };
  const navigate = useNavigate();

  return (
    <>
      <div className="bookings">
        <div className="header"></div>

        <form onSubmit={handleSubmit} method="POST">
          <div className="form-content">
            <input
              type="text"
              value={taskDescription}
              onChange={(e) => {
                setTaskDetails(e.target.value);
              }}
              placeholder="Enter a description of the task you need done"
            />
            <input
              type="text"
              value={taskScope}
              onChange={(e) => {
                setTaskScope(e.target.value);
              }}
              placeholder="What is the scope/ do you need help with"
            />
            <input
              type="text"
              value={address}
              onChange={(e) => {
                setAddress(e.target.value);
              }}
              placeholder="Enter your address"
            />
            <input
              type="text"
              value={dateAndTime}
              onChange={(e) => {
                setDateAndTime(e.target.value);
              }}
              placeholder="Date and time"
            />
            <input
              type="text"
              value={additionalNotes}
              onChange={(e) => {
                setAdditionalNotes(e.target.value);
              }}
              placeholder="Any additional notes"
            />
            <div className="booking-btn">
              <button type="submit">Submit</button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Booking;
