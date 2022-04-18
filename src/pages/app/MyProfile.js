import "./MyProfile.css";
import React, { Component } from "react";
import axios from "axios";
class Myprofile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
    };
  }

  componentDidMount = async () => {
    const token = localStorage.getItem("AUTH_TOKEN");
    const url = "http://localhost:4000/api/users/me";
    try {
      const response = await axios.get(url, {
        headers: { "Content-Type": "application/json", Authorization: token },
      });
      this.setState(response.data);
    } catch (error) {
      console.log("Not able to fetch data");
    }
  };
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
          <span id="profile-name">{this.state.name}</span>
          <p id="about">{this.state.email}</p>
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
