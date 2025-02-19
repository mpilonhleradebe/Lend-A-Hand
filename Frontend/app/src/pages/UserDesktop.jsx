import React, { useState } from "react";
import search from "../assets/icons/search.svg";
import chatData from "../chatData";

const UserDesktop = () => {
  const [name, setName] = useState("Mpilonhle");
  const [surname, setSurname] = useState("Radebe");
  const [job, setJob] = useState("Handyman");
  const [location, setLocation] = useState("near Mam's Kota");
  const [exprience, setExprience] = useState("5+ years");
  return (
    <>
      <div className="web-name-desktop">
        <a href="/">
          <h1>lend a hand.</h1>
        </a>
      </div>
      <div className="user-desk-top">
        <div className="chat-box">
          <div className="chat-title-search">
            <h1>MyKasi</h1>
            <img src={search} alt="" />
          </div>

          <div className="my-community">
            <div className="small-profile-pic">
              <img
                src="https://d3bcax9k86ac90.cloudfront.net/uploads/region_profiles/2022/07/e7cb4abe0a93bd4_t_w_1280_h_1024.jpg"
                alt=""
              />
            </div>
            <p>My community</p>
            <img
              src="https://img.icons8.com/ios-glyphs/30/chevron-right.png"
              alt=""
            />
          </div>

          <div className="all-chats">
            {chatData.map((chat, index) => {
              return (
                <div className="message-structure" key={index}>
                  <div className="small-profile-pic">
                    <img src={chat.profileLink} alt={chat.name} />
                  </div>
                  <div className="name-message">
                    <h2>{chat.name}</h2>
                    <p>{chat.message}</p>
                  </div>
                  <span>
                    {chat.timeSent}
                    <p className="status">{chat.receiptStatus}</p>
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* USER MAIN PROFILE VIEW */}
        <div className="user-profile">
          <img
            className="profile-image"
            src="https://cdn.prod.website-files.com/64bb72994e3f4165f1f945ba/6512de737bb29c900d080e21_Plumber.webp"
            alt=""
          />

          <div className="name-surname">
            <h1>{name}</h1>
            <h1>{surname}</h1>
          </div>
          <div className="job-location">
            <span style={{ border: "1px solid #658a5a" }}>{job}</span>
            <span style={{ border: "1px solid yellow" }}>{location}</span>
            <span style={{ border: "1px solid orange" }}>{exprience}</span>
          </div>

          <div className="bio">
            <p>
              Been a handyman longer than I can remember! I’m
              always available to help out. Whether it’s a leaky tap or a
              squeaky door, I’m your go-to guy — no job too small! I charge a
              little something, but trust me, it won’t break the bank. I’m just
              trying to keep busy while waiting for the big break! Call me
              anytime; I’ll be right there, maybe after a cup of tea!
            </p>
          </div>
        </div>

        {/* SIDE BAR */}
        <div className="sidebar">
          <div className="sidebar-menu">
            <div className="menu-item active">
              <img
                src="https://img.icons8.com/ios-filled/50/home.png"
                alt="home"
              />
              <p>Home</p>
            </div>
            <div className="menu-item">
              <img
                src="https://img.icons8.com/ios-filled/50/chat-message.png"
                alt="messages"
              />
              <p>Messages</p>
            </div>
            <div className="menu-item">
              <img
                src="https://img.icons8.com/ios-filled/50/bell.png"
                alt="notifications"
              />
              <p>Notifications</p>
            </div>
            <div className="menu-item">
              <img
                src="https://img.icons8.com/ios-filled/50/briefcase.png"
                alt="jobs"
              />
              <p>My Jobs</p>
            </div>
          </div>

          <div className="sidebar-settings">
            <h3>Settings</h3>
            <div className="menu-item">
              <img
                src="https://img.icons8.com/ios-filled/50/settings.png"
                alt="settings"
              />
              <p>Account Settings</p>
            </div>
            <div className="menu-item">
              <img
                src="https://img.icons8.com/ios-filled/50/help.png"
                alt="help"
              />
              <p>Help Center</p>
            </div>
            <div className="menu-item logout">
              <img
                src="https://img.icons8.com/ios-filled/50/exit.png"
                alt="logout"
              />
              <p>Logout</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserDesktop;
