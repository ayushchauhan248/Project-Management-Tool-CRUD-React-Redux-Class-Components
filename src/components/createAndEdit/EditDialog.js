import React, { Component, createRef } from "react";
import { connect } from "react-redux";
import {
  getOneProjectAction,
  updateProject,
} from "../../redux/actions/project";
import "../../pages/app/CreateProject.css";
import { Prompt } from "react-router";
import { ImSpinner10 } from "react-icons/im";
import Dialog from "@mui/material/Dialog";

class EditPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      technology: "",
      deadline: new Date(),
      description: "",
      spinner: false,
    };
    this.emailInputRef = createRef();
  }

  async componentDidMount() {
    this.emailInputRef.current.focus();
    await this.props.getOneProjectAction(this.props.id);
    this.setState({
      title: this.props.projectone?.one?.title,
      technology: this.props.projectone?.one?.technology,
      deadline: new Date(this.props.projectone?.one?.deadline),
      description: this.props.projectone?.one?.description,
    });
  }
  handleChange = (e) => {
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value,
    });
  };
  handleSubmit = (e) => {
    const project = {
      id: window.location.pathname.slice(6),
      title: this.state.title,
      technology: this.state.technology,
      deadline: this.state.deadline,
      description: this.state.description,
    };
    e.preventDefault();
    this.setState({ spinner: true });
    this.props.updateProject(project);
    setTimeout(() => {
      window.location = "/dashboard";
      alert("Your Project Is Updated");
    }, 3000);
  };

  giveCurrentDate = () => {
    const today = new Date(this.state.deadline);
    const dd = String(today.getDate()).padStart(2, "0");
    const mm = String(today.getMonth() + 1).padStart(2, "0");
    const yyyy = today.getFullYear();
    return yyyy + "-" + mm + "-" + dd;
  };

  disablePastDate = () => {
    const today = new Date();
    const dd = String(today.getDate()).padStart(2, "0");
    const mm = String(today.getMonth() + 1).padStart(2, "0");
    const yyyy = today.getFullYear();
    return yyyy + "-" + mm + "-" + dd;
  };
  render() {
    const { title, technology, description, deadline } = this.state;
    const enabled =
      title === this.props.projectone?.one?.title &&
      technology === this.props.projectone?.one?.technology &&
      description === this.props.projectone?.one?.description &&
      deadline === this.props.projectone?.one?.deadline;
    return (
      <>
        <Dialog open={this.props.open} maxWidth="lg">
          <div className="creatediv">
            <Prompt
              when={!enabled}
              message="You have unsaved changes, are you sure you want to leave?"
            />
            <div id="headi">EDIT PROJECT</div>
            <form onSubmit={this.handleSubmit} id="formc">
              <div id="two">
                <input
                  type="text"
                  id="title"
                  name="title"
                  placeholder="Title"
                  className="title"
                  value={this.state.title}
                  onChange={this.handleChange}
                  autoComplete="off"
                  ref={this.emailInputRef}
                />
                <input
                  type="text"
                  id="techno"
                  name="technology"
                  placeholder="Technology "
                  className="title"
                  autoComplete="off"
                  value={this.state.technology}
                  onChange={this.handleChange}
                />
              </div>
              <div id="three">
                <input
                  type="date"
                  id="deadline"
                  name="deadline"
                  placeholder="Deadline "
                  className="title"
                  autoComplete="off"
                  min={this.disablePastDate()}
                  value={this.giveCurrentDate()}
                  onChange={this.handleChange}
                />
                <textarea
                  type="text"
                  id="description"
                  name="description"
                  placeholder="Description "
                  className="title"
                  autoComplete="off"
                  value={this.state.description}
                  onChange={this.handleChange}
                />
              </div>
              <div>
                <button
                  type="submit"
                  id="subBut"
                  disabled={enabled}
                  title={enabled ? "No change in any data" : ""}
                >
                  Update
                </button>
              </div>
              <div id="editSpinnerDiv">
                {this.state.spinner && (
                  <ImSpinner10 icon="spin" className="spinner"></ImSpinner10>
                )}
              </div>
            </form>
          </div>
        </Dialog>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  projectone: state.projectItems,
});

export default connect(mapStateToProps, {
  getOneProjectAction,
  updateProject,
})(EditPage);
