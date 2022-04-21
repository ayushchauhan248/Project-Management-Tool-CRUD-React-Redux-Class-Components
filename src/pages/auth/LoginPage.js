import { Link } from "react-router-dom";
import "./AuthPage.css";
import React, { Component } from "react";
import axios from "axios";
import { ImSpinner10 } from "react-icons/im";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      spinner: false,
      invalidCred: false,
    };
  }
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    const user = {
      email: this.state.email,
      password: this.state.password,
    };
    const url = "http://localhost:4000/api/users/login";
    const response = await axios.post(url, user);
    if (response.data.token !== undefined && response.status === 200) {
      this.setState({ spinner: true });
      localStorage.setItem("AUTH_TOKEN", response.data.token);
      setTimeout(() => {
        window.location.href = "/dashboard";
      }, 1000);
    } else {
      this.setState({ spinner: true });
      setTimeout(() => {
        this.setState({ invalidCred: true });
      }, 1000);
      setTimeout(() => {
        this.setState({ spinner: false });
        this.setState({ invalidCred: false });
        window.location.href = "/login";
      }, 2000);
      console.log(response.data);
    }
  };

  render() {
    return (
      <div className="bdy">
        <div className="main">
          <label for="chk" aria-hidden="true">
            Login
          </label>
          <div className="signup">
            <form onSubmit={this.handleSubmit}>
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="inpt"
                autoComplete="off"
                onChange={this.handleChange}
              />
              <input
                type="text"
                name="password"
                placeholder="Password"
                className="inpt"
                autoComplete="off"
                onChange={this.handleChange}
              />
              <button id="btm" type="submit">
                Login
              </button>
              <Link to="/signup" id="lnk">
                Create Account ?
              </Link>
              <div id="spinnerDiv">
                {this.state.spinner && (
                  <ImSpinner10 icon="spin" className="spinner"></ImSpinner10>
                )}
              </div>
            </form>
            <Snackbar open={this.state.invalidCred} autoHideDuration={3000}>
              <Alert severity="error" sx={{ width: "100%" }}>
                INVALID CREDENTIALS . TRY AGAIN !
              </Alert>
            </Snackbar>
          </div>
        </div>
      </div>
    );
  }
}
export default LoginPage;
