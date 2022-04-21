import "../../pages/app/CreateProject.css";
import * as React from "react";
import { Component, createRef } from "react";
import { setprojectAction } from "../../redux/actions/project";
import { connect } from "react-redux";
import { ImSpinner10 } from "react-icons/im";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
class CreateDialog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      technology: "",
      deadline: new Date(),
      description: "",
      errors: {},
      spinner: false,
      created: false,
    };

    this.emailInputRef = createRef();
  }

  componentDidMount() {
    this.emailInputRef.current.focus();
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
    this.validateForm();
  };

  validateForm() {
    const { title, technology, description } = this.state;
    let errors = {};
    let formIsValid = true;
    if (title.trim().length < 3) {
      formIsValid = false;
      errors["titleErr"] = "*Title must be at least 3 characters.";
    }

    if (technology.length < 3) {
      formIsValid = false;
      errors["technologyErr"] = "*Technology must be at least 3 characters.";
    }

    if (description.length < 20) {
      formIsValid = false;
      errors["descriptionErr"] = "*Description must be at least 20 characters.";
    }

    this.setState({
      errors: errors,
    });
    return formIsValid;
  }

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.validateForm()) {
      const project = {
        title: this.state.title,
        technology: this.state.technology,
        deadline: this.state.deadline,
        description: this.state.description,
      };
      this.setState({ spinner: true, created: true });
      this.props.setprojectAction(project);
      setTimeout(() => {
        window.location.href = "/dashboard";
      }, 2000);
    }
  };

  disablePastDate = () => {
    const today = new Date();
    const dd = String(today.getDate()).padStart(2, "0");
    const mm = String(today.getMonth() + 1).padStart(2, "0");
    const yyyy = today.getFullYear();
    return yyyy + "-" + mm + "-" + dd;
  };
  render() {
    const { titleErr, technologyErr, descriptionErr } = this.state.errors;
    const { title, technology, description } = this.state;
    const enabled =
      title.length > 0 && technology.length > 0 && description.length > 0;
    return (
      <div>
        <div id="headi">+ CREATE PROJECT</div>
        <form onSubmit={this.handleSubmit} id="formc">
          <div id="two">
            <input
              type="text"
              id="title"
              name="title"
              placeholder="Project Title"
              className="title"
              onChange={this.handleChange}
              autoComplete="off"
              ref={this.emailInputRef}
            />
            <div className="errorMsg">{titleErr}</div>
            <input
              type="text"
              id="techno"
              name="technology"
              placeholder="Technology "
              className="title"
              autoComplete="off"
              onChange={this.handleChange}
            />
            <div className="errorMsg">{technologyErr}</div>
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
              onChange={this.handleChange}
            />
            <textarea
              type="text"
              id="description"
              name="description"
              placeholder="Description "
              className="title"
              autoComplete="off"
              onChange={this.handleChange}
            />
            <div className="errorMsg">{descriptionErr}</div>
          </div>
          <div id="four">
            <button
              disabled={!enabled}
              type="submit"
              id="subBut"
              title={!enabled ? "ALL INPUTS ARE REQUIRED" : ""}
            >
              Submit
            </button>
          </div>
          <div id="createSpinnerDiv">
            {this.state.spinner && (
              <ImSpinner10 icon="spin" className="spinner"></ImSpinner10>
            )}
          </div>
        </form>
        <Snackbar open={this.state.created} autoHideDuration={2000}>
          <Alert severity="info" sx={{ width: "100%" }}>
            Project is a created successfully !
          </Alert>
        </Snackbar>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  projects: state.projectItems,
});
export default connect(mapStateToProps, { setprojectAction })(CreateDialog);
