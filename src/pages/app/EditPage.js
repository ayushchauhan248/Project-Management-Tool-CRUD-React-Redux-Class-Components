import React, { Component, createRef } from "react";
import { connect } from "react-redux";
import {
  getOneProjectAction,
  updateProject,
} from "../../redux/actions/project";
import "./CreateProject.css";
import { Prompt } from "react-router";
import * as moment from "moment";

class EditPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      technology: "",
      deadline: "",
      description: "",
    };
    this.emailInputRef = createRef();
  }

  async componentDidMount() {
    this.emailInputRef.current.focus();
    await this.props.getOneProjectAction(window.location.pathname.slice(6));
    this.setState({
      title: this.props.projectone?.one?.title,
      technology: this.props.projectone?.one?.technology,
      deadline: this.props.projectone?.one?.deadline,
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
    this.props.updateProject(project);
    setTimeout(() => {
      window.location = "/dashboard";
      alert("Your Project Is Updated");
    }, 1000);
  };

  render() {
    const { title, technology, deadline, description } = this.state;
    const enabled =
      title === this.props.projectone?.one?.title &&
      technology === this.props.projectone?.one?.technology &&
      deadline === this.props.projectone?.one?.deadline &&
      description === this.props.projectone?.one?.description;
    console.log(
      "date",
      this.state.deadline,
      new Date(this.state.deadline).getDate()
    );
    const newCustomDate = new Date(this.state.deadline);
    return (
      <div className="creatediv">
        <Prompt
          when={true}
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
              value={newCustomDate}
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
        </form>
      </div>
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
