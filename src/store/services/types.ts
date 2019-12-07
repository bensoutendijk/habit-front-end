export const REQUEST_SERVICES = 'REQUEST_SERVICES';
export const RECIEVE_SERVICES = 'RECIEVE_SERVICES';
export const REJECT_SERVICES = 'REJECT_SERVICES';

export type UserId = string;

export interface Service {
    _id: UserId;
    data: ServiceData;
    provider: string;
}

export interface ServiceData {
    username: string;
    userid: number;
}

export interface ServicesState {
    fetched: boolean;
    fetching: boolean;
    byId: {
        [key: string]: Service;
    };
    allIds: UserId[];
}

interface RequestServices {
    type: typeof REQUEST_SERVICES;
}

interface RecieveServices {
    type: typeof RECIEVE_SERVICES;
    payload: Service[];
}

interface RejectServices {
    type: typeof REJECT_SERVICES;
}

export type ServicesActionTypes = (
    RequestServices |
    RecieveServices |
    RejectServices 
)