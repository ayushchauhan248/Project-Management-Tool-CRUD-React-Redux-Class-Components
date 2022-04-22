import React, { Component } from "react";
import {
  getOneProjectAction,
  deleteProjectAction,
} from "../../redux/actions/project";
import { connect } from "react-redux";
import "./ProjectDetails.css";
import * as moment from "moment";
import { FiEdit } from "react-icons/fi";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

class ProjectIdPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deleteConfirm: false,
    };
  }

  componentDidMount() {
    this.props.getOneProjectAction(this.props.id);
  }

  openDeleteDialog = () => {
    this.setState({ deleteConfirm: true });
  };

  closeDeleteDialog = () => {
    this.setState({ deleteConfirm: false });
  };

  handleCloseAndDelete = (id) => {
    this.props.deleteProjectAction(id);
    this.closeDeleteDialog();
    window.location.href = "/dashboard";
  };

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
        <div id="operationButton">
          <Link to={`/edit/${this.props.id}`} className="every linkClass">
            <button>
              <FiEdit className="iconSize"></FiEdit>
            </button>
          </Link>
          <button onClick={this.openDeleteDialog}>
            <MdDelete className="iconSize"></MdDelete>
          </button>
          <Dialog
            open={this.state.deleteConfirm}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title">
              {"Are you sure to delete this?"}
            </DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                If you will click Agree project will be deleted
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={this.closeDeleteDialog}>Disagree</Button>
              <Button
                onClick={() => {
                  this.handleCloseAndDelete(this.props.id);
                }}
                autoFocus
              >
                Agree
              </Button>
            </DialogActions>
          </Dialog>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  projectone: state.projectItems,
});

export default connect(mapStateToProps, {
  getOneProjectAction,
  deleteProjectAction,
})(ProjectIdPage);
