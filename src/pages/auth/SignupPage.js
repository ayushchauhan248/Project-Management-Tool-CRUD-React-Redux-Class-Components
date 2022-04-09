import './AuthPage.css';
import { Link } from 'react-router-dom';
import React, { Component } from 'react';

class SignupPage extends Component {
    render() {
        return (
            <div className="bdy">
                <div class="main">
                    <label for="chk" aria-hidden="true">Sign up</label>
                    <div class="signup">
                        <form>
                            <input type="text" name="txt" placeholder="User name" id="inpt" required="" />
                            <input type="email" name="email" placeholder="Email" id="inpt" required="" />
                            <input type="password" name="pswd" placeholder="Password" id="inpt" required="" />
                            <Link to="/dashboard" id="lbtn"><button id="btm">Login</button></Link>
                            <Link to="/login" id="lnk">Have An Account ?</Link>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}
export default SignupPage;