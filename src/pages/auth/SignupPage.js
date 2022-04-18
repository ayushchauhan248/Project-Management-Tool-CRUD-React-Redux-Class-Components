import "./AuthPage.css";
import { Link } from "react-router-dom";
import React, { Component } from "react";
import axios from "axios";
class SignupPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      password: "",
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    const createUser = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
    };
    console.log(createUser);
    const url = "http://localhost:4000/api/users/signup";
    const response = await axios.post(url, createUser);
    if (response.status === 200) {
      setTimeout(() => (window.location.href = "/login"), 2000);
    } else {
      console.log("error");
    }
  };

  render() {
    return (
      <div className="bdy">
        <div class="main">
          <label for="chk" aria-hidden="true">
            Sign up
          </label>
          <div class="signup">
            <form onSubmit={this.handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Full name"
                className="inpt"
                autoComplete="off"
                onChange={this.handleChange}
              />
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
                Signup
              </button>
              <Link to="/login" id="lnk">
                Have An Account ?
              </Link>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
export default SignupPage;
