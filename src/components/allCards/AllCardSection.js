import { Component } from "react";
import * as React from "react";
import ProjectCard from "../projectCard/ProjectCard";
import "./AllCardSection.css";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "../../theme";
import Dialog from "@mui/material/Dialog";
import "../../pages/app/CreateProject.css";
import CreateDialog from "../createAndEdit/CreateDialog";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
class AllCardSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      createDailog: false,
      editDailog: false,
      deleteCheck: false,
    };
  }
  componentDidMount() {
    this.props.getProjectAction();
  }

  handleDelete = (id) => {
    if (!window.confirm("Are you sure to delete the project ?")) return;
    this.props.deleteProjectAction(id);
    this.setState({ deleteCheck: true });
    const timeout = setTimeout(() => {
      this.setState({ deleteCheck: false });
    }, 3000);

    return () => {
      clearTimeout(timeout);
    };
  };

  handleClickOpenCreate = () => {
    this.setState({ createDailog: true });
  };

  handleClickOpenEdit = () => {
    this.setState({ editDailog: true });
  };

  handleCloseCreate = () => {
    this.setState({ createDailog: false });
  };

  handleCloseEdit = () => {
    this.setState({ editDailog: false });
  };

  render() {
    return (
      <div id="allcard">
        <div id="head">ALL PROJECTS</div>
        <div className="create">
          <ThemeProvider theme={theme}>
            <Fab
              color="secondary"
              aria-label="add"
              onClick={this.handleClickOpenCreate}
            >
              <AddIcon />
            </Fab>
          </ThemeProvider>
        </div>
        <Dialog open={this.state.createDailog} maxWidth="xl" maxHeight="xl">
          <CreateDialog></CreateDialog>
          <DialogActions>
            <Button
              autoFocus
              onClick={() => {
                if (
                  !window.confirm(
                    "Are you sure to leave, all the changes will be lost?"
                  )
                )
                  return;
                this.handleCloseCreate();
              }}
            >
              Cancel
            </Button>
          </DialogActions>
        </Dialog>
        <Snackbar open={this.state.deleteCheck} autoHideDuration={3000}>
          <Alert severity="info" sx={{ width: "100%" }}>
            Project is a deleted successfully !
          </Alert>
        </Snackbar>
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
};

AllCardSection.defaultProps = {
  getProjectAction: () => {},
  deleteProjectAction: () => {},
};

export default AllCardSection;
