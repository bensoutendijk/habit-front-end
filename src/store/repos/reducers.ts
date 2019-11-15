import {
  ReposState,
  ReposActionTypes,
  REQUEST_REPOS,
  RECIEVE_REPOS,
  REJECT_REPOS,
  IRepo
} from "./types";


const initialState: ReposState = {
  fetching: false,
  fetched: false,
  byId: {},
  allIds: []
};

export function reposReducer(
  state = initialState,
  action: ReposActionTypes
): ReposState {
  switch (action.type) {
    case REQUEST_REPOS:
      return {
        ...state,
        fetching: true,
      };
    case RECIEVE_REPOS:
      return {
        ...state,
        fetching: false,
        fetched: true,
        byId: {
          ...state.byId,
          ...action.payload.reduce((obj, item) => {
            Object.assign(obj, { [item.id]: item });
            return obj;
          }, {})
        },
        allIds: [
          ...state.allIds,
          ...action.payload
          .map((repo: IRepo) => repo.id)
        ]
      };
    case REJECT_REPOS:
      return {
        ...state,
        fetching: false,
        fetched: false,
      };
    default:
      return state;
  }
}
