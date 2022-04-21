import "./Sidebar.css";
import { Link } from "react-router-dom";
// import { MdCreateNewFolder } from "react-icons/md";
import { ImHome } from "react-icons/im";

import React, { Component } from "react";

class Sidebar extends Component {
  render() {
    return (
      <div id="sidebar">
        <div id="uul">
          <Link to="/dashboard" id="llnk" className="doFlex">
            <ImHome id="llii"></ImHome>
            <div id="lli">DASHBOARD</div>
          </Link>
        </div>
      </div>
    );
  }
}
export default Sidebar;
