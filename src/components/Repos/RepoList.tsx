import React from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';

import { makeStyles, createStyles, Theme } from '@material-ui/core';


import { useSelector } from 'react-redux';
import { AppState } from '../../store';

const useStyles = makeStyles((theme: Theme) => createStyles({
    root: {

    },
}));

const RepoList: React.FC<RepoListProps> = ({ match }) => {
    const { params: { provider, username } } = match;
    const classes = useStyles({});
    const repos = useSelector((state: AppState) => state.repos);

    return (
        <div className={classes.root}>
            <h4>Repo List</h4>
            {repos.fetched ? (
                <ul>
                    {repos.allIds.map(id => (
                        <li key={repos.byId[id].id}>
                            <Link to={`/projects/${repos.byId[id].data.name}`}>
                                {repos.byId[id].data.name}
                            </Link>
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
    username: string;
    provider: string;
}

interface RepoListProps extends RouteComponentProps<MatchProps> {

}

export default RepoList;