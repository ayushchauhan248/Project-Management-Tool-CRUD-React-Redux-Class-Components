
import { Route } from "react-router-dom";
import LoginPage from "./LoginPage";
import SignupPage from "./SignupPage";
import React, { Component } from 'react';

class AuthRoute extends Component {
    render() {
        return (
            <div className="">
                <Route path="/login">
                    <LoginPage></LoginPage>
                </Route>
                <Route path="/signup">
                    <SignupPage></SignupPage>
                </Route>
            </div>
        );
    }
}

export default AuthRoute;