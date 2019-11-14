import axios from 'axios';
import {
  ServicesActionTypes,
  IService,
  REQUEST_SERVICES,
  RECIEVE_SERVICES,
  REJECT_SERVICES,
} from './types';
import { ThunkAction } from 'redux-thunk';
import { AppState } from '..';

export function requestServices(): ServicesActionTypes {
  return {
    type: REQUEST_SERVICES,
  }
}

export function recieveServices(users: IService[]): ServicesActionTypes {
  return {
    type: RECIEVE_SERVICES,
    payload: users
  }
}

export function rejectServices(): ServicesActionTypes {
  return {
    type: REJECT_SERVICES,
  }
}

export const fetchServices = (): ThunkAction<void, AppState, null, ServicesActionTypes> => async (dispatch) => {
  dispatch(requestServices());
  try {
    const { data } = await axios.get('/api/services');
    dispatch(recieveServices(data))
  } catch (error) {
    dispatch(rejectServices());
  }
}

export const fetchService = (provider: string, username: string): ThunkAction<void, AppState, null, ServicesActionTypes> => async (dispatch) => {
  dispatch(requestServices());
  try {
    const { data } = await axios.get(`/api/services/${provider}/${username}`);
    dispatch(recieveServices(data))
  } catch (error) {
    dispatch(rejectServices());
  }
}