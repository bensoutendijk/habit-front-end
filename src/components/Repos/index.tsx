import React, { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';

import RepoList from './RepoList';
import RepoSettings from './RepoSettings';
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
        return null
    }

    return (
        <>
            <Route exact path="/projects/:reponame" component={RepoSettings} />
            <Route exact path="/projects/:reponame" component={RepoView} />
            <Route exact path="/projects/new" component={RepoList} />
            <Route path="/services" component={RepoList} />
        </>
    )
}

export default Repos;