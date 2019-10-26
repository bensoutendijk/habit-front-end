export const REQUEST_PROJECTS = 'REQUEST_PROJECTS';
export const RECIEVE_PROJECTS = 'RECIEVE_PROJECTS';
export const REJECT_PROJECTS = 'REJECT_PROJECTS';

export interface IProject {
  _id: string;
  name: string;
}

export interface ProjectsState {
  fetched: boolean
  fetching: boolean
  byId: {
    [key: string]: IProject
  }
  allIds: string[]
}

interface RequestProjects {
  type: typeof REQUEST_PROJECTS
}

interface RecieveProjects {
  type: typeof RECIEVE_PROJECTS
  payload: IProject[]
}

interface RejectProjects {
  type: typeof REJECT_PROJECTS
}

export type ProjectsActionTypes = (
  RequestProjects |
  RecieveProjects |
  RejectProjects 
)