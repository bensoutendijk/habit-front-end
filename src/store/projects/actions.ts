import axios from 'axios';
import {
    ProjectsActionTypes,
    Project,
    REQUEST_PROJECTS,
    RECIEVE_PROJECTS,
    REJECT_PROJECTS,
} from './types';
import { ThunkAction } from 'redux-thunk';
import { AppState } from '..';

export function requestProjects(): ProjectsActionTypes {
    return {
        type: REQUEST_PROJECTS,
    }
}

export function recieveProjects(projects: Project[]): ProjectsActionTypes {
    return {
        type: RECIEVE_PROJECTS,
        payload: projects
    }
}

export function rejectProjects(): ProjectsActionTypes {
    return {
        type: REJECT_PROJECTS,
    }
}

export const fetchProjects = (): ThunkAction<void, AppState, null, ProjectsActionTypes> => async (dispatch) => {
    dispatch(requestProjects());
    try {
        const { data } = await axios.get('/api/projects');
        dispatch(recieveProjects(data))
    } catch (error) {
        dispatch(rejectProjects());
    }
}

export const fetchProject = (_id: string): ThunkAction<void, AppState, null, ProjectsActionTypes> => async (dispatch) => {
    dispatch(requestProjects());
    try {
        const { data } = await axios.get(`/api/projects/${_id}`);
        dispatch(recieveProjects(data))
    } catch (error) {
        dispatch(rejectProjects());
    }
}