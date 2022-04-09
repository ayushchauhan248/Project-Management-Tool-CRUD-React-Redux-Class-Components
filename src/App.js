import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import AuthRoute from "./pages/auth/AuthRoute";
import AppRoute from "./pages/app/AppRoute";
import NotFoundPage from "./pages/NotFoundPage";
import React, { Component } from "react";
// import Test2 from "./pages/app/Test2";

class App extends Component {
  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     show: true
  //   }
  //   this.visible = () => { this.setState({ show: true }) }
  //   this.invisible = () => { this.setState({ show: false }) }
  // }

  // state = {
  //   color: "green",
  // };

  // chng = () => {
  //   this.setState({ color: "red" });
  // };
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/login"></Redirect>
          </Route>

          <Route path={["/login", "/signup"]} exact>
            <AuthRoute></AuthRoute>
          </Route>

          <Route
            path={[
              "/dashboard",
              "/create",
              "/delete",
              "/myprofile",
              "/project/:id",
              "/edit/:id",
            ]}
          >
            <AppRoute></AppRoute>
          </Route>

          <Route>
            <NotFoundPage></NotFoundPage>
          </Route>
        </Switch>
      </BrowserRouter>
      // <div>
      //   <button onClick={this.visible}>SHOW</button>
      //   <button onClick={this.invisible}>HIDE</button>
      //   <br></br>
      //   {this.state.show && <Test />}
      // </div>

      // <div>
      //   <div>TEST 2</div>
      //   <button onClick={this.chng}>Change color</button>
      //   <Test2 color={this.state.color}></Test2>
      // </div>
    );
  }
}
export default App;
