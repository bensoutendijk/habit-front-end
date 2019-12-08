import React, { useEffect, useState } from 'react';
import { RouteComponentProps } from 'react-router-dom';

import { makeStyles, createStyles, Theme } from '@material-ui/core';


import { useSelector, useDispatch } from 'react-redux';
import { selectRepo } from '../../selectors';
import { AppState } from '../../store';
import { createProject } from '../../store/projects/actions';
import { fetchRepoDetails } from '../../store/repos/actions';
import Loading from '../Loading';

const useStyles = makeStyles((theme: Theme) => createStyles({
    root: {
        
    },
}));

const RepoView: React.FC<ServiceViewProps> = ({ match }) => {
    const { params: { reponame } } = match;
    const classes = useStyles({});
    const dispatch = useDispatch();
    const repo = useSelector(selectRepo(reponame));
    const [repoReady, setRepoReady] = useState(false);
    const [projectReady, setProjectReady] = useState(false);
    
    useEffect(() => {
        const postProject = async () => {
            await dispatch(createProject(repo));
        }
    
        postProject()
            .then(() => setProjectReady(true));
    }, [dispatch]);

    useEffect(() => {
        const getRepoDetails = async () => {
            await dispatch(fetchRepoDetails(repo));
        }
    
        getRepoDetails()
            .then(() => setRepoReady(true));
    }, [dispatch]);

    if (!projectReady || !repoReady) {
        return (
            <Loading />
        )
    }

    return (
        <div className={classes.root}>
            {repo ? (
                <div>
                    {repo.data.name} <br/>
                    <ul>
                        {repo.details.branches.map(branch => (
                            <li key={branch.name}>
                                {branch.name}
                            </li>
                        ))}
                    </ul>
                </div>
            ) : (
                null
            )}
        </div>
    )
}

interface MatchProps {
    username: string;
    provider: string;
    reponame: string;
}

interface ServiceViewProps extends RouteComponentProps<MatchProps> {
  
}

export default RepoView;