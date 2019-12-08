import { createSelector } from 'reselect';
import { AppState } from '../store';
import { Service } from '../store/services/types';

export const selectService = (provider: string, username: string) => createSelector(
    (state: AppState) => state.services.byId,
    services => (
        Object.keys(services)
            .map(key => (services[key]))
            .filter(user => (
                user.provider.toLowerCase() === provider.toLowerCase() &&
                user.data.username.toLowerCase() === username.toLowerCase()
            ))[0]
    ),
);

export const selectRepo = (reponame: string) => createSelector(
    (state: AppState) => state.repos.byId,
    repos => (
        Object.keys(repos)
            .map(key => (repos[key]))
            .filter(repo => (
                repo.data.name === reponame
            ))[0]
    ),
);
