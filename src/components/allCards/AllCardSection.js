import { Component } from "react";
import ProjectCard from "../projectCard/ProjectCard";
import "./AllCardSection.css";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "../../theme";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";
import "../../pages/app/CreateProject.css";

class AllCardSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      technology: "",
      deadline: "",
      description: "",
      createDailog: false,
    };
  }
  componentDidMount() {
    this.props.getProjectAction();
  }

  handleDelete = (id) => {
    this.props.deleteProjectAction(id);
    alert("Click OK to delete");
    window.location.reload();
  };
  handleClickOpen = () => {
    this.setState({ createDailog: true });
  };

  handleClose = () => {
    this.setState({ createDailog: false });
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    const project = {
      title: this.state.title,
      technology: this.state.technology,
      deadline: this.state.deadline,
      description: this.state.description,
    };
    e.preventDefault();
    this.props.setprojectAction(project);
    this.handleClose();
  };

  render() {
    const { title, technology, deadline, description } = this.state;
    const enabled =
      title.length > 0 &&
      technology.length > 0 &&
      deadline.length > 0 &&
      description.length > 0;
    console.log("this props all card", this.props.projects);
    return (
      <div id="allcard">
        <div id="head">ALL PROJECTS</div>
        <div className="create">
          <ThemeProvider theme={theme}>
            <Fab
              color="secondary"
              aria-label="add"
              onClick={this.handleClickOpen}
            >
              <AddIcon />
            </Fab>
          </ThemeProvider>
        </div>
        <Dialog open={this.state.createDailog} maxWidth="xl" maxHeight="xl">
          <div id="headi">+ CREATE PROJECT</div>
          <div id="formOuter">
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
                <input
                  type="text"
                  id="techno"
                  name="technology"
                  placeholder="Technology "
                  className="title"
                  autoComplete="off"
                  onChange={this.handleChange}
                />
              </div>
              <div id="three">
                <input
                  type="text"
                  id="deadline"
                  name="deadline"
                  placeholder="Deadline "
                  className="title"
                  autoComplete="off"
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
              </div>
              <div id="four">
                <button disabled={!enabled} type="submit" id="subBut">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </Dialog>
        {this.props.projects.projectData?.reverse().map((res) => {
          return (
            <div id="proDiv">
              <ProjectCard
                title={res.title}
                technology={res.technology}
              ></ProjectCard>
              <div id="cardButtonSections">
                <Link to={`/project/${res._id}`} className="every linkClass">
                  <button className="btndash">View</button>
                </Link>
                <Link to={"/edit/" + res._id} className="every linkClass">
                  <button className="btndash">Edit</button>
                </Link>
                <button
                  onClick={() => this.handleDelete(res._id)}
                  className="btndash linkClass"
                  id="testing"
                >
                  Delete
                </button>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

AllCardSection.propTypes = {
  projects: PropTypes.object.isRequired,
  getProjectAction: PropTypes.func.isRequired,
  deleteProjectAction: PropTypes.func.isRequired,
  setprojectAction: PropTypes.func.isRequired,
};

AllCardSection.defaultProps = {
  getProjectAction: () => {},
  deleteProjectAction: () => {},
  setprojectAction: () => {},
};

export default AllCardSection;
