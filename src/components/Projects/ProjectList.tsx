import React from 'react';
import { Link } from 'react-router-dom';

import { makeStyles, createStyles, Theme } from '@material-ui/core';

import { useSelector } from 'react-redux';
import { AppState } from '../../store';

const useStyles = makeStyles((theme: Theme) => createStyles({
    root: {

    },
}));

const ProjectList: React.FC = () => {
    const classes = useStyles({});
    const projects = useSelector((state: AppState) => state.projects);
    const repos = useSelector((state: AppState) => state.repos);
    
    if (!projects.fetched) {
        return null;
    }

    if (!repos.fetched) {
        return null;
    }

    return (
        <div className={classes.root}>
            <h4>Project List</h4>
            {projects.allIds.length && repos.allIds.length ? (
                <ul>
                    {projects.allIds.map((id) => {
                        const reponame = repos.byId[projects.byId[id].repoid].data.name;
                        
                        return (
                            <li key={id}>
                                <Link to={`/projects/${reponame}`}>
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