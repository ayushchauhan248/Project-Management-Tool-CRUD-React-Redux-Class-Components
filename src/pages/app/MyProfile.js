import "./MyProfile.css";
import React, { Component } from "react";

class Myprofile extends Component {
  render() {
    return (
      <div id="bd">
        <div id="contain">
          <div id="cover-photo">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png"
              id="profile"
              alt="profileImage"
            />
          </div>
          <span id="profile-name">Ayush Chauhan</span>
          <p id="about">Front-end developer And Back-end developer</p>
          <button class="buttn" id="msg-btn">
            Message
          </button>
          <button id="follow-btn">Follows</button>
          <div>
            <i class="fab fa-facebook-f"></i>
            <i class="fab fa-instagram"></i>
            <i class="fab fa-youtube"></i>
            <i class="fab fa-twitter"></i>
          </div>
        </div>
      </div>
    );
  }
}

export default Myprofile;
