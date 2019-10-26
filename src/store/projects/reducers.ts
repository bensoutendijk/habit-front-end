import {
  ProjectsState,
  ProjectsActionTypes,
  REQUEST_PROJECTS,
  REJECT_PROJECTS,
  RECIEVE_PROJECTS,
  IProject
} from "./types";


const initialState: ProjectsState = {
  fetching: false,
  fetched: false,
  byId: {},
  allIds: []
};

export function projectsReducer(
  state = initialState,
  action: ProjectsActionTypes
): ProjectsState {
  switch (action.type) {
    case REQUEST_PROJECTS:
      return {
        ...state,
        fetching: true,
      };
    case RECIEVE_PROJECTS:
      return {
        ...state,
        fetching: false,
        fetched: true,
        byId: {
          ...state.byId,
          ...action.payload.reduce((obj, item) => {
            Object.assign(obj, { [item._id]: item });
            return obj;
          }, {})
        },
        allIds: [
          ...state.allIds,
          ...action.payload
          .map((user: IProject) => user._id)
          .filter((id: string) => !state.allIds.includes(id))
        ]
      };
    case REJECT_PROJECTS:
      return {
        ...state,
        fetching: false,
        fetched: false,
      };
    default:
      return state;
  }
}
