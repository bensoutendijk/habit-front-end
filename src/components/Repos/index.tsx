import React, { useState, useEffect } from 'react';
import { Switch, Route, RouteComponentProps } from 'react-router-dom';

import Loading from '../Loading';
import RepoList from './RepoList';
import RepoView from './RepoView';

import { useDispatch } from 'react-redux';
import { fetchRepos } from '../../store/repos/actions';

const Repos: React.FC = () => {
    const dispatch = useDispatch();
    const [ready, setReady] = useState(false);

    useEffect(() => {
        const getRepos = async () => {
            await dispatch(fetchRepos());
        }
    
        getRepos()
            .then(() => setReady(true));
    }, [dispatch]);

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

export default Repos;