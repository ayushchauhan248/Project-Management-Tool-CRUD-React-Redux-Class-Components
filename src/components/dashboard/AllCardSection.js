import { Component } from "react";
import ProjectCard from "./ProjectCard";
import "./AllCardSection.css";
import { connect } from "react-redux";
import {
  deleteProjectAction,
  getProjectAction,
} from "../../redux/actions/project";
import { Link } from "react-router-dom";
import { BsPlusLg } from "react-icons/bs";

class AllCardSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      overlay: false,
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

  openOverLay = () => {
    this.setState({ overlay: true });
  };

  render() {
    console.log(this.state.overlay);
    return (
      <div id="allcard">
        <div id="head">ALL PROJECTS </div>
        <Link to="/create" className="create">
          <BsPlusLg></BsPlusLg>
        </Link>
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

const mapStateToProps = (state) => ({
  projects: state.projectItems,
});

export default connect(mapStateToProps, {
  getProjectAction,
  deleteProjectAction,
})(AllCardSection);
