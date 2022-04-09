import { ActionTypes } from "../actions/project";

const intialState = {
  projectData: [],
  one: {},
};

export default function projectItems(state = intialState, action) {
  switch (action.type) {
    case ActionTypes.GET_PROJECTS:
      return {
        projectData: action.data,
      };
    case ActionTypes.SET_PROJECT:
      return {
        projectData: [...state.projectData, action.data],
      };
    case ActionTypes.GETONE_PROJECT:
      return {
        one: action.data,
      };
    case ActionTypes.DLT_PROJECT:
      return {
        projectData: state.projectData.filter(
          (item) => item.id !== action.data
        ),
      };
    case ActionTypes.UPDATE_PROJECT:
      return {
        projectData: state.projectData.map((item) => {
          if (item._id === action.data.id) {
            return {
              ...state.projectData,
              ...action.data,
            };
          } else {
            return action.data;
          }
        }),
      };
    default:
      return state;
  }
}
