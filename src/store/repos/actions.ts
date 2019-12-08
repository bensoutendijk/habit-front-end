import axios from 'axios';
import {
    ReposActionTypes,
    Repo,
    REQUEST_REPOS,
    RECIEVE_REPOS,
    REJECT_REPOS,
} from './types';
import { ThunkAction } from 'redux-thunk';
import { AppState } from '..';
import { Service } from '../services/types';

export function requestRepos(): ReposActionTypes {
    return {
        type: REQUEST_REPOS,
    }
}

export function recieveRepos(repos: Repo[]): ReposActionTypes {
    return {
        type: RECIEVE_REPOS,
        payload: repos
    }
}

export function rejectRepos(): ReposActionTypes {
    return {
        type: REJECT_REPOS,
    }
}

export const fetchRepos = (): ThunkAction<void, AppState, null, ReposActionTypes> => async (dispatch) => {
    dispatch(requestRepos());
    try {
        const { data } = await axios.get(`/api/repos`);
        dispatch(recieveRepos(data))
    } catch (error) {
        dispatch(rejectRepos());
    }
}

export const fetchRepoDetails = (repo: Repo): ThunkAction<void, AppState, null, ReposActionTypes> => async (dispatch) => {
    const { name } = repo.data;
    dispatch(requestRepos());
    try {
        const { data: details } = await axios.get(`/api/repos/${name}/details`);
        const data = [
            {
                ...repo,
                details,
            }
        ]
        dispatch(recieveRepos(data))
    } catch (error) {
        dispatch(rejectRepos());
    }
}