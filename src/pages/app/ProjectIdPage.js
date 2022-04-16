import React, { Component } from "react";
import { getOneProjectAction } from "../../redux/actions/project";
import { connect } from "react-redux";
import "./ProjectDetails.css";
import * as moment from "moment";
class ProjectIdPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.props.getOneProjectAction(this.props.id);
  }

  render() {
    return (
      <div id="maindiv">
        <div id="mainh">PROJECT DETAILS</div>
        <div className="oneBox">
          <div className="heading">Title</div>
          <div className="detail">{this.props.projectone?.one?.title}</div>
        </div>
        <div className="oneBox">
          <div className="heading">Technology</div>
          <div className="detail">{this.props.projectone?.one?.technology}</div>
        </div>
        <div className="oneBox">
          <div className="heading">
            Deadline<span id="format">(DD/MM/YYYY)</span>
          </div>
          {/* <div className="detail">{this.props.projectone?.one?.deadline}</div> */}
          <div className="detail">
            {moment(this.props.projectone?.one?.deadline).format("DD/MM/YYYY")}
          </div>
        </div>
        <div className="oneBox">
          <div className="heading">Description</div>
          <div className="detail">
            {this.props.projectone?.one?.description}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  projectone: state.projectItems,
});

export default connect(mapStateToProps, { getOneProjectAction })(ProjectIdPage);
