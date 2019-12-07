import React, { useState, useEffect } from 'react';
import { Switch, Route, RouteComponentProps } from 'react-router-dom';

import Loading from '../Loading';
import RepoList from './RepoList';
import RepoView from './RepoView';

import { useDispatch, useSelector } from 'react-redux';
import { selectService } from '../../selectors';
import { Service } from '../../store/services/types';
import { fetchRepos } from '../../store/repos/actions';

const Repos: React.FC<ReposProps> = ({ match }) => {
    const { params: { provider, username } } = match;
    const dispatch = useDispatch();
    const service: Service = useSelector(selectService(provider, username));
    const [ready, setReady] = useState(false);

    useEffect(() => {
        const getRepos = async (service: Service) => {
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
        <Switch>
            <Route exact path="/projects/:provider/:username/:reponame" component={RepoView} />
            <Route component={RepoList} />
        </Switch>
    )
}

interface MatchProps {
    username: string;
    provider: string;
}

interface ReposProps extends RouteComponentProps<MatchProps> {

}

export default Repos;