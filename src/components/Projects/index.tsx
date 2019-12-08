import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';

import { makeStyles, createStyles, Theme } from '@material-ui/core';

import Loading from '../Loading';
import ProjectList from './ProjectList';
import ProjectNew from './ProjectNew';
import ProjectView from './ProjectView';
import Services from '../Services';

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
        return (
            <Loading />
        )
    }

    return (
        <Switch>
            <Route path="/projects/new" component={ProjectNew} />
            <Route exact path="/projects/:provider/:username/:reponame" component={ProjectView} />
            <Route component={ProjectList} />
        </Switch>
    )
}

export default Projects;