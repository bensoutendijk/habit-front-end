import React, { useState, useEffect } from 'react';
import { Switch, Route, RouteComponentProps, Link } from 'react-router-dom';

import Loading from '../Loading';

import { useDispatch, useSelector } from 'react-redux';
import { AppState } from '../../store';
import { selectService } from '../../selectors';
import { IService } from '../../store/services/types';
import { fetchRepos } from '../../store/repos/actions';

const Repos: React.FC<ReposProps> = ({ match }) => {
  const { params: { provider, username } } = match;
    const dispatch = useDispatch();
    const service: IService = useSelector(selectService(provider, username));
    const repos = useSelector((state: AppState) => state.repos);
    const [ready, setReady] = useState(false);

    useEffect(() => {
        const getRepos = async (service: IService) => {
          await dispatch(fetchRepos(service));
        }
    
        getRepos(service)
        .then(() => setReady(true));
    }, [dispatch, service]);
  
    if (!ready) {
      return (
        <Loading />
      )
    }

    return (
        <div>
            {repos.fetched ? (
              <ul>
                {repos.allIds.map(id => (
                  <li key={repos.byId[id].id}>
                    <Link to={`repos/${repos.byId[id].name}`}>{repos.byId[id].name}</Link>
                  </li>
                ))}
              </ul>
            ) : (
              null
            )}
        </div>
    )
}

interface MatchProps {
    username: string,
    provider: string,
}

interface ReposProps extends RouteComponentProps<MatchProps> {

}

export default Repos;