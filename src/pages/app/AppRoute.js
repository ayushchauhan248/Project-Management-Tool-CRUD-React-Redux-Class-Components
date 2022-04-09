import "./Approute.css";
import { Route } from "react-router-dom";
import Sidebar from "../../components/shared/Sidebar";
import CreateProject from "./CreateProject";
import Myprofile from "./MyProfile";
import Navbar from "../../components/shared/Navbar";
import ProjectIdPage from "./ProjectIdPage";
import EditPage from "./EditPage";
import React, { Component } from "react";
import DashboardPage from "./DashboardPage";

class AppRoute extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div id="grid-container">
          <Sidebar></Sidebar>
          <div id="cont">
            <Route path="/dashboard">
              <DashboardPage></DashboardPage>
            </Route>
            <Route path="/create">
              <CreateProject></CreateProject>
            </Route>
            <Route path="/myprofile">
              <Myprofile></Myprofile>
            </Route>
            <Route
              exact
              path="/project/:id"
              render={({ match }) => <ProjectIdPage id={match.params.id} />}
            ></Route>
            <Route path="/edit/:id">
              <EditPage></EditPage>
            </Route>
          </div>
        </div>
      </div>
    );
  }
}

export default AppRoute;
