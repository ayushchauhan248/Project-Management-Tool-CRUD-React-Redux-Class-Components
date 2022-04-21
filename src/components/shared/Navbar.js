import "./Navbar.css";
import { CgProfile } from "react-icons/cg";
import React, { Component } from "react";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "../../theme";
import axios from "axios";
class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
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
  logout = () => {
    localStorage.removeItem("AUTH_TOKEN");
    window.location.href = "/login";
  };
  render() {
    return (
      <div id="nav">
        <div id="left">
          <img
            id="img"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLEMlXG0H88o88hkRIK5vuAgYO57TCcGzczg&usqp=CAU"
            alt="LOGO"
          />
          <span id="brand">PROMAN</span>
        </div>
        <div id="username-div">{this.state.name}</div>
        <div id="iconDiv">
          <Link to="/myProfile" id="myProfile">
            <CgProfile id="icon"></CgProfile>
          </Link>
        </div>
        <ThemeProvider theme={theme}>
          <div id="buttonDiv">
            <Button
              size="small"
              variant="contained"
              color="primary"
              onClick={this.logout}
            >
              Logout
            </Button>
          </div>
        </ThemeProvider>
      </div>
    );
  }
}
export default Navbar;
