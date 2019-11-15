import { createSelector } from 'reselect';
import { AppState } from '../store';
import { IService } from '../store/services/types';

export const selectUserByUsername = (provider: string, username: string) => createSelector(
  (state: AppState) => state.services.byId,
  services => (
    Object.keys(services)
    .map(key => (services[key]))
    .filter(user => (
      user.provider.toLowerCase() === provider.toLowerCase() &&
      user.data.username.toLowerCase() === username.toLowerCase()
    ))
  ),
);
