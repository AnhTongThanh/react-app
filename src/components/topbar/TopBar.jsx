import React from "react";
import "./topbar.css";

export default function TopBar() {
  return (
    <div className="top">
      <div className="topLeft">
        <i className="topIcon fab fa-facebook-square"></i>
        <i className="topIcon fab fa-instagram-square"></i>
        <i className="topIcon fab fa-pinterest-square"></i>
        <i className="topIcon fab fa-twitter-square"></i>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">Home</li>
          <li className="topListItem">About</li>
          <li className="topListItem">Contact</li>
          <li className="topListItem">Write</li>
          <li className="topListItem">Login</li>
        </ul>
      </div>
      <div className="topRight">
        <img
          className="topImg"
          src="https://imgs.search.brave.com/PCCsO055kQjKXfXtYbSCXav4lZrqAoznAGpH2mUv36U/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9jYW1u/YW5nMjRoLm5ldC93/cC1jb250ZW50L3Vw/bG9hZHMvMjAyMS8w/NS9oaW5oLW5lbi1t/ZW8tY29uLWNoby1t/YXktdGluaC0xMS5q/cGc"
          alt=""
        />
        <i className="topSearchIcon fas fa-search"></i>
      </div>
    </div>
  );
}
