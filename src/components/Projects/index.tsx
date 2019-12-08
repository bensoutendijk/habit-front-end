import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';

import ProjectList from './ProjectList';
import ProjectNew from './ProjectNew';
import ProjectView from './ProjectView';

import { useDispatch } from 'react-redux';
import { fetchProjects } from '../../store/projects/actions';

const Projects: React.FC = () => {
    const dispatch = useDispatch();

    const [ready, setReady] = useState(false);

    useEffect(() => {
        const getProjects = async () => {
            await dispatch(fetchProjects());
        }
        getProjects()
            .then(() => setReady(true))
    }, [dispatch]);

    if (!ready) {
        return null;
    }

    return (
        <Switch>
            <Route path="/projects/new" component={ProjectNew} />
            <Route exact path="/projects/:reponame" component={ProjectView} />
            <Route component={ProjectList} />
        </Switch>
    )
}

export default Projects;