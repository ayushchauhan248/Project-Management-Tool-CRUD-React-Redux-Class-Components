import axios from "axios";
// types of our actions
export const ActionTypes = {
  GET_PROJECTS: "GET_PROJECTS",
  SET_PROJECT: "SET_PROJECT",
  DLT_PROJECT: "DLT_PROJECT",
  GETONE_PROJECT: "GETONE_PROJECT",
  UPDATE_PROJECT: "UPDATE_PROJECT",
};

const token = localStorage.getItem("AUTH_TOKEN");

// Action - will send the data from any component/api to redux store
export const getProjectAction = () => {
  return async (dispatch) => {
    try {
      const res = await axios.get("http://localhost:4000/api/projects", {
        headers: { "Content-Type": "application/json", Authorization: token },
      });
      dispatch({
        type: ActionTypes.GET_PROJECTS,
        data: res.data,
      });
    } catch (err) {
      console.log(err);
    }
  };
};

export const getOneProjectAction = (id) => {
  return async (dispatch) => {
    try {
      const resp = await axios.get(
        `http://localhost:4000/api/projects/one/${id}`,
        {
          headers: { "Content-Type": "application/json", Authorization: token },
        }
      );
      dispatch({
        type: ActionTypes.GETONE_PROJECT,
        data: resp.data,
      });
    } catch (err) {
      console.log(err);
    }
  };
};

export const setprojectAction = (data) => async (dispatch) => {
  try {
    await axios.post("http://localhost:4000/api/projects/create", data, {
      headers: { "Content-Type": "application/json", Authorization: token },
    });
    console.log("in action", data);
    dispatch({
      type: ActionTypes.SET_PROJECT,
      data: data,
    });
  } catch (err) {
    console.log(err);
  }
};

export const deleteProjectAction = (id) => async (dispatch) => {
  try {
    await axios.delete(`http://localhost:4000/api/projects/${id}`, {
      headers: { "Content-Type": "application/json", Authorization: token },
    });
    dispatch({
      type: ActionTypes.DLT_PROJECT,
      data: id,
    });
  } catch (err) {
    console.log(err);
  }
};

export const updateProject = (data) => async (dispatch) => {
  try {
    await axios.put(`http://localhost:4000/api/projects/${data.id}`, data, {
      headers: { "Content-Type": "application/json", Authorization: token },
    });
    console.log(data);
    dispatch({
      type: ActionTypes.UPDATE_PROJECT,
      data: data,
    });
  } catch (err) {
    console.log(err);
  }
};
