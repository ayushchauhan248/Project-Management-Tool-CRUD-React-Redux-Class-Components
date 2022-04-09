import { Link } from 'react-router-dom';
import './AuthPage.css';
import React, { Component } from 'react';

class LoginPage extends Component {
    render() {
        return (
            <div className="bdy">
                <div className="main">
                    <label for="chk" aria-hidden="true">Login</label>
                    <div className="signup">
                        <form>
                            <input type="email" name="email" placeholder="Email" id="inpt" required="" />
                            <input type="password" name="pswd" placeholder="Password" id="inpt" required="" />
                            <Link to="/dashboard" id="lbtn"><button id="btm">Login</button></Link>
                            <Link to="/signup" id="lnk">Create Account ?</Link>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}
export default LoginPage;