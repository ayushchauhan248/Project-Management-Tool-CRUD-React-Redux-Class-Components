import {
  deleteProjectAction,
  getProjectAction,
  setprojectAction,
} from "../../redux/actions/project";

const mapStateToProps = (state) => ({
  projects: state.projectItems,
});

const mapDispatchToProps = (dispatch) => ({
  getProjectAction: () => dispatch(getProjectAction()),
  deleteProjectAction: (id) => dispatch(deleteProjectAction(id)),
  setprojectAction: (project) => dispatch(setprojectAction(project)),
});
export { mapStateToProps, mapDispatchToProps };
