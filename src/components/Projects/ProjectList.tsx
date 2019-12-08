import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { makeStyles, createStyles, Theme } from '@material-ui/core';

import Loading from '../Loading';

import { useDispatch, useSelector } from 'react-redux';
import { AppState } from '../../store';
import { fetchProjects } from '../../store/projects/actions';

const useStyles = makeStyles((theme: Theme) => createStyles({
    root: {

    },
}));

const ProjectList: React.FC = () => {
    const classes = useStyles({});
    const projects = useSelector((state: AppState) => state.projects);
    const repos = useSelector((state: AppState) => state.repos);
    
    return (
        <div className={classes.root}>
            {projects.allIds.length && repos.allIds.length ? (
                <ul>
                    {projects.allIds.map((id) => {
                        const provider = repos.byId[projects.byId[id].repoid].service.provider;
                        const username = repos.byId[projects.byId[id].repoid].data.owner.login;
                        const reponame = repos.byId[projects.byId[id].repoid].data.name;
                        
                        return (
                            <li key={id}>
                                <Link to={`/projects/${provider}/${username}/${reponame}`}>
                                    {repos.byId[projects.byId[id].repoid].data.name}
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            ) : (
                <div>
                    <span>No Projects Yet</span>
                    <Link to="/projects/new">Create New Project</Link>
                </div>
            )}
        </div>
    )
}

export default ProjectList;