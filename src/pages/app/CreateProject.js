import "./CreateProject.css";
import { Component, createRef } from "react";
import { setprojectAction } from "../../redux/actions/project";
import { connect } from "react-redux";

class CreateProject extends Component {
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

  componentDidMount() {
    this.emailInputRef.current.focus();
  }

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
    setTimeout(() => {
      window.location.href = "/dashboard";
      alert("Your Project Created Successfully");
    }, 1000);
  };

  render() {
    const { title, technology, deadline, description } = this.state;
    const enabled =
      title.length > 0 &&
      technology.length > 0 &&
      deadline.length > 0 &&
      description.length > 0;
    console.log(enabled);
    return (
      <div className="creatediv">
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
    );
  }
}
const mapStateToProps = (state) => ({
  projects: state.projectItems,
});
export default connect(mapStateToProps, { setprojectAction })(CreateProject);
